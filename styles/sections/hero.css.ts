import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const heroWrapper = style({
  width: '100%',
  margin: '0 auto',
  background: 'linear-gradient(135deg, #0A1A2F 0%, #0F243A 100%)',
  paddingTop: '140px',
  paddingBottom: '140px',
  paddingLeft: '120px',
  paddingRight: '120px',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      paddingTop: '100px',
      paddingBottom: '60px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const heroContent = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
    },
  },
});

export const leftColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const heading = style({
  fontFamily: vars.font.heading,
  fontSize: '52px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
  lineHeight: '110%',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '32px',
    },
  },
});

export const subheading = style({
  fontFamily: vars.font.body,
  fontSize: '20px',
  color: '#DCE3EA',
  maxWidth: '520px',
  lineHeight: 1.6,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

export const buttonGroup = style({
  display: 'flex',
  gap: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
});

export const primaryButton = style({
  width: '200px',
  height: '56px',
  backgroundColor: '#1E90FF',
  color: '#FFFFFF',
  borderRadius: '10px',
  fontWeight: vars.font.weight.medium,
  fontFamily: vars.font.body,
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
  selectors: {
    '&:hover': {
      backgroundColor: '#00D1FF',
    },
  },
});

export const secondaryButton = style({
  width: '200px',
  height: '56px',
  backgroundColor: 'transparent',
  color: '#1E90FF',
  border: '2px solid #1E90FF',
  borderRadius: '10px',
  fontWeight: vars.font.weight.medium,
  fontFamily: vars.font.body,
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background 0.3s',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
  selectors: {
    '&:hover': {
      backgroundColor: '#1E90FF22',
    },
  },
});

export const trustBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.8)',
});