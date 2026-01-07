import { Resend } from 'resend';
import Airtable from 'airtable';
import { NextResponse } from 'next/server';
import { generateContactEmailHTML, generateContactEmailSubject } from '@/lib/email-templates/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configurar Airtable
const base = process.env.AIRTABLE_API_KEY 
  ? new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID || '')
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, message } = body;

    // Validación básica en el servidor
    if (!name || !email || !phone || !country || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // 1. GUARDAR EN AIRTABLE (si está configurado)
    if (base && process.env.AIRTABLE_TABLE_NAME) {
      try {
        await base(process.env.AIRTABLE_TABLE_NAME).create([
          {
            fields: {
              'Nombre': name,
              'Email': email,
              'Telefono': phone,
              'Pais': country,
              'Mensaje': message,
              'Estado': 'Nuevo',
            },
          },
        ]);
        console.log('✅ Datos guardados en Airtable');
      } catch (airtableError) {
        console.error('❌ Error al guardar en Airtable:', airtableError);
        // Continuar aunque falle Airtable
      }
    }

    // 2. ENVIAR EMAIL CON RESEND
    const { data, error } = await resend.emails.send({
      from: 'Formulario Landing <onboarding@resend.dev>',
      to: ['leonardo.102408@hotmail.com'],
      subject: generateContactEmailSubject(name),
      html: generateContactEmailHTML({ name, email, phone, country, message }),
      replyTo: email,
    });

    if (error) {
      console.error('❌ Error de Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('✅ Email enviado correctamente');

    return NextResponse.json({ 
      success: true, 
      message: 'Mensaje enviado y guardado correctamente',
      data 
    });
  } catch (error) {
    console.error('❌ Error general:', error);
    return NextResponse.json(
      { error: 'Error al procesar el mensaje. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}
