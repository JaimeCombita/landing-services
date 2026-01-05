import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const heroWrapper = style({
  background: `linear-gradient(135deg, ${vars.color.brand.deep} 0%, #07121F 100%)`,
  color: vars.color.white,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: vars.space.xl,
  position: 'relative',
});

export const heroContent = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space.lg,
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const leftColumn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.space.md,
});

export const heading = style({
  fontFamily: vars.font.heading,
  fontSize: '3.5rem',
  fontWeight: vars.font.weight.bold,
  lineHeight: 1.2,
});

export const subheading = style({
  fontFamily: vars.font.body,
  fontSize: '1.25rem',
  color: '#DCE3EA',
  lineHeight: 1.6,
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: vars.space.md,
});

export const primaryButton = style({
  backgroundColor: vars.color.brand.electric,
  color: vars.color.white,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: '8px',
  fontWeight: vars.font.weight.medium,
  transition: 'background 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.brand.cyan,
    },
  },
});

export const secondaryButton = style({
  backgroundColor: 'transparent',
  border: `2px solid ${vars.color.brand.electric}`,
  color: vars.color.brand.electric,
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: '8px',
  fontWeight: vars.font.weight.medium,
  transition: 'all 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: '#1E90FF22',
    },
  },
});

export const trustBadge = style({
  marginTop: vars.space.lg,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontSize: vars.font.size.sm,
  color: vars.color.neutral.light,
});