import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const scaleIn = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1.1)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

const lineGrow = keyframes({
  '0%': {
    height: '0%',
  },
  '100%': {
    height: '100%',
  },
});

export const workflowSection = style({
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

export const timelineContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  maxWidth: '800px',
  width: '100%',
  marginTop: '40px',
});

export const stepItem = style({
  display: 'grid',
  gridTemplateColumns: '80px 1fr',
  gap: '32px',
  position: 'relative',
  animation: `${fadeInLeft} 0.8s ease-out backwards`,
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '60px 1fr',
      gap: '20px',
    },
  },
});

export const stepCircle = style({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#1E90FF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
  boxShadow: '0 4px 20px rgba(30, 144, 255, 0.3)',
  transition: 'all 0.4s ease',
  animation: `${scaleIn} 0.6s ease-out backwards`,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '60px',
      height: '60px',
    },
  },
  selectors: {
    [`${stepItem}:hover &`]: {
      transform: 'scale(1.15) rotate(10deg)',
      backgroundColor: '#00BFFF',
      boxShadow: '0 8px 30px rgba(0, 191, 255, 0.5)',
    },
  },
});

export const stepNumber = style({
  fontFamily: vars.font.heading,
  fontSize: '32px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
});

export const stepLine = style({
  position: 'absolute',
  left: '40px',
  top: '80px',
  width: '4px',
  height: 'calc(100% + 0px)',
  backgroundColor: '#1E90FF',
  zIndex: 1,
  animation: `${lineGrow} 0.8s ease-out`,
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: '-2px',
      width: '8px',
      height: '100%',
      backgroundColor: '#00D1FF',
      opacity: 0.3,
      filter: 'blur(4px)',
    },
  },
});

export const stepContent = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  transition: 'all 0.3s ease',
  marginBottom: '40px',
  selectors: {
    [`${stepItem}:hover &`]: {
      transform: 'translateX(8px)',
      boxShadow: '0 12px 32px rgba(30, 144, 255, 0.15)',
    },
  },
});

export const stepTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '12px',
  transition: 'color 0.3s ease',
  selectors: {
    [`${stepItem}:hover &`]: {
      color: '#1E90FF',
    },
  },
});

export const stepText = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#555',
  lineHeight: 1.7,
});