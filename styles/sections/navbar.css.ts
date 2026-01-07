import { style, globalStyle } from '@vanilla-extract/css';
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
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 24px',
      height: '70px',
    },
  },
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
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});

export const navItem = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  width: '100%',
  selectors: {
    '&:hover': {
      color: '#00D1FF',
    },
  },
});

export const mobileMenuButton = style({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30px',
  height: '24px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 101,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'flex',
    },
  },
});

globalStyle(`${mobileMenuButton} span`, {
  width: '100%',
  height: '3px',
  backgroundColor: '#FFFFFF',
  borderRadius: '2px',
  transition: 'all 0.3s ease',
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 98,
  '@media': {
    'screen and (min-width: 769px)': {
      display: 'none',
    },
  },
});

export const mobileMenu = style({
  position: 'fixed',
  top: '70px',
  right: '-100%',
  width: '280px',
  height: 'calc(100vh - 70px)',
  backgroundColor: '#0A1A2F',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px 24px',
  transition: 'right 0.3s ease',
  zIndex: 99,
  boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.3)',
  '@media': {
    'screen and (min-width: 769px)': {
      display: 'none',
    },
  },
});

export const mobileMenuOpen = style({
  right: '0',
});