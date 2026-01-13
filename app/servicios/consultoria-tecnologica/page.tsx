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
import { LightBulbIcon } from '@heroicons/react/24/outline';

export default function ConsultoriaTecnologicaPage() {
  const [showModal, setShowModal] = useState(false);
  
  const serviceData = serviceSchema({
    name: 'Consultoría Tecnológica',
    description: 'Asesoría estratégica para optimizar tu infraestructura tecnológica. Mejora seguridad, rendimiento y escalabilidad con decisiones informadas.',
    url: 'https://jcengine.co/servicios/consultoria-tecnologica',
  });
  
  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://jcengine.co' },
    { name: 'Servicios', url: 'https://jcengine.co/#services' },
    { name: 'Consultoría Tecnológica', url: 'https://jcengine.co/servicios/consultoria-tecnologica' },
  ]);
  const features = [
    {
      title: 'Auditoría de Código',
      description: 'Revisión exhaustiva de tu codebase para identificar problemas de calidad, seguridad y performance.',
    },
    {
      title: 'Diseño de Arquitectura',
      description: 'Creación de arquitecturas escalables y mantenibles para nuevos proyectos o refactorización.',
    },
    {
      title: 'Optimización de Performance',
      description: 'Análisis y mejora de velocidad de carga, consultas a base de datos y uso de recursos.',
    },
    {
      title: 'Seguridad y Compliance',
      description: 'Evaluación de vulnerabilidades, implementación de mejores prácticas y cumplimiento normativo.',
    },
    {
      title: 'Escalabilidad',
      description: 'Estrategias para que tu sistema soporte más usuarios, datos y operaciones sin degradarse.',
    },
    {
      title: 'Stack Tecnológico',
      description: 'Asesoría en selección de tecnologías, frameworks y herramientas adecuadas para tu proyecto.',
    },
  ];

  const technologies = [
    { name: 'Análisis de Código' },
    { name: 'Code Review' },
    { name: 'Performance Testing' },
    { name: 'Security Audit' },
    { name: 'Architecture Design' },
    { name: 'Documentation' },
  ];

  const platforms = [
    { name: 'AWS / GCP / Azure' },
    { name: 'GitHub / GitLab' },
    { name: 'Monitoring Tools' },
    { name: 'CI/CD Pipelines' },
  ];

  const methodology = [
    {
      title: 'Entrevista Inicial',
      description: 'Conocemos tu proyecto, objetivos, desafíos actuales y expectativas de la consultoría.',
    },
    {
      title: 'Análisis Profundo',
      description: 'Revisamos código, infraestructura, procesos y documentación existente de forma exhaustiva.',
    },
    {
      title: 'Diagnóstico',
      description: 'Identificamos problemas, riesgos, oportunidades de mejora y cuellos de botella.',
    },
    {
      title: 'Recomendaciones',
      description: 'Creamos un informe detallado con hallazgos, prioridades y plan de acción concreto.',
    },
    {
      title: 'Implementación (Opcional)',
      description: 'Podemos ayudarte a implementar las mejoras recomendadas o guiar a tu equipo.',
    },
    {
      title: 'Seguimiento',
      description: 'Validamos que las soluciones implementadas funcionen correctamente y cumplan objetivos.',
    },
  ];

  return (
    <>
      <StructuredData data={[serviceData, breadcrumbData]} />
      <Navbar onContactClick={() => setShowModal(true)} />
      <ServiceHero
        title="Consultoría Tecnológica"
        description="Asesoría estratégica para optimizar tu infraestructura tecnológica. Mejora seguridad, rendimiento y escalabilidad con decisiones informadas."
        icon={<LightBulbIcon style={{ width: '64px', height: '64px', stroke: '#00D1FF' }} />}
      />
      <ServiceDescription
        title="¿Qué incluye este servicio?"
        description="Análisis técnico profundo de tus sistemas actuales o nuevos. Te ayudamos a tomar las mejores decisiones tecnológicas, resolver problemas complejos y establecer las bases para un crecimiento sostenible."
        features={features}
      />
      <ServiceTech
        technologies={technologies}
        platforms={platforms}
        methodology={methodology}
      />
      <ServiceCTA serviceName="Consultoría Tecnológica" />
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} serviceContext="Consultoría Tecnológica" />}
    </>
  );
}
