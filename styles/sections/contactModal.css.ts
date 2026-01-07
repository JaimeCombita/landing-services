import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  '0%': { 
    opacity: 0,
    transform: 'translateY(-50px) scale(0.9)',
  },
  '100%': { 
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

const slideOut = keyframes({
  '0%': { 
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  '100%': { 
    opacity: 0,
    transform: 'translateY(-50px) scale(0.9)',
  },
});

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
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '40px',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '32px 24px',
      width: '95%',
      maxHeight: '85vh',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '32px',
  background: 'none',
  border: 'none',
  color: '#999',
  cursor: 'pointer',
  zIndex: 10,
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s ease, transform 0.2s ease',
  selectors: {
    '&:hover': {
      color: '#333',
      transform: 'scale(1.1)',
    },
  },
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
  backgroundColor: '#FFFFFF',
  color: '#1A1A1A',
  fontFamily: vars.font.body,
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#1E90FF',
      boxShadow: '0 0 0 3px rgba(30, 144, 255, 0.1)',
    },
    '&:disabled': {
      backgroundColor: '#F5F5F5',
      cursor: 'not-allowed',
    },
  },
});

export const inputError = style({
  borderColor: '#EF4444 !important',
  selectors: {
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1) !important',
    },
  },
});

export const errorText = style({
  fontFamily: vars.font.body,
  fontSize: '13px',
  color: '#EF4444',
  marginTop: '4px',
  display: 'block',
});

export const successMessage = style({
  padding: '16px',
  backgroundColor: '#10B981',
  color: '#FFFFFF',
  borderRadius: '8px',
  fontFamily: vars.font.body,
  fontSize: '15px',
  textAlign: 'center',
  fontWeight: vars.font.weight.medium,
  animation: `${fadeIn} 0.3s ease-out`,
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
