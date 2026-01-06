import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const navbar = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '80px',
  padding: '0 120px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  background: '#0A1A2F',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const logoText = style({
  fontFamily: vars.font.heading,
  fontSize: '20px',
  fontWeight: vars.font.weight.bold,
  color: vars.color.white,
});

export const navLinks = style({
  display: 'flex',
  gap: '32px',
});

export const navItem = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  selectors: {
    '&:hover': {
      color: '#00D1FF',
    },
  },
});