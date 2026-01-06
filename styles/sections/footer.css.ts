import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const footerSection = style({
  backgroundColor: '#0A1A2F',
  padding: '80px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
});

export const footerTop = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '40px',
  maxWidth: '1440px',
  margin: '0 auto',
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const logoText = style({
  fontFamily: vars.font.heading,
  fontSize: '20px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
});

export const subText = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#DCE3EA',
});

export const columnTitle = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#DCE3EA',
  fontWeight: vars.font.weight.bold,
  marginBottom: '8px',
});

export const navLink = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#FFFFFF',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const contactItem = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#FFFFFF',
  lineHeight: 1.6,
});

export const divider = style({
  height: '1px',
  backgroundColor: '#1E2A3A',
  width: '100%',
});

export const footerBottom = style({
  textAlign: 'center',
});

export const copyright = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#A3A9B3',
});