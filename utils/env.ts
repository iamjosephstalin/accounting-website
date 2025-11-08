// Environment variable utilities for production-ready configuration

const env = import.meta.env;

export const config = {
  // App Configuration
  app: {
    title: env.VITE_APP_TITLE || 'Professional Accounting Services',
    description: env.VITE_APP_DESCRIPTION || 'Expert accounting and taxation services for individuals and businesses',
  },

  // Company Information
  company: {
    name: env.VITE_COMPANY_NAME || 'Your Company Name',
    email: env.VITE_COMPANY_EMAIL || 'contact@yourcompany.com',
    phone: env.VITE_COMPANY_PHONE || '+1 (555) 123-4567',
    address: env.VITE_COMPANY_ADDRESS || '123 Business Street, City, State 12345',
    whatsapp: env.VITE_WHATSAPP_NUMBER || '15551234567',
  },

  // External Services
  services: {
    googleMapsEmbedUrl: env.VITE_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398196963419!2d-74.00601768461607!3d40.71277597932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e18a5c9%3A0x69c1b1c9f1b1e1e1!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000',
    googleAnalyticsId: env.VITE_GOOGLE_ANALYTICS_ID,
    gtmId: env.VITE_GTM_ID,
    formSubmitUrl: env.VITE_FORM_SUBMIT_URL,
  },

  // Social Media
  social: {
    facebook: env.VITE_FACEBOOK_URL || '#',
    twitter: env.VITE_TWITTER_URL || '#',
    linkedin: env.VITE_LINKEDIN_URL || '#',
  },

  // Environment
  isDev: env.DEV,
  isProd: env.PROD,
  mode: env.MODE,
};

// Validation helper for required environment variables
export const validateRequiredEnvVars = () => {
  const requiredVars = [
    'VITE_COMPANY_NAME',
    'VITE_COMPANY_EMAIL',
    'VITE_COMPANY_PHONE',
    'VITE_WHATSAPP_NUMBER',
  ];

  const missingVars = requiredVars.filter(varName => !env[varName as keyof typeof env]);

  if (missingVars.length > 0 && env.PROD) {
    console.warn(
      `Missing required environment variables in production: ${missingVars.join(', ')}\n` +
      'Please check your deployment configuration and ensure all required variables are set.'
    );
  }

  return missingVars.length === 0;
};

// Helper to get WhatsApp URL
export const getWhatsAppUrl = (message?: string) => {
  const baseMessage = encodeURIComponent(
    message || `Hi! I'm interested in your accounting services. Could you please provide more information?`
  );
  return `https://wa.me/${config.company.whatsapp}?text=${baseMessage}`;
};

// Helper to get mailto URL
export const getMailtoUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  
  const queryString = params.toString();
  return `mailto:${config.company.email}${queryString ? `?${queryString}` : ''}`;
};

// Helper to get tel URL
export const getTelUrl = () => {
  return `tel:${config.company.phone}`;
};