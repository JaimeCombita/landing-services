'use client';

import { useEffect } from 'react';
import {
  modalOverlay,
  modalContent,
  closeButton,
  title,
  subtitle,
  buttonGroup,
  cvButton,
} from '../styles/sections/cvModal.css';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenCV = (language: 'es' | 'en') => {
    const cvPath = language === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf';
    window.open(cvPath, '_blank');
    onClose();
  };

  return (
    <div className={modalOverlay} onClick={onClose}>
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={closeButton} onClick={onClose}>×</button>
        <h2 className={title}>Ver CV</h2>
        <p className={subtitle}>
          Selecciona el idioma en el que deseas ver mi experiencia profesional
        </p>
        <div className={buttonGroup}>
          <button className={cvButton} onClick={() => handleOpenCV('es')}>
            Español
          </button>
          <button className={cvButton} onClick={() => handleOpenCV('en')}>
            English
          </button>
        </div>
      </div>
    </div>
  );
}
