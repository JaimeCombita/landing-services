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
  errorText,
  inputError,
  successMessage,
} from '../styles/sections/contactModal.css';
    
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  message?: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es obligatorio';
        if (value.length < 10) return 'El nombre debe tener al menos 10 caracteres';
        if (!/^[a-zA-Z0-9\s]+$/.test(value)) return 'Solo se permiten caracteres alfanuméricos';
        break;
      case 'email':
        if (!value.trim()) return 'El correo es obligatorio';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Formato de correo inválido';
        break;
      case 'phone':
        if (!value.trim()) return 'El teléfono es obligatorio';
        if (!/^\d+$/.test(value)) return 'Solo se permiten números';
        if (value.length < 7) return 'El teléfono debe tener al menos 7 dígitos';
        break;
      case 'country':
        if (!value.trim()) return 'El país es obligatorio';
        break;
      case 'message':
        if (!value.trim()) return 'El mensaje es obligatorio';
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        break;
    }
    return undefined;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (field: string, value: string) => {
    if (field === 'phone' && value && !/^\d*$/.test(value)) {
      return;
    }
    
    setFormData({ ...formData, [field]: value });
    
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      country: true,
      message: true,
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
      
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        setSubmitSuccess(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar:', error);
      alert(error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={modalOverlay}
    >
      <div 
        className={modalContent}
      >
        <button className={closeButton} onClick={onClose} type="button">×</button>
        <h2 className={title}>Hablemos</h2>
        <p className={subtitle}>
          ¿Tienes un proyecto en mente? Completa el formulario y me pondré en contacto contigo.
        </p>
        
        {submitSuccess && (
          <div className={successMessage}>
            ✓ ¡Mensaje enviado con éxito! Te contactaré pronto.
          </div>
        )}
        
        <form className={form} onSubmit={handleSubmit}>
          <div className={formGroup}>
            <label htmlFor="name" className={label}>Nombre completo *</label>
            <input
              type="text"
              id="name"
              className={`${input} ${touched.name && errors.name ? inputError : ''}`}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              disabled={isSubmitting}
            />
            {touched.name && errors.name && (
              <span className={errorText}>{errors.name}</span>
            )}
          </div>
          
          <div className={formGroup}>
            <label htmlFor="email" className={label}>Correo electrónico *</label>
            <input
              type="email"
              id="email"
              className={`${input} ${touched.email && errors.email ? inputError : ''}`}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              disabled={isSubmitting}
            />
            {touched.email && errors.email && (
              <span className={errorText}>{errors.email}</span>
            )}
          </div>
          
          <div className={formGroup}>
            <label htmlFor="phone" className={label}>Celular *</label>
            <input
              type="tel"
              id="phone"
              className={`${input} ${touched.phone && errors.phone ? inputError : ''}`}
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              placeholder="Ej: 3001234567"
              disabled={isSubmitting}
            />
            {touched.phone && errors.phone && (
              <span className={errorText}>{errors.phone}</span>
            )}
          </div>
          
          <div className={formGroup}>
            <label htmlFor="country" className={label}>País *</label>
            <input
              type="text"
              id="country"
              className={`${input} ${touched.country && errors.country ? inputError : ''}`}
              value={formData.country}
              onChange={(e) => handleChange('country', e.target.value)}
              onBlur={() => handleBlur('country')}
              disabled={isSubmitting}
            />
            {touched.country && errors.country && (
              <span className={errorText}>{errors.country}</span>
            )}
          </div>
          
          <div className={formGroup}>
            <label htmlFor="message" className={label}>Mensaje *</label>
            <textarea
              id="message"
              rows={5}
              className={`${textarea} ${touched.message && errors.message ? inputError : ''}`}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              disabled={isSubmitting}
            />
            {touched.message && errors.message && (
              <span className={errorText}>{errors.message}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            className={submitButton} 
            disabled={isSubmitting || submitSuccess}
          >
            {isSubmitting ? 'Enviando...' : submitSuccess ? '¡Enviado!' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
}