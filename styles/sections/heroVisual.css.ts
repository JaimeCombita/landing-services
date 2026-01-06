import { style } from '@vanilla-extract/css';

export const visualWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const imageStyle = style({
  borderRadius: '1rem',
  border: '2px solid rgba(255,255,255,0.1)',
  boxShadow: '0 0 40px rgba(0,209,255,0.2)',
});