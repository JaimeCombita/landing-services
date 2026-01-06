'use client';

import {
  ctaFinalSection,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
  trustBadge,
  trustText,
} from '@/styles/sections/cta.css';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';

interface FinalCTAProps {
  onContactClick: () => void;
}

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className={ctaFinalSection}>
      <h2 className={ctaTitle}>¿Listo para llevar tu negocio al siguiente nivel?</h2>
      <p className={ctaSubtitle}>
        Hablemos de tu proyecto y construyamos una solución escalable, segura y alineada a tus objetivos.
      </p>
      <button className={ctaButton} onClick={onContactClick}>
        Agendar consulta gratuita
      </button>
      <div className={trustBadge}>
        <ShieldCheckIcon width={20} height={20} stroke="#00D1FF" />
        <span className={trustText}>
          Más de 10 años de experiencia en banca, fintech y soluciones empresariales.
        </span>
      </div>
    </section>
  );
}