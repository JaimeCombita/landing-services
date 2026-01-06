import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const title = style({
  fontFamily: vars.font.heading,
  fontSize: '32px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A', // negro intenso
});

export const subtitle = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#333333', // gris oscuro para mejor contraste
  lineHeight: 1.6,
});

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
});

export const modalContent = style({
  backgroundColor: '#FFFFFF', // ← fondo blanco limpio
  borderRadius: '12px',
  padding: '40px',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  position: 'relative',
});

export const closeButton = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '24px',
  background: 'none',
  border: 'none',
  color: '#999',
  cursor: 'pointer',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#1A1A1A',
});

export const input = style({
  padding: '12px 16px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #DCE3EA',
  backgroundColor: '#FFFFFF', // ← fondo blanco explícito
  color: '#1A1A1A',
  fontFamily: vars.font.body,
});

export const textarea = style([input, {
  resize: 'vertical',
}]);

export const submitButton = style({
  alignSelf: 'center',
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '14px 32px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  selectors: {
    '&:hover:enabled': {
      backgroundColor: '#00D1FF',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});
