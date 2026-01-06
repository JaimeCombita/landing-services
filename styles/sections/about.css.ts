import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const aboutSection = style({
  backgroundColor: '#FFFFFF',
  display: 'grid',
  gridTemplateColumns: '40% 60%',
  gap: '80px',
  padding: '120px',
  //maxWidth: '1440px',
  margin: '0 auto',
  alignItems: 'center',
});

export const leftColumn = style({
  display: 'flex',
  justifyContent: 'center',
});

export const profileImage = style({
  borderRadius: '50%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
});

export const rightColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const title = style({
  fontFamily: vars.font.heading,
  fontSize: '40px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
});

export const subtitle = style({
  fontFamily: vars.font.body,
  fontSize: '20px',
  color: '#555',
});

export const paragraph = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#444',
  maxWidth: '600px',
  lineHeight: 1.6,
});

export const highlightsList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const highlightItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#1A1A1A',
});

export const ctaLink = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#1E90FF',
  textDecoration: 'none',
  marginTop: '16px',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});