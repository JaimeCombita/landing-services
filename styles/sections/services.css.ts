import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const servicesSection = style({
  backgroundColor: '#FFFFFF',
  padding: '120px',
  //maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
});

export const sectionTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '40px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  textAlign: 'center',
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
});

export const card = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const icon = style({
  width: '48px',
  height: '48px',
  stroke: '#00D1FF',
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