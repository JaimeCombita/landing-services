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
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0',
  maxWidth: '1000px',
  width: '100%',
  marginTop: '40px',
  position: 'relative',
  overflowX: 'auto',
  paddingBottom: '48px',
  paddingTop: '24px',
  '::-webkit-scrollbar': {
    height: '8px',
    background: '#F4F6F8',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#1E90FF',
    borderRadius: '4px',
  },
  selectors: {
    '&::before, &::after': {
      content: "''",
      display: 'block',
      flex: '0 0 60px',
      height: '1px',
      background: 'transparent',
    },
    '&::before': {
      marginRight: '0',
    },
    '&::after': {
      marginLeft: '0',
    },
  },
  '@media': {
    'screen and (max-width: 900px)': {
      maxWidth: '100vw',
      selectors: {
        '&::before, &::after': {
          flex: '0 0 24px',
        },
      },
    },
  },
});

export const stepItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '220px',
  maxWidth: '260px',
  flex: '1 1 220px',
  position: 'relative',
  margin: '0 24px',
  animation: `${fadeInLeft} 0.8s ease-out backwards`,
  overflow: 'visible',
  selectors: {
    '&:first-child': {
      marginLeft: '100px',
    },
    '&:last-child': {
      marginRight: '100px',
    },
  },
  '@media': {
    'screen and (max-width: 900px)': {
      minWidth: '180px',
      maxWidth: '220px',
      margin: '0 12px',
      selectors: {
        '&:first-child': {
          marginLeft: '6px',
        },
        '&:last-child': {
          marginRight: '6px',
        },
      },
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
  left: '100%',
  width: '60px',
  height: '4px',
  backgroundColor: '#1E90FF',
  zIndex: 1,
  animation: `${lineGrow} 0.8s ease-out`,
  '@media': {
    'screen and (max-width: 900px)': {
      width: '36px',
    },
  },
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: 0,
      top: '-2px',
      width: '100%',
      height: '8px',
      backgroundColor: '#00D1FF',
      opacity: 0.3,
      filter: 'blur(4px)',
    },
  },
});

export const stepContent = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '28px',
  padding: '24px 18px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  transition: 'all 0.3s ease',
  minHeight: '120px',
  width: '100%',
  marginTop: '0',
  selectors: {
    [`${stepItem}:hover &`]: {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 32px rgba(30, 144, 255, 0.15)',
    },
    [`${stepItem}:first-child &`]: {
      borderTopLeftRadius: '32px',
      borderTopRightRadius: '32px',
    },
    [`${stepItem}:last-child &`]: {
      borderBottomLeftRadius: '32px',
      borderBottomRightRadius: '32px',
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