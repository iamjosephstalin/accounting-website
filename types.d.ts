/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_COMPANY_NAME: string
  readonly VITE_COMPANY_EMAIL: string
  readonly VITE_COMPANY_PHONE: string
  readonly VITE_COMPANY_ADDRESS: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_GOOGLE_MAPS_EMBED_URL: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_TWITTER_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_FORM_SUBMIT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv extends ImportMetaEnv {}
}