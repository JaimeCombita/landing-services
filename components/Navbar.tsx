'use client';

import { navbar, logo, navLinks } from '../styles/sections/navbar.css';

export default function Navbar() {
  return (
    <nav className={navbar}>
      <div className={logo}>Jaime Combita</div>
      <div className={navLinks}>
        <a href="#services">Servicios</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}