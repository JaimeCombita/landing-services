import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const ctaFinalSection = style({
  background: 'linear-gradient(135deg, #0A1A2F 0%, #0C223A 100%)',
  padding: '140px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '32px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '80px 24px',
    },
  },
});

export const ctaTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '40px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
  maxWidth: '800px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const ctaSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#DCE3EA',
  maxWidth: '720px',
  lineHeight: 1.6,
});

export const ctaButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '18px 40px',
  borderRadius: '10px',
  textDecoration: 'none',
  boxShadow: '0 4px 12px rgba(0, 209, 255, 0.2)',
  transition: 'background 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#00D1FF',
    },
  },
});

export const trustBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginTop: '24px',
});

export const trustText = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.8)',
});