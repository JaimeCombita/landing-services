'use client';

import { useState } from 'react';
import ServiceHero from '@/components/service-detail/ServiceHero';
import ServiceDescription from '@/components/service-detail/ServiceDescription';
import ServiceTech from '@/components/service-detail/ServiceTech';
import ServiceCTA from '@/components/service-detail/ServiceCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function DesarrolloWebPage() {
  const [showModal, setShowModal] = useState(false);
  const features = [
    {
      title: 'Diseño Responsive',
      description: 'Sitios que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop.',
    },
    {
      title: 'SEO Optimizado',
      description: 'Implementación de mejores prácticas SEO técnico para mejor posicionamiento en buscadores.',
    },
    {
      title: 'Rendimiento Superior',
      description: 'Carga ultrarrápida con optimización de imágenes, lazy loading y código eficiente.',
    },
    {
      title: 'Integraciones',
      description: 'Conectamos tu sitio con APIs, CRM, herramientas de marketing y sistemas de terceros.',
    },
    {
      title: 'Panel de Administración',
      description: 'Sistema de gestión de contenido intuitivo para que actualices tu sitio fácilmente.',
    },
    {
      title: 'Despliegue en la Nube',
      description: 'Hosting optimizado en plataformas como Vercel, Netlify o AWS con SSL incluido.',
    },
  ];

  const technologies = [
    { name: 'Next.js / React / Angular' },
    { name: 'TypeScript / JavaScript' },
    { name: 'Tailwind CSS / Vanilla Extract CSS' },
    { name: 'Node.js' },
    { name: 'Java / Spring Boot' },
    { name: 'PostgreSQL, SQL Server, MySQL' },
    { name: 'Redis' },
    { name: 'REST APIs' },
  ];

  const platforms = [
    { name: 'Vercel' },
    { name: 'Netlify' },
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'GitHub Actions' },
  ];

  const methodology = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tus objetivos, audiencia y competencia para crear una estrategia sólida.',
    },
    {
      title: 'Diseño y Prototipo',
      description: 'Creamos wireframes y diseños interactivos para validar la experiencia antes de desarrollar.',
    },
    {
      title: 'Desarrollo',
      description: 'Construimos tu sitio con código limpio, escalable y siguiendo las mejores prácticas.',
    },
    {
      title: 'Testing y QA',
      description: 'Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y compatibilidad.',
    },
    {
      title: 'Lanzamiento',
      description: 'Despliegue en producción con monitoreo y optimización de performance.',
    },
    {
      title: 'Soporte Continuo',
      description: 'Mantenimiento, actualizaciones y soporte técnico post-lanzamiento.',
    },
  ];

  return (
    <>
      <Navbar onContactClick={() => setShowModal(true)} />
      <ServiceHero
        title="Desarrollo Web"
        description="Sitios web modernos, rápidos y optimizados para conversión. Transformamos tu visión en experiencias digitales que impulsan resultados."
        icon={<CodeBracketIcon style={{ width: '64px', height: '64px', stroke: '#00D1FF' }} />}
      />
      <ServiceDescription
        title="¿Qué incluye este servicio?"
        description="Desarrollamos sitios web que no solo se ven bien, sino que convierten visitantes en clientes. Desde landing pages de alto impacto hasta sitios corporativos completos con panel de administración."
        features={features}
      />
      <ServiceTech
        technologies={technologies}
        platforms={platforms}
        methodology={methodology}
      />
      <ServiceCTA serviceName="Desarrollo Web" />
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} serviceContext="Desarrollo Web" />}
    </>
  );
}
