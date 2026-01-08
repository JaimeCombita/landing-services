import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loadingOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '24px',
  zIndex: 1000,
  borderRadius: '16px',
});

export const spinner = style({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
});

globalStyle(`${spinner} div`, {
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  width: '64px',
  height: '64px',
  margin: '8px',
  border: '4px solid #00D1FF',
  borderRadius: '50%',
  animation: `${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderColor: '#00D1FF transparent transparent transparent',
});

globalStyle(`${spinner} div:nth-child(1)`, {
  animationDelay: '-0.45s',
});

globalStyle(`${spinner} div:nth-child(2)`, {
  animationDelay: '-0.3s',
});

globalStyle(`${spinner} div:nth-child(3)`, {
  animationDelay: '-0.15s',
});

export const spinnerText = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  fontWeight: vars.font.weight.medium,
  color: '#00D1FF',
  textAlign: 'center',
});
