'use client';

import {
  servicesSection,
  sectionTitle,
  sectionSubtitle,
  cardsGrid,
  card,
  icon,
  cardTitle,
  cardText,
  cardLink,
} from '../styles/sections/services.css';

import {
  CodeBracketIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <section className={servicesSection} id="services">
      <h2 className={sectionTitle}>Servicios Profesionales</h2>
      <p className={sectionSubtitle}>
        Soluciones diseñadas para impulsar tu negocio con tecnología moderna, arquitectura sólida y enfoque estratégico.
      </p>
      <div className={cardsGrid}>
        <div className={card}>
          <CodeBracketIcon className={icon} />
          <h3 className={cardTitle}>Desarrollo Web</h3>
          <p className={cardText}>
            Sitios web modernos, rápidos y optimizados para conversión. Integración con APIs, SEO técnico y despliegue en la nube.
          </p>
          <a href="#projects" className={cardLink}>Ver más →</a>
        </div>
        <div className={card}>
          <ShoppingCartIcon className={icon} />
          <h3 className={cardTitle}>Tiendas Online Shopify</h3>
          <p className={cardText}>
            Implementación completa de tiendas con WhatsApp, Instagram y TikTok. Catálogo, automatización y optimización de ventas.
          </p>
          <a href="#projects" className={cardLink}>Ver más →</a>
        </div>
        <div className={card}>
          <Cog6ToothIcon className={icon} />
          <h3 className={cardTitle}>Aplicaciones a Medida</h3>
          <p className={cardText}>
            Soluciones personalizadas basadas en microservicios o monolitos distribuidos. APIs, automatización y sistemas internos.
          </p>
          <a href="#projects" className={cardLink}>Ver más →</a>
        </div>
        <div className={card}>
          <LightBulbIcon className={icon} />
          <h3 className={cardTitle}>Consultoría Tecnológica</h3>
          <p className={cardText}>
            Diagnóstico, auditoría y diseño de arquitectura para mejorar seguridad, rendimiento y escalabilidad.
          </p>
          <a href="#projects" className={cardLink}>Ver más →</a>
        </div>
      </div>
    </section>
  );
}