import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(30px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const float = keyframes({
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-8px)',
  },
});

export const techSection = style({
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

export const techGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '24px',
  width: '100%',
  maxWidth: '1200px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
    },
  },
});

export const techItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  padding: '24px 16px',
  minHeight: '140px',
  borderRadius: '16px',
  backgroundColor: '#F9FAFB',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  animation: `${fadeInUp} 0.6s ease-out backwards`,
  selectors: {
    '&:hover': {
      backgroundColor: '#FFFFFF',
      transform: 'translateY(-12px) scale(1.05)',
      boxShadow: '0 20px 40px rgba(30, 144, 255, 0.15)',
    },
  },
});

export const techIcon = style({
  width: '48px',
  height: '48px',
  objectFit: 'contain',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  filter: 'grayscale(0.3)',
  selectors: {
    [`${techItem}:hover &`]: {
      transform: 'scale(1.2) rotate(5deg)',
      filter: 'grayscale(0) drop-shadow(0 4px 12px rgba(30, 144, 255, 0.3))',
    },
  },
});

export const techLabel = style({
  fontFamily: vars.font.body,
  fontSize: '13px',
  color: '#666',
  textAlign: 'center',
  fontWeight: vars.font.weight.medium,
  transition: 'all 0.3s ease',
  lineHeight: 1.3,
  minHeight: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    [`${techItem}:hover &`]: {
      color: '#1E90FF',
      fontWeight: vars.font.weight.bold,
    },
  },
});