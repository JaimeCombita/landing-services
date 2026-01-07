'use client';

import {
  footerSection,
  footerTop,
  column,
  logoContainer,
  logoImage,
  logoText,
  subText,
  columnTitle,
  contactItem,
  socialLinks,
  socialLink,
  copyright,
} from '@/styles/sections/footer.css';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerSection}>
      <div className={footerTop}>
        <div className={column}>
          <div className={logoContainer}>
            <Image
              src="/logo.png"
              alt="Logo Jaime Combita"
              width={50}
              height={50}
              className={logoImage}
            />
            <h3 className={logoText}>Jaime Combita</h3>
          </div>
          <p className={subText}>Arquitectura & Desarrollo</p>
          <p className={subText}>Ingeniero de Software | 10+ años de experiencia</p>
        </div>

        <div className={column}>
          <h4 className={columnTitle}>Contacto</h4>
          <p className={contactItem}>📧 leonardo.102408@gmail.com</p>
          <p className={contactItem}>📱 +57 314 260 9413</p>
          <p className={contactItem}>📍 Bogotá, Colombia</p>
        </div>

        <div className={column}>
          <h4 className={columnTitle}>Redes Sociales</h4>
          <div className={socialLinks}>
            <a href="https://linkedin.com/in/jaimecombita" target="_blank" rel="noopener noreferrer" className={socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com/jaimecombita" target="_blank" rel="noopener noreferrer" className={socialLink}>
              GitHub
            </a>
            <a href="https://twitter.com/jaimecombita" target="_blank" rel="noopener noreferrer" className={socialLink}>
              Twitter/X
            </a>
            <a href="https://www.instagram.com/jaimecombita" target="_blank" rel="noopener noreferrer" className={socialLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <p className={copyright}>
        © {currentYear} Jaime Combita – Todos los derechos reservados.
      </p>
    </footer>
  );
}