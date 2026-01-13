'use client';

import { useState } from 'react';
import ServiceHero from '@/components/service-detail/ServiceHero';
import ServiceDescription from '@/components/service-detail/ServiceDescription';
import ServiceTech from '@/components/service-detail/ServiceTech';
import ServiceCTA from '@/components/service-detail/ServiceCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import StructuredData from '@/components/StructuredData';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function EcommercePage() {
  const [showModal, setShowModal] = useState(false);
  
  const serviceData = serviceSchema({
    name: 'Soluciones E-commerce',
    description: 'Tiendas online completas que venden 24/7. Configuración de plataformas, desarrollo custom e integraciones con redes sociales y pasarelas de pago.',
    url: 'https://jcengine.co/servicios/ecommerce',
  });
  
  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://jcengine.co' },
    { name: 'Servicios', url: 'https://jcengine.co/#services' },
    { name: 'E-commerce', url: 'https://jcengine.co/servicios/ecommerce' },
  ]);
  const features = [
    {
      title: 'Plataforma a tu Medida',
      description: 'Shopify para rapidez, WooCommerce para flexibilidad, o desarrollo custom para necesidades únicas.',
    },
    {
      title: 'Pasarelas de Pago',
      description: 'Integración con Stripe, PayPal, Mercado Pago y más opciones de pago local e internacional.',
    },
    {
      title: 'Gestión de Inventario',
      description: 'Sistema automatizado de inventario con alertas de stock y sincronización multi-canal.',
    },
    {
      title: 'Marketing Digital',
      description: 'Integración con Instagram Shopping, Facebook Catalog, TikTok Shop y Google Shopping.',
    },
    {
      title: 'Automatizaciones',
      description: 'Carritos abandonados, emails transaccionales, cupones y promociones automáticas.',
    },
    {
      title: 'Analytics Avanzado',
      description: 'Seguimiento de conversiones, análisis de comportamiento y reportes de ventas detallados.',
    },
  ];

  const technologies = [
    { name: 'Shopify / Liquid' },
    { name: 'WooCommerce / WordPress' },
    { name: 'React / Next.js' },
    { name: 'Stripe / PayPal' },
    { name: 'Node.js APIs' },
    { name: 'MySQL / PostgreSQL' },
  ];

  const platforms = [
    { name: 'Shopify' },
    { name: 'WooCommerce' },
    { name: 'Stripe' },
    { name: 'Mercado Pago' },
    { name: 'Meta Business' },
    { name: 'Google Merchant' },
  ];

  const methodology = [
    {
      title: 'Estrategia Comercial',
      description: 'Definimos tu modelo de negocio, catálogo de productos, precios y estrategia de marketing.',
    },
    {
      title: 'Selección de Plataforma',
      description: 'Elegimos la mejor plataforma según tu presupuesto, escala y necesidades específicas.',
    },
    {
      title: 'Diseño UX/UI',
      description: 'Creamos una experiencia de compra intuitiva optimizada para conversión.',
    },
    {
      title: 'Desarrollo e Integración',
      description: 'Configuramos tu tienda, integramos pasarelas de pago y conectamos canales de venta.',
    },
    {
      title: 'Configuración de Marketing',
      description: 'Implementamos pixels, catálogos, automatizaciones y herramientas de análisis.',
    },
    {
      title: 'Capacitación y Lanzamiento',
      description: 'Te enseñamos a gestionar tu tienda y lanzamos con estrategia de marketing inicial.',
    },
  ];

  return (
    <>
      <StructuredData data={[serviceData, breadcrumbData]} />
      <Navbar onContactClick={() => setShowModal(true)} />
      <ServiceHero
        title="Soluciones E-commerce"
        description="Tiendas online completas que venden 24/7. Desde configuración de plataformas hasta desarrollo custom con todas las integraciones que necesitas."
        icon={<ShoppingCartIcon style={{ width: '64px', height: '64px', stroke: '#00D1FF' }} />}
      />
      <ServiceDescription
        title="¿Qué incluye este servicio?"
        description="Creamos tu tienda online desde cero o mejoramos tu comercio electrónico actual. Configuración completa, integraciones con redes sociales, automatización de ventas y estrategias para maximizar conversiones."
        features={features}
      />
      <ServiceTech
        technologies={technologies}
        platforms={platforms}
        methodology={methodology}
      />
      <ServiceCTA serviceName="Soluciones E-commerce" />
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} serviceContext="Soluciones E-commerce" />}
    </>
  );
}
