'use client';

import {
  footerSection,
  footerTop,
  column,
  logoText,
  subText,
  columnTitle,
  navLink,
  contactItem,
  divider,
  footerBottom,
  copyright,
} from '@/styles/sections/footer.css';

export default function Footer() {
  return (
    <footer className={footerSection}>
      <div className={footerTop}>
        <div className={column}>
          <h3 className={logoText}>Jaime Combita</h3>
          <p className={subText}>Arquitectura & Desarrollo Backend</p>
        </div>

        <div className={column}>
          <h4 className={columnTitle}>Navegación</h4>
          <a href="#services" className={navLink}>Servicios</a>
          <a href="#projects" className={navLink}>Proyectos</a>
          <a href="#about" className={navLink}>Sobre mí</a>
          <a href="#contact" className={navLink}>Contacto</a>
        </div>

        <div className={column}>
          <h4 className={columnTitle}>Contacto</h4>
          <p className={contactItem}>📧 leonardo.102408@gmail.com</p>
          <p className={contactItem}>📱 +57 314 260 9413</p>
          <p className={contactItem}>🔗 <a href="https://linkedin.com/in/jaimecombita" target="_blank">LinkedIn</a> / <a href="https://github.com/jaimecombita" target="_blank">GitHub</a></p>
        </div>
      </div>

      <div className={divider} />

      <div className={footerBottom}>
        <p className={copyright}>
          © 2026 Jaime Combita – Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}