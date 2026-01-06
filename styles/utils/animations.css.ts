import { keyframes, style } from '@vanilla-extract/css';

export const fadeUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const fadeUpAnimation = style({
  animation: `${fadeUp} 0.8s ease-out`,
});