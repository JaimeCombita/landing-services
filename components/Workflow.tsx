'use client';

import {
  workflowSection,
  sectionTitle,
  sectionSubtitle,
  stepsGrid,
  stepCard,
  stepNumber,
  stepTitle,
  stepText,
} from '@/styles/sections/workflow.css';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      text: 'Analizo tu negocio, objetivos y necesidades técnicas para definir el alcance real.',
    },
    {
      number: '02',
      title: 'Propuesta',
      text: 'Diseño una solución clara, escalable y alineada a tus metas.',
    },
    {
      number: '03',
      title: 'Desarrollo',
      text: 'Implemento la solución con buenas prácticas, arquitectura sólida, CI/CD y comunicación constante.',
    },
    {
      number: '04',
      title: 'Entrega y Soporte',
      text: 'Despliego la solución, entrego documentación y brindo soporte para asegurar resultados.',
    },
  ];

  return (
    <section className={workflowSection} id="workflow">
      <h2 className={sectionTitle}>Mi Proceso de Trabajo</h2>
      <p className={sectionSubtitle}>
        Un enfoque claro, estructurado y orientado a resultados en cada proyecto.
      </p>
      <div className={stepsGrid}>
        {steps.map((step) => (
          <div key={step.number} className={stepCard}>
            <div className={stepNumber}>{step.number}</div>
            <h3 className={stepTitle}>{step.title}</h3>
            <p className={stepText}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}