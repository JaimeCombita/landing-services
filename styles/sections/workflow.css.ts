import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const workflowSection = style({
  backgroundColor: '#FFFFFF',
  padding: '120px',
  //maxWidth: '1440px',
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
  maxWidth: '720px',
  lineHeight: 1.6,
});

export const stepsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '40px',
  width: '100%',
});

export const stepCard = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
});

export const stepNumber = style({
  fontFamily: vars.font.heading,
  fontSize: '48px',
  fontWeight: vars.font.weight.bold,
  color: '#00D1FF',
});

export const stepTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '22px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
});

export const stepText = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#444',
  lineHeight: 1.6,
});