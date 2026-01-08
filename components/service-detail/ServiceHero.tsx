'use client';

import { ReactNode } from 'react';
import {
  heroContainer,
  heroContent,
  heroTitle,
  heroDescription,
  heroIcon,
  backButton,
} from '@/styles/sections/service-detail.css';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceHero({ title, description, icon }: ServiceHeroProps) {
  return (
    <section className={heroContainer}>
      <a href="/#services" className={backButton}>
        <ArrowLeftIcon style={{ width: '20px', height: '20px' }} />
        Volver a Servicios
      </a>
      <div className={heroContent}>
        <div className={heroIcon}>{icon}</div>
        <h1 className={heroTitle}>{title}</h1>
        <p className={heroDescription}>{description}</p>
      </div>
    </section>
  );
}
