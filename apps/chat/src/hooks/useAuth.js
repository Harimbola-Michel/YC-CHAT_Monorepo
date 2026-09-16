import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

/**
 * Expose l'état et les actions d'authentification.
 * Doit être utilisé sous un <AuthProvider> (voir context/AuthContext.jsx).
 */
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth doit être utilisé à l’intérieur de <AuthProvider>')
  }
  return context
}