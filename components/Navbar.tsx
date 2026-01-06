'use client';

import {
  navbar,
  logoContainer,
  logoText,
  navLinks,
  navItem,
} from '@/styles/sections/navbar.css';
import { logo } from '@/styles/components/logo.css';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={navbar}>
      <div className={logoContainer}>
        <Image
          src="/logo.png"
          alt="Logo Jaime Combita"
          width={60}
          height={60}
          className={logo}
        />
        <span className={logoText}>Jaime Combita</span>
      </div>
      <div className={navLinks}>
        <a href="#hero" className={navItem}>Landing</a>
        <a href="#about" className={navItem}>Sobre mí</a>
        <a href="#services" className={navItem}>Servicios</a>
        <a href="#projects" className={navItem}>Proyectos</a>
        <a href="#tech" className={navItem}>Tecnologías</a>
        <a href="#workflow" className={navItem}>Proceso</a>
        <a href="#contact" className={navItem}>Contacto</a>
      </div>
    </nav>
  );
}