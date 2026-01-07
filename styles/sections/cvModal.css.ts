import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(10, 26, 47, 0.85)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)',
});

export const modalContent = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: '48px',
  width: '90%',
  maxWidth: '500px',
  position: 'relative',
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '32px 24px',
      width: '95%',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'transparent',
  border: 'none',
  fontSize: '32px',
  cursor: 'pointer',
  color: '#888',
  lineHeight: 1,
  transition: 'color 0.3s',
  selectors: {
    '&:hover': {
      color: '#1E90FF',
    },
  },
});

export const title = style({
  fontFamily: vars.font.heading,
  fontSize: '32px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '16px',
  textAlign: 'center',
});

export const subtitle = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#666',
  textAlign: 'center',
  marginBottom: '32px',
  lineHeight: 1.6,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const cvButton = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  fontWeight: vars.font.weight.medium,
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '16px 32px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  selectors: {
    '&:hover': {
      backgroundColor: '#00BFFF',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(30, 144, 255, 0.25)',
    },
  },
});
