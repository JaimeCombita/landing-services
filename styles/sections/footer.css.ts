import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const footerSection = style({
  backgroundColor: '#0A1A2F',
  padding: '80px 120px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '60px 24px 40px',
    },
  },
});

export const footerTop = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '60px',
  maxWidth: '1440px',
  margin: '0 auto',
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
    },
  },
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const logoImage = style({
  borderRadius: '8px',
});

export const logoText = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
  marginBottom: '8px',
});

export const subText = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#DCE3EA',
  lineHeight: 1.6,
});

export const columnTitle = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#00D1FF',
  fontWeight: vars.font.weight.bold,
  marginBottom: '8px',
});

export const contactItem = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#FFFFFF',
  lineHeight: 1.8,
});

export const socialLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const socialLink = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#FFFFFF',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  selectors: {
    '&:hover': {
      color: '#00D1FF',
      transform: 'translateX(4px)',
    },
  },
});

export const copyright = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#A3A9B3',
  textAlign: 'center',
  paddingTop: '32px',
  borderTop: '1px solid #1E2A3A',
  marginTop: '16px',
});