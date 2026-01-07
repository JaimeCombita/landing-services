import { style, keyframes } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%': {
    boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)',
  },
  '70%': {
    boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)',
  },
  '100%': {
    boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
  },
});

const float = keyframes({
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
});

export const whatsappButton = style({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  width: '60px',
  height: '60px',
  backgroundColor: '#25D366',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  animation: `${pulse} 2s infinite, ${float} 3s ease-in-out infinite`,
  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
  selectors: {
    '&:hover': {
      backgroundColor: '#128C7E',
      transform: 'scale(1.1) translateY(-5px)',
      boxShadow: '0 8px 20px rgba(37, 211, 102, 0.6)',
    },
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '55px',
      height: '55px',
      bottom: '20px',
      right: '20px',
    },
  },
});

export const whatsappIcon = style({
  width: '35px',
  height: '35px',
  color: '#FFFFFF',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '32px',
      height: '32px',
    },
  },
});
