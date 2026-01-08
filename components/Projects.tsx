
'use client';

import {
  timelineSection,
  timeline,
  timelineItem,
  timelineContent,
  timelineYear,
  timelineTitle,
  timelineDescription,
  timelineTech,
  timelineButton,
  timelineImage,
} from '@/styles/sections/timeline.css';



import { useState } from 'react';
import CustomAlert from './CustomAlert';
import CVModal from './CVModal';
import Image from 'next/image';

export default function Projects() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [cvModalOpen, setCVModalOpen] = useState(false);

  const handleAlert = (msg: string) => setAlertMessage(msg);
  const handleCloseAlert = () => setAlertMessage(null);
  const handleOpenCVModal = () => setCVModalOpen(true);
  const handleCloseCVModal = () => setCVModalOpen(false);

  return (
    <section className={timelineSection} id="projects">
      <h2 style={{ fontFamily: 'inherit', fontSize: 40, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>Proyectos Destacados</h2>
      <p style={{ fontFamily: 'inherit', fontSize: 18, color: '#555', textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
        Soluciones reales que integran arquitectura backend, desarrollo web, ecommerce y consultoría tecnológica.
      </p>
      <div className={timeline}>
        {alertMessage && (
          <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
        )}
        {/* Proyecto 1: Banca y Fintech */}
        <div className={timelineItem}>
          <div className={timelineContent} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <span className={timelineYear}>2015-2025</span>
            <h3 className={timelineTitle}>Soluciones Backend para Banca y Fintech</h3>
            <p className={timelineDescription}>
              Experiencia sólida en desarrollo backend para banca y fintech, con alta especialización en Java y Spring Framework. Optimización de procesos, seguridad y cumplimiento normativo.
            </p>
            <span className={timelineTech}>Java, Spring Boot, Seguridad, Integraciones</span>
            <button
              type="button"
              className={timelineButton}
              onClick={handleOpenCVModal}
            >
              Ver experiencia completa
            </button>
            {cvModalOpen && <CVModal isOpen={cvModalOpen} onClose={handleCloseCVModal} />}
          </div>
        </div>
        {/* Proyecto 2: Tienda Shopify */}
        <div className={timelineItem}>

          <Image
            src="/projects/shopify-mockup.png"
            alt="Mockup Tienda Shopify"
            width={320}
            height={220}
            className={timelineImage}
          />
          <div className={timelineContent}>
            <span className={timelineYear}>2025 (en curso)</span>
            <h3 className={timelineTitle}>Tienda Online Shopify Integrada</h3>
            <p className={timelineDescription}>
              Implementación desde cero de tienda online con catálogo, control de inventario, integración de pagos (PayU, contraentrega, transferencia bancaria). Actualmente en producción.
            </p>
            <span className={timelineTech}>Shopify, Liquid, PayU, React</span>
            <a href="https://distri-divas.myshopify.com/" target="_blank" rel="noopener noreferrer" className={timelineButton}>
              Ver tienda
            </a>
          </div>
        </div>
        {/* Proyecto 3: Backend Autenticación GCP */}
        <div className={timelineItem}>

          <Image
            src="/projects/backend-gcp.png"
            alt="Mockup Backend GCP"
            width={320}
            height={220}
            className={timelineImage}
          />
          <div className={timelineContent}>
            <span className={timelineYear}>2025 (2º semestre)</span>
            <h3 className={timelineTitle}>Backend de Autenticación en GCP</h3>
            <p className={timelineDescription}>
              API RESTful de autenticación con Java 21 y Spring Boot 3: login, logout y refresh token, administracion de usuarios, validaciones robustas y despliegue en Google Cloud Platform. Documentada con OpenAPI y siguiendo buenas prácticas modernas de backend.
            </p>
            <span className={timelineTech}>Java 21, Spring Boot 3, H2, OpenAPI, GCP</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <button
                type="button"
                className={timelineButton}
                onClick={() => handleAlert('Demo próximamente disponible')}
              >
                Ver Demo
              </button>
              <a
                href="https://github.com/JaimeCombita/test-users/blob/main/README.md"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: 'center', display: 'inline-block', lineHeight: 'normal' }}
              >
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto 4: Landing Corporativa */}
        <div className={timelineItem}>

          <Image
            src="/projects/landing-demo.jpg"
            alt="Mockup Landing Corporativa"
            width={320}
            height={220}
            className={timelineImage}
          />
          <div className={timelineContent}>
            <span className={timelineYear}>2026</span>
            <h3 className={timelineTitle}>Landing Corporativa Moderna</h3>
            <p className={timelineDescription}>
              Esta misma página es un ejemplo de solución moderna para mostrar servicios, proyectos y propuesta de valor. Optimizada para SEO y conversiones.
            </p>
            <span className={timelineTech}>Next.js, React, Vercel, UI/UX</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <a
                href="#"
                className={timelineButton}
                style={{ background: '#00D1FF', color: '#fff', textAlign: 'center', display: 'inline-block', lineHeight: 'normal' }}
              >
                Estás aquí
              </a>
              <a
                href="https://github.com/JaimeCombita/landing-services/blob/main/README.md"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: 'center', display: 'inline-block', lineHeight: 'normal' }}
              >
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        {/* Detalle final: En curso y en construcción */}
        <div className={timelineItem}>
          <div className={timelineContent} style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', opacity: 1, background: 'rgba(255,255,255,0.98)' }}>
            <span className={timelineYear} style={{ color: '#1E90FF' }}>Próximamente</span>
            <h3 className={timelineTitle} style={{ color: '#1E90FF' }}>¡Más proyectos en camino!</h3>
            <p className={timelineDescription}>
              Seguimos construyendo nuevas soluciones y experiencias digitales.<br />
              <span style={{ fontSize: 32, display: 'block', margin: '16px 0' }}>🚧</span>
              Mantente atento a las próximas actualizaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}