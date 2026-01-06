import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const projectsSection = style({
  backgroundColor: '#F4F6F8',
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

export const projectsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '40px',
});

export const projectCard = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const projectImage = style({
  width: '100%',
  height: '260px',
  objectFit: 'cover',
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
});

export const ctaButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: '#00BFFF',
    },
  },
});