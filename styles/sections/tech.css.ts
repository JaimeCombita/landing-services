import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const techSection = style({
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

export const techGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: '40px',
  width: '100%',
  justifyItems: 'center',
});

export const techItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
});

export const techIcon = style({
  width: '48px',
  height: '48px',
  objectFit: 'contain',
});

export const techLabel = style({
  fontFamily: vars.font.body,
  fontSize: '14px',
  color: '#1A1A1A',
  textAlign: 'center',
});