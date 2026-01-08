import React from 'react';
import { createPortal } from 'react-dom';

interface CustomAlertProps {
  message: React.ReactNode;
  onClose: () => void;
}

export default function CustomAlert({ message, onClose }: CustomAlertProps) {
  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(10,26,47,0.45)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 8px 32px rgba(0,209,255,0.15)',
        padding: '32px 24px',
        minWidth: 320,
        maxWidth: 400,
        textAlign: 'center',
        position: 'relative',
        fontFamily: 'inherit',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 22,
            color: '#1E90FF',
            cursor: 'pointer',
            fontWeight: 700,
          }}
          aria-label="Cerrar alerta"
        >
          ×
        </button>
        <div style={{ fontSize: 18, color: '#1A1A1A', marginBottom: 24 }}>{message}</div>
        <button
          onClick={onClose}
          style={{
            background: '#1E90FF',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 32px',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(30,144,255,0.10)',
            transition: 'background 0.2s',
          }}
        >
          Aceptar
        </button>
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : document.createElement('div')
  );
}
