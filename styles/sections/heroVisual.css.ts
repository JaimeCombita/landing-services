import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const visualWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  aspectRatio: '1 / 1',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: vars.shadow.strong,
});