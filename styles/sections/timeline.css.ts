import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(40px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const timelineSection = style({
  background: '#F4F6F8',
  padding: '120px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const timeline = style({
  position: 'relative',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  '::before': {
    content: '',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '8px',
    background: 'linear-gradient(180deg, #00D1FF 0%, #1E90FF 100%)',
    borderRadius: '8px',
    transform: 'translateX(-50%)',
    zIndex: 0,
    opacity: 0.7,
    boxShadow: '0 0 16px #00D1FF55',
    pointerEvents: 'none',
  },
});

// Ocultar la línea al final del timeline usando globalStyle
globalStyle(`${timeline} > div:last-child`, {
  position: 'relative',
  zIndex: 2,
});
globalStyle(`${timeline}::after`, {
  content: "''",
  position: 'absolute',
  left: '50%',
  bottom: '0',
  width: '40px',
  height: '30px',
  background: `url("data:image/svg+xml;utf8,<svg width='40' height='30' xmlns='http://www.w3.org/2000/svg'><rect width='10' height='10' x='0' y='0' fill='black'/><rect width='10' height='10' x='10' y='0' fill='white'/><rect width='10' height='10' x='20' y='0' fill='black'/><rect width='10' height='10' x='30' y='0' fill='white'/><rect width='10' height='10' x='0' y='10' fill='white'/><rect width='10' height='10' x='10' y='10' fill='black'/><rect width='10' height='10' x='20' y='10' fill='white'/><rect width='10' height='10' x='30' y='10' fill='black'/><rect width='10' height='10' x='0' y='20' fill='black'/><rect width='10' height='10' x='10' y='20' fill='white'/><rect width='10' height='10' x='20' y='20' fill='black'/><rect width='10' height='10' x='30' y='20' fill='white'/></svg>")`,
  border: '2px solid #111',
  zIndex: 3,
  transform: 'translate(-50%, 10px)',
});

export const timelineItem = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '80px',
  selectors: {
    '&:nth-child(even)': {
      flexDirection: 'row-reverse',
    },
  },
  animationName: fadeInUp,
  animationDuration: '0.8s',
  animationTimingFunction: 'ease',
  animationFillMode: 'both',
});

export const timelineContent = style({
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '40px',
  minWidth: '320px',
  maxWidth: '420px',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
  willChange: 'transform',
  selectors: {
    '&:hover': {
      transform: 'translateY(-8px) scale(1.03)',
      boxShadow: '0 8px 32px rgba(0,209,255,0.15)',
    },
  },
});

export const timelineYear = style({
  fontFamily: vars.font.heading,
  fontSize: '18px',
  color: '#00D1FF',
  fontWeight: vars.font.weight.bold,
  marginBottom: '8px',
});

export const timelineTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
});

export const timelineDescription = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#444',
  lineHeight: 1.6,
});

export const timelineTech = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#00D1FF',
  marginTop: '8px',
});

export const timelineButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#fff',
  background: '#1E90FF',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 24px',
  marginTop: '12px',
  cursor: 'pointer',
  transition: 'background 0.2s',
  selectors: {
    '&:hover': {
      background: '#00BFFF',
    },
  },
});



export const timelineImage = style({
  width: '320px',
  height: '220px',
  objectFit: 'contain',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
  margin: '0 32px',
  background: '#F9FAFB',
  alignSelf: 'center',
  transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.4s',
  willChange: 'transform',
  selectors: {
    '&:hover': {
      transform: 'scale(1.07) rotate(-2deg)',
      boxShadow: '0 8px 32px rgba(30,144,255,0.18)',
    },
    'body &:active': {
      transform: 'scale(0.98)',
    },
  },
  '@media': {
    'screen and (max-width: 900px)': {
      display: 'none',
    },
  },
});
