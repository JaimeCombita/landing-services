import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const projectsSection = style({
  backgroundColor: '#F4F6F8',
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

export const projectsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '32px',
  maxWidth: '1200px',
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
  },
});

export const projectCard = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
    },
  },
});

export const projectImage = style({
  width: '100%',
  height: '340px',
  objectFit: 'contain',
  backgroundColor: '#F9FAFB',
  transition: 'transform 0.3s ease',
  selectors: {
    [`${projectCard}:hover &`]: {
      transform: 'scale(1.05)',
    },
  },
});

export const projectTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  padding: '0 32px',
});

export const projectDescription = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#444',
  lineHeight: 1.6,
  padding: '0 32px',
});

export const projectLink = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#1E90FF',
  textDecoration: 'none',
  padding: '0 32px 32px',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const ctaContainer = style({
  marginTop: '40px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  fontFamily: vars.font.body,
  fontSize: '18px',
  fontWeight: vars.font.weight.medium,
  color: '#1A1A1A',
});

export const ctaButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '12px 24px',
  borderRadius: '10px',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: '#00BFFF',
    },
  },
});