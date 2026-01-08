'use client';

import {
  techSection,
  techContainer,
  techTitle,
  techSubtitle,
  techGrid,
  techColumn,
  techColumnTitle,
  techList,
  techItem,
  techLogo,
  techLogoImage,
  techName,
  methodologyContainer,
  methodologyTitle,
  methodologySteps,
  stepCard,
  stepNumber,
  stepTitle,
  stepDescription,
} from '@/styles/sections/service-detail.css';

interface Technology {
  name: string;
  logo?: string;
}

interface Step {
  title: string;
  description: string;
}

interface ServiceTechProps {
  technologies: Technology[];
  platforms?: Technology[];
  methodology: Step[];
}

export default function ServiceTech({
  technologies,
  platforms,
  methodology,
}: ServiceTechProps) {
  return (
    <section className={techSection}>
      <div className={techContainer}>
        <h2 className={techTitle}>Tecnologías y Metodología</h2>
        <p className={techSubtitle}>
          Utilizamos las mejores herramientas y un proceso probado para garantizar resultados excepcionales
        </p>

        <div className={techGrid}>
          <div className={techColumn}>
            <h3 className={techColumnTitle}>Tecnologías</h3>
            <div className={techList}>
              {technologies.map((tech, index) => (
                <div key={index} className={techItem}>
                  {tech.logo && (
                    <div className={techLogo}>
                      <img src={tech.logo} alt={tech.name} className={techLogoImage} />
                    </div>
                  )}
                  <span className={techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {platforms && platforms.length > 0 && (
            <div className={techColumn}>
              <h3 className={techColumnTitle}>Plataformas</h3>
              <div className={techList}>
                {platforms.map((platform, index) => (
                  <div key={index} className={techItem}>
                    {platform.logo && (
                      <div className={techLogo}>
                        <img src={platform.logo} alt={platform.name} className={techLogoImage} />
                      </div>
                    )}
                    <span className={techName}>{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={methodologyContainer}>
          <h3 className={methodologyTitle}>Nuestro Proceso</h3>
          <div className={methodologySteps}>
            {methodology.map((step, index) => (
              <div key={index} className={stepCard}>
                <div className={stepNumber}>{index + 1}</div>
                <h4 className={stepTitle}>{step.title}</h4>
                <p className={stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
