'use client';

import { useState } from 'react';
import ContactModal from '../ContactModal';
import {
  ctaSection,
  ctaContainer,
  ctaContent,
  ctaTitle,
  ctaDescription,
  ctaButton,
  ctaSecondaryButton,
} from '@/styles/sections/service-detail.css';

interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el servicio de ${serviceName}`;
    const phoneNumber = '59170925149'; // Actualiza con tu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section className={ctaSection}>
        <div className={ctaContainer}>
          <div className={ctaContent}>
            <h2 className={ctaTitle}>¿Listo para comenzar tu proyecto?</h2>
            <p className={ctaDescription}>
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos con {serviceName.toLowerCase()}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => setShowModal(true)} className={ctaButton}>
                Solicitar Cotización
              </button>
              <button onClick={handleWhatsApp} className={ctaSecondaryButton}>
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
      {showModal && <ContactModal onClose={() => setShowModal(false)} serviceContext={serviceName} />}
    </>
  );
}
