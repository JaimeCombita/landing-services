import { style, keyframes } from '@vanilla-extract/css';

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-20px)' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 0.4 },
  '50%': { opacity: 1 },
});

export const visualWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const imageStyle = style({
  borderRadius: '1rem',
  border: '2px solid rgba(255,255,255,0.1)',
  boxShadow: '0 0 40px rgba(0,209,255,0.2)',
  animation: `${float} 6s ease-in-out infinite`,
  transition: 'all 0.4s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.05) translateY(-10px)',
      boxShadow: '0 0 60px rgba(0,209,255,0.4), 0 20px 40px rgba(0,0,0,0.3)',
      border: '2px solid rgba(0,209,255,0.4)',
    },
  },
});

export const particle = style({
  position: 'absolute',
  borderRadius: '50%',
  pointerEvents: 'none',
  animation: `${pulse} 3s ease-in-out infinite`,
});

export const particle1 = style({
  width: '100px',
  height: '100px',
  background: 'radial-gradient(circle, rgba(0,209,255,0.3) 0%, transparent 70%)',
  top: '10%',
  left: '10%',
  animationDelay: '0s',
});

export const particle2 = style({
  width: '150px',
  height: '150px',
  background: 'radial-gradient(circle, rgba(138,43,226,0.2) 0%, transparent 70%)',
  bottom: '15%',
  right: '10%',
  animationDelay: '1s',
});

export const particle3 = style({
  width: '80px',
  height: '80px',
  background: 'radial-gradient(circle, rgba(0,209,255,0.25) 0%, transparent 70%)',
  top: '50%',
  right: '5%',
  animationDelay: '2s',
});