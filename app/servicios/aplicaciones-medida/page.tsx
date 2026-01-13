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
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function AplicacionesMedidaPage() {
  const [showModal, setShowModal] = useState(false);
  
  const serviceData = serviceSchema({
    name: 'Aplicaciones a Medida',
    description: 'Software personalizado que resuelve tus desafíos específicos. Desde APIs hasta sistemas empresariales complejos con arquitectura escalable.',
    url: 'https://jcengine.co/servicios/aplicaciones-medida',
  });
  
  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://jcengine.co' },
    { name: 'Servicios', url: 'https://jcengine.co/#services' },
    { name: 'Aplicaciones a Medida', url: 'https://jcengine.co/servicios/aplicaciones-medida' },
  ]);
  const features = [
    {
      title: 'Arquitectura Escalable',
      description: 'Diseñamos sistemas que crecen con tu negocio usando microservicios o arquitectura modular.',
    },
    {
      title: 'APIs Robustas',
      description: 'Desarrollo de APIs REST, documentadas y fáciles de integrar.',
    },
    {
      title: 'Automatización de Procesos',
      description: 'Eliminamos tareas repetitivas con flujos automatizados que ahorran tiempo y dinero.',
    },
    {
      title: 'Integraciones Complejas',
      description: 'Conectamos múltiples sistemas, bases de datos y servicios de terceros sin problemas.',
    },
    {
      title: 'Sistemas Internos',
      description: 'CRM, ERP, dashboards administrativos y herramientas personalizadas para tu equipo.',
    },
    {
      title: 'Seguridad Avanzada',
      description: 'Implementación de autenticación, autorización, encriptación y buenas prácticas de seguridad.',
    },
  ];

  const technologies = [
    { name: 'Node.js / Express' },
    { name: 'Java / Spring Framework' },
    { name: 'TypeScript / JavaScript' },
    { name: 'React / Next.js / Angular' },
    { name: 'PostgreSQL / SQL Server, MySQL' },
    { name: 'Redis / Kafka' },
    { name: 'Docker / Kubernetes' },
  ];

  const platforms = [
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'Azure' },
  ];

  const methodology = [
    {
      title: 'Análisis y Planificación',
      description: 'Entendemos tu problema, procesos actuales y definimos los requerimientos del sistema.',
    },
    {
      title: 'Diseño de Arquitectura',
      description: 'Creamos la arquitectura técnica, diagramas de flujo y seleccionamos el stack tecnológico.',
    },
    {
      title: 'Desarrollo Iterativo',
      description: 'Construimos el sistema en sprints con entregas parciales para validación continua.',
    },
    {
      title: 'Testing Completo',
      description: 'Pruebas unitarias, de integración y end-to-end para garantizar calidad y estabilidad.',
    },
    {
      title: 'Despliegue y CI/CD',
      description: 'Implementamos pipelines de integración y despliegue continuo para actualizaciones rápidas.',
    },
    {
      title: 'Documentación y Soporte',
      description: 'Documentación técnica completa y soporte para mantenimiento y evolución del sistema.',
    },
  ];

  return (
    <>
      <StructuredData data={[serviceData, breadcrumbData]} />
      <Navbar onContactClick={() => setShowModal(true)} />
      <ServiceHero
        title="Aplicaciones a Medida"
        description="Software personalizado que resuelve tus desafíos específicos. Desde APIs hasta sistemas empresariales complejos con arquitectura escalable."
        icon={<Cog6ToothIcon style={{ width: '64px', height: '64px', stroke: '#00D1FF' }} />}
      />
      <ServiceDescription
        title="¿Qué incluye este servicio?"
        description="Desarrollamos soluciones de software completamente personalizadas para tu negocio. No hay dos proyectos iguales, por eso creamos sistemas que se adaptan exactamente a tus procesos y necesidades."
        features={features}
      />
      <ServiceTech
        technologies={technologies}
        platforms={platforms}
        methodology={methodology}
      />
      <ServiceCTA serviceName="Aplicaciones a Medida" />
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} serviceContext="Aplicaciones a Medida" />}
    </>
  );
}
