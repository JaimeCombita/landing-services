'use client';

import {
  heroWrapper,
  heroContent,
  leftColumn,
  heading,
  subheading,
  buttonGroup,
  primaryButton,
  secondaryButton,
  trustBadge,
} from '@/styles/sections/hero.css';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className={heroWrapper} id="hero">
      <div className={heroContent}>
        <div className={leftColumn}>
          <h1 className={heading}>
            Soluciones digitales escalables para empresas que necesitan arquitectura, desarrollo y consultoría de alto nivel
          </h1>
          <p className={subheading}>
            Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas alineadas a objetivos de negocio.
          </p>
          <div className={buttonGroup}>
            <button className={primaryButton}>Agendar consulta</button>
            <button className={secondaryButton}>Ver proyectos</button>
          </div>
          <div className={trustBadge}>
            <ShieldCheckIcon width={18} height={18} stroke="#00D1FF" />
            <span>Experiencia en banca, fintech y soluciones empresariales</span>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}