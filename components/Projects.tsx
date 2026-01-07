'use client';

import {
  projectsSection,
  sectionTitle,
  sectionSubtitle,
  projectsGrid,
  projectCard,
  projectImage,
  projectTitle,
  projectDescription,
  projectLink,
  ctaContainer,
  ctaButton,
} from '@/styles/sections/projects.css';

import Image from 'next/image';

export default function Projects() {
  return (
    <section className={projectsSection} id="projects">
      <h2 className={sectionTitle}>Proyectos Destacados</h2>
      <p className={sectionSubtitle}>
        Soluciones reales que integran arquitectura backend, desarrollo web, ecommerce y consultoría tecnológica.
      </p>

      <div className={projectsGrid}>
        <div className={projectCard}>
          <Image
            src="/projects/shopify-mockup.png"
            alt="Mockup Tienda Shopify"
            width={600}
            height={260}
            className={projectImage}
          />
          <h3 className={projectTitle}>Tienda Online Shopify Integrada</h3>
          <p className={projectDescription}>
            Implementación completa de ecommerce con catálogo optimizado, integraciones a redes sociales y automatización de ventas.
          </p>
          <a href="#" className={projectLink}>Ver detalles →</a>
        </div>

        <div className={projectCard}>
          <Image
            src="/projects/backend-gcp.png"
            alt="Mockup Backend GCP"
            width={600}
            height={260}
            className={projectImage}
          />
          <h3 className={projectTitle}>Backend de Autenticación en GCP</h3>
          <p className={projectDescription}>
            Sistema profesional con login, roles, refresh token y despliegue CI/CD mediante GitHub Actions.
          </p>
          <a href="#" className={projectLink}>Ver detalles →</a>
        </div>

        <div className={projectCard}>
          <Image
            src="/projects/banca-fintech.png"
            alt="Mockup Servicios Bancarios"
            width={600}
            height={260}
            className={projectImage}
          />
          <h3 className={projectTitle}>Soluciones Backend para Banca y Fintech</h3>
          <p className={projectDescription}>
            APIs RESTful, migración Java 8 → 21, remediación de vulnerabilidades y optimización de rendimiento.
          </p>
          <a href="#" className={projectLink}>Ver detalles →</a>
        </div>

        <div className={projectCard}>
          <Image
            src="/projects/landing-demo.png"
            alt="Mockup Landing Corporativa"
            width={600}
            height={260}
            className={projectImage}
          />
          <h3 className={projectTitle}>Landing Corporativa Moderna</h3>
          <p className={projectDescription}>
            Diseño web profesional para mostrar servicios, proyectos y propuesta de valor.
          </p>
          <a href="#" className={projectLink}>Ver detalles →</a>
        </div>
      </div>

      <div className={ctaContainer}>
        <p>¿Quieres ver más proyectos?</p>
        {/* <a href="#contact" className={ctaButton}>Ver portafolio completo</a> */}
      </div>
    </section>
  );
}