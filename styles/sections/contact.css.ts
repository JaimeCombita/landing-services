import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const contactSection = style({
  backgroundColor: '#FFFFFF',
  padding: '120px 24px',
  maxWidth: '720px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
});

export const sectionTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '40px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  textAlign: 'center',
});

export const sectionSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#555',
  textAlign: 'center',
  lineHeight: 1.6,
});

export const form = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#1A1A1A',
});

export const input = style({
  padding: '12px 16px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #DCE3EA',
  fontFamily: vars.font.body,
});

export const textarea = style([input, {
  resize: 'vertical',
}]);

export const submitButton = style({
  alignSelf: 'center',
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#FFFFFF',
  backgroundColor: '#1E90FF',
  padding: '14px 32px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#00D1FF',
    },
  },
});