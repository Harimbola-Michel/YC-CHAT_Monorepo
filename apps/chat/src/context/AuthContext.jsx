import { createContext, useContext } from 'react'

/**
 * AuthContext
 * Fournit l'état d'authentification (utilisateur courant, token, etc.) à l'application.
 */
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const value = {
    // TODO: user, isAuthenticated, login(), logout()
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}
