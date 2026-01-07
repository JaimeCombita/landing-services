export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

export const mediaQueries = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  desktop: `screen and (min-width: ${breakpoints.tablet})`,
};
