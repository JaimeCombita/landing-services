
'use client';

import {
  timelineSection,
  sectionTitle,
  sectionSubtitle,
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
      <h2 className={sectionTitle}>Proyectos Destacados</h2>
      <p className={sectionSubtitle}>
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
                style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '6px', lineHeight: 'normal' }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
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
                style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '6px', lineHeight: 'normal' }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto 5: Generador de Carnets*/}
        <div className={timelineItem}>

          <Image
            src="/projects/id-card-generator.png"
            alt="Generador de Carnets"
            width={320}
            height={220}
            className={timelineImage}
          />
          <div className={timelineContent}>
            <span className={timelineYear}>2026</span>
            <h3 className={timelineTitle}>Generador de Carnets Personalizables</h3>
            <p className={timelineDescription}>
              Aplicación web para generar carnets estudiantiles y empresariales personalizables. Permite crear, diseñar y exportar carnets de identificación con diferentes plantillas y campos personalizados.
            </p>
            <span className={timelineTech}>React, Next.js, Canvas API, PDF Export</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <a
                href="https://app-carnets.jcengine.co/"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver aplicación
              </a>
              <a
                href="https://github.com/JaimeCombita/generator_id_card"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '6px', lineHeight: 'normal' }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto 6: Furniture Fenix */}
        <div className={timelineItem}>

          <Image
            src="/projects/furniture-fenix.png"
            alt="Furniture Fenix Website"
            width={320}
            height={220}
            className={timelineImage}
          />
          <div className={timelineContent}>
            <span className={timelineYear}>2026</span>
            <h3 className={timelineTitle}>Sitio Web Furniture Fenix</h3>
            <p className={timelineDescription}>
              Sitio web corporativo para empresa especializada en mobiliario nacional e importado con estándares institucionales y comerciales. Catálogo de sillas, lockers, archivadores, carpas, línea exterior, salas de juntas y trabajos sobre medidas.
            </p>
            <span className={timelineTech}>Next.js, React, Vercel, UI/UX</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <a
                href="https://furniture-fenix-website.vercel.app/"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver sitio web
              </a>
              <a
                href="https://github.com/JaimeCombita/furniture-fenix-website"
                className={timelineButton}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '6px', lineHeight: 'normal' }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
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