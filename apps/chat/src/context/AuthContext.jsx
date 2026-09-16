import { createContext, useState } from 'react'
import {
  registerUser,
  loginUser,
  saveSession,
  getCurrentUser,
  logout as clearSession,
} from '../services/auth.service'

export const AuthContext = createContext(null)

/**
 * Fournit l'état d'authentification à toute l'app.
 * À placer autour des routes, par ex. dans App.jsx :
 *
 *   <AuthProvider>
 *     <RouterProvider router={router} />
 *   </AuthProvider>
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getCurrentUser())

  async function register(payload) {
    const { accessToken, user: newUser } = await registerUser(payload)
    saveSession({ accessToken, user: newUser })
    setUser(newUser)
    return newUser
  }

  async function login(credentials) {
    const { accessToken, user: loggedInUser } = await loginUser(credentials)
    saveSession({ accessToken, user: loggedInUser })
    setUser(loggedInUser)
    return loggedInUser
  }

  function logout() {
    clearSession()
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}