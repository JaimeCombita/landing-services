import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './tokens/colors.css';
import { spacing } from './tokens/spacing.css';
import { font } from './tokens/typography.css';
import { shadows } from './tokens/shadows.css';

export const vars = createThemeContract({
  color: colors,
  space: spacing,
  font: font,
  shadow: shadows,
});

createGlobalTheme(':root', vars, {
  color: colors,
  space: spacing,
  font: font,
  shadow: shadows,
});