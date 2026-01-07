'use client';

import { useState } from 'react';
import {
  navbar,
  logoContainer,
  logoText,
  navLinks,
  navItem,
  mobileMenuButton,
  mobileMenu,
  mobileMenuOpen,
  overlay,
} from '@/styles/sections/navbar.css';
import { logo } from '@/styles/components/logo.css';

import Image from 'next/image';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    onContactClick();
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
        
        {/* Desktop Menu */}
        <div className={navLinks}>
          <a href="#hero" className={navItem}>Landing</a>
          <a href="#about" className={navItem}>Sobre mí</a>
          <a href="#services" className={navItem}>Servicios</a>
          <a href="#projects" className={navItem}>Proyectos</a>
          <a href="#tech" className={navItem}>Tecnologías</a>
          <a href="#workflow" className={navItem}>Proceso</a>
          <button onClick={onContactClick} className={navItem}>Contacto</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={overlay} onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`${mobileMenu} ${isMenuOpen ? mobileMenuOpen : ''}`}>
        <a href="#hero" className={navItem} onClick={handleLinkClick}>Landing</a>
        <a href="#about" className={navItem} onClick={handleLinkClick}>Sobre mí</a>
        <a href="#services" className={navItem} onClick={handleLinkClick}>Servicios</a>
        <a href="#projects" className={navItem} onClick={handleLinkClick}>Proyectos</a>
        <a href="#tech" className={navItem} onClick={handleLinkClick}>Tecnologías</a>
        <a href="#workflow" className={navItem} onClick={handleLinkClick}>Proceso</a>
        <button onClick={handleContactClick} className={navItem}>Contacto</button>
      </div>
    </>
  );
}