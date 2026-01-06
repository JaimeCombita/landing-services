import { style } from '@vanilla-extract/css';

export const logo = style({
  transition: 'transform 0.4s ease, filter 0.4s ease',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1) rotate(3deg)',
      filter: 'drop-shadow(0 0 6px #00D1FF)',
    },
  },
});