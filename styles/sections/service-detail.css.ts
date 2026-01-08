import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

// Hero Styles
export const heroContainer = style({
  backgroundColor: '#F8F9FA',
  padding: '140px 24px 80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '100px 24px 60px',
    },
  },
});

export const backButton = style({
  position: 'absolute',
  top: '100px',
  left: '120px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: vars.font.body,
  fontSize: '16px',
  fontWeight: vars.font.weight.medium,
  color: '#555',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  background: 'transparent',
  '@media': {
    'screen and (max-width: 768px)': {
      top: '80px',
      left: '24px',
      fontSize: '14px',
      padding: '6px 12px',
    },
  },
  selectors: {
    '&:hover': {
      color: '#00D1FF',
      backgroundColor: 'rgba(0, 209, 255, 0.1)',
    },
  },
});

export const heroContent = style({
  maxWidth: '800px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
});

export const heroIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '8px',
});

export const heroTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '48px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '32px',
    },
  },
});

export const heroDescription = style({
  fontFamily: vars.font.body,
  fontSize: '20px',
  color: '#555',
  lineHeight: 1.6,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

// Description Section Styles
export const descriptionSection = style({
  backgroundColor: '#FFFFFF',
  padding: '80px 24px',
  display: 'flex',
  justifyContent: 'center',
});

export const descriptionContainer = style({
  maxWidth: '1200px',
  width: '100%',
});

export const descriptionTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '36px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const descriptionText = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#555',
  lineHeight: 1.7,
  marginBottom: '48px',
});

export const featuresList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '32px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
  },
});

export const featureItem = style({
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
});

export const featureIcon = style({
  width: '28px',
  height: '28px',
  stroke: '#00D1FF',
  flexShrink: 0,
  marginTop: '4px',
});

export const featureContent = style({
  flex: 1,
});

export const featureTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '20px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '8px',
});

export const featureDescription = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.6,
});

// Tech Section Styles
export const techSection = style({
  backgroundColor: '#F8F9FA',
  padding: '80px 24px',
  display: 'flex',
  justifyContent: 'center',
});

export const techContainer = style({
  maxWidth: '1200px',
  width: '100%',
});

export const techTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '36px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  textAlign: 'center',
  marginBottom: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const techSubtitle = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#555',
  textAlign: 'center',
  marginBottom: '48px',
  lineHeight: 1.6,
});

export const techGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '40px',
  marginBottom: '64px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
    },
  },
});

export const techColumn = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
});

export const techColumnTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '24px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  marginBottom: '24px',
});

export const techList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const techItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const techLogo = style({
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const techLogoImage = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

export const techName = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  color: '#444',
  fontWeight: vars.font.weight.medium,
});

export const methodologyContainer = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '48px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '32px 24px',
    },
  },
});

export const methodologyTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '28px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  textAlign: 'center',
  marginBottom: '40px',
});

export const methodologySteps = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '32px',
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const stepCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const stepNumber = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#00D1FF',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.heading,
  fontSize: '20px',
  fontWeight: vars.font.weight.bold,
  marginBottom: '8px',
});

export const stepTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '18px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
});

export const stepDescription = style({
  fontFamily: vars.font.body,
  fontSize: '15px',
  color: '#666',
  lineHeight: 1.6,
});

// CTA Section Styles
export const ctaSection = style({
  backgroundColor: '#1A1A1A',
  padding: '80px 24px',
  display: 'flex',
  justifyContent: 'center',
});

export const ctaContainer = style({
  maxWidth: '800px',
  width: '100%',
});

export const ctaContent = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
});

export const ctaTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '36px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const ctaDescription = style({
  fontFamily: vars.font.body,
  fontSize: '18px',
  color: '#E0E0E0',
  lineHeight: 1.6,
  marginBottom: '16px',
});

export const ctaButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  fontWeight: vars.font.weight.bold,
  color: '#1A1A1A',
  backgroundColor: '#00D1FF',
  padding: '16px 32px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#00B8E6',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0, 209, 255, 0.3)',
    },
  },
});

export const ctaSecondaryButton = style({
  fontFamily: vars.font.body,
  fontSize: '16px',
  fontWeight: vars.font.weight.bold,
  color: '#FFFFFF',
  backgroundColor: 'transparent',
  padding: '16px 32px',
  borderRadius: '8px',
  border: '2px solid #FFFFFF',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      transform: 'translateY(-2px)',
    },
  },
});
