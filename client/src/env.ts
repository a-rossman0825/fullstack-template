// env.ts
export const dev = import.meta.env.MODE === 'development'
export const baseURL = dev
  ? '/api' // Use proxy in development
  : import.meta.env.VITE_API_BASE_URL || 'https://your-production-url.com'

// Optional flags
export const useSockets = false
export const domain = import.meta.env.VITE_AUTH_DOMAIN || ''
export const clientId = import.meta.env.VITE_AUTH_CLIENT_ID || ''
export const audience = import.meta.env.VITE_AUTH_AUDIENCE || ''