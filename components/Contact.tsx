'use client';

import {
  contactSection,
  sectionTitle,
  sectionSubtitle,
  form,
  formGroup,
  label,
  input,
  textarea,
  submitButton,
} from '@/styles/sections/contact.css';

export default function Contact() {
  return (
    <section className={contactSection} id="contact">
      <h2 className={sectionTitle}>Hablemos</h2>
      <p className={sectionSubtitle}>
        ¿Tienes un proyecto en mente o necesitas asesoría técnica? Completa el formulario y me pondré en contacto contigo.
      </p>

      <form className={form} onSubmit={(e) => e.preventDefault()}>
        <div className={formGroup}>
          <label htmlFor="name" className={label}>Nombre</label>
          <input type="text" id="name" name="name" className={input} required />
        </div>

        <div className={formGroup}>
          <label htmlFor="email" className={label}>Correo electrónico</label>
          <input type="email" id="email" name="email" className={input} required />
        </div>

        <div className={formGroup}>
          <label htmlFor="message" className={label}>Mensaje</label>
          <textarea id="message" name="message" rows={5} className={textarea} required />
        </div>

        <button type="submit" className={submitButton}>Enviar mensaje</button>
      </form>
    </section>
  );
}