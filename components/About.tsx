'use client';

import {
  aboutSection,
  leftColumn,
  rightColumn,
  profileImage,
  title,
  subtitle,
  paragraph,
  highlightsList,
  highlightItem,
  ctaLink,
} from '../styles/sections/about.css';

import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section className={aboutSection} id="about">
      <div className={leftColumn}>
        <Image
          src="/profile.png"
          alt="Foto profesional de Jaime Combita"
          width={220}
          height={220}
          className={profileImage}
        />
      </div>
      <div className={rightColumn}>
        <h2 className={title}>Soy Jaime Leonardo Combita Vargas</h2>
        <p className={subtitle}>
          Ingeniero de software backend con más de 10 años de experiencia en banca, fintech y soluciones empresariales.
        </p>
        <p className={paragraph}>
          He liderado equipos técnicos, diseñado arquitecturas escalables, modernizado plataformas críticas y construido soluciones backend robustas para empresas donde la seguridad y el rendimiento son esenciales.
        </p>
        <ul className={highlightsList}>
          <li className={highlightItem}>
            <CheckIcon width={18} height={18} stroke="#00D1FF" />
            Arquitectura backend con Java, Spring Boot y microservicios
          </li>
          <li className={highlightItem}>
            <CheckIcon width={18} height={18} stroke="#00D1FF" />
            Experiencia real en banca y fintech (Scotia, Pichincha)
          </li>
          <li className={highlightItem}>
            <CheckIcon width={18} height={18} stroke="#00D1FF" />
            Migración Java 8 → Java 21 y modernización de sistemas
          </li>
          <li className={highlightItem}>
            <CheckIcon width={18} height={18} stroke="#00D1FF" />
            CI/CD con GitHub Actions, Docker y GCP
          </li>
          <li className={highlightItem}>
            <CheckIcon width={18} height={18} stroke="#00D1FF" />
            Desarrollo web y ecommerce con integraciones reales
          </li>
        </ul>
        <a href="#projects" className={ctaLink}>
          Ver experiencia completa →
        </a>
      </div>
    </section>
  );
}