'use client';

import { useEffect, useState } from 'react';
import {
  modalOverlay,
  modalContent,
  closeButton,
  form,
  formGroup,
  label,
  input,
  textarea,
  submitButton,
  title,
  subtitle,
} from '../styles/sections/contactModal.css';
    
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={modalOverlay} onClick={onClose}>
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={closeButton} onClick={onClose}>×</button>
        <h2 className={title}>Hablemos</h2>
        <p className={subtitle}>
          ¿Tienes un proyecto en mente? Completa el formulario y me pondré en contacto contigo.
        </p>
        <form className={form} onSubmit={(e) => e.preventDefault()}>
          <div className={formGroup}>
            <label htmlFor="name" className={label}>Nombre</label>
            <input
              type="text"
              id="name"
              className={input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className={formGroup}>
            <label htmlFor="email" className={label}>Correo electrónico</label>
            <input
              type="email"
              id="email"
              className={input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className={formGroup}>
            <label htmlFor="phone" className={label}>Celular</label>
            <input
              type="tel"
              id="phone"
              className={input}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className={formGroup}>
            <label htmlFor="country" className={label}>País</label>
            <input
              type="text"
              id="country"
              className={input}
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              required
            />
          </div>
          <div className={formGroup}>
            <label htmlFor="message" className={label}>Mensaje</label>
            <textarea
              id="message"
              rows={5}
              className={textarea}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className={submitButton} disabled={!isFormValid}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}