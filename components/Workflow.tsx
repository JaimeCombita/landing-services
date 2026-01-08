'use client';

import {
  workflowSection,
  sectionTitle,
  sectionSubtitle,
  timelineContainer,
  stepItem,
  stepCircle,
  stepNumber,
  stepContent,
  stepTitle,
  stepText,
  stepLine,
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
      <div className={timelineContainer}>
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={stepItem}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={stepCircle}>
              <span className={stepNumber}>{step.number}</span>
            </div>
            {index < steps.length - 1 && <div className={stepLine} />}
            <div className={stepContent}>
              <h3 className={stepTitle}>{step.title}</h3>
              <p className={stepText}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}