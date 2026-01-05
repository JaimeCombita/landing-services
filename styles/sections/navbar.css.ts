import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const navbar = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
  background: 'transparent',
});

export const logo = style({
  fontFamily: vars.font.heading,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
  color: vars.color.white,
});

export const navLinks = style({
  display: 'flex',
  gap: vars.space.md,
  fontFamily: vars.font.body,
  fontSize: vars.font.size.base,
  color: vars.color.white,
});