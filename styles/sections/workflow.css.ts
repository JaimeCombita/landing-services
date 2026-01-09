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
  padding: '120px 40px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  width: '100%',
  overflow: 'visible',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '60px 20px',
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
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '32px',
  maxWidth: '1300px',
  width: '100%',
  marginTop: '40px',
  position: 'relative',
  paddingBottom: '20px',
  paddingTop: '24px',
  '@media': {
    'screen and (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
});

export const stepItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  animation: `${fadeInLeft} 0.8s ease-out backwards`,
  '@media': {
    'screen and (max-width: 768px)': {
      maxWidth: '100%',
    },
  },
});

export const stepCircle = style({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: '#1E90FF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 50,
  boxShadow: '0 4px 20px rgba(30, 144, 255, 0.3)',
  transition: 'all 0.4s ease',
  animation: `${scaleIn} 0.6s ease-out backwards`,
  marginBottom: '18px',
  '@media': {
    'screen and (max-width: 900px)': {
      width: '54px',
      height: '54px',
      marginBottom: '12px',
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
  top: '35px',
  right: '-48px',
  width: '40px',
  height: '3px',
  backgroundColor: '#1E90FF',
  zIndex: 1,
  display: 'none',
  '@media': {
    'screen and (min-width: 1200px)': {
      display: 'block',
    },
  },
  selectors: {
    '&::after': {
      content: "''",
      position: 'absolute',
      right: '-8px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '0',
      height: '0',
      borderLeft: '10px solid #1E90FF',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
    },
  },
});

export const stepContent = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '32px 24px 36px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  transition: 'all 0.3s ease',
  height: '220px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: '0',
  '@media': {
    'screen and (max-width: 768px)': {
      height: 'auto',
      minHeight: '180px',
      padding: '28px 20px 32px',
    },
  },
  selectors: {
    [`${stepItem}:hover &`]: {
      transform: 'translateY(-6px)',
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