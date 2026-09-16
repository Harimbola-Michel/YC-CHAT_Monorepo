import axios from 'axios'

/**
 * Client HTTP central pour parler à l'API NestJS.
 * VITE_API_URL doit être défini dans apps/chat/.env (voir .env.example).
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
})

// Attache automatiquement le token JWT à chaque requête si présent
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api