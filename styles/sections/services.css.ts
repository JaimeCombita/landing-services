import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const servicesSection = style({
  backgroundColor: '#FFFFFF',
  padding: '120px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '60px 24px',
    },
  },
});

export const sectionTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '40px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const sectionSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#555',
  textAlign: 'center',
  maxWidth: '720px',
  lineHeight: 1.6,
});

export const cardsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '40px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
  },
});

export const card = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
    },
  },
});

export const icon = style({
  width: '48px',
  height: '48px',
  stroke: '#00D1FF',
  transition: 'all 0.3s ease',
  selectors: {
    [`${card}:hover &`]: {
      transform: 'scale(1.1) rotate(5deg)',
      stroke: '#1E90FF',
    },
  },
});

export const cardTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
});

export const cardText = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#444',
  lineHeight: 1.6,
});

export const cardLink = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#1E90FF',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});