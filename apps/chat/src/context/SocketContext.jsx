import { createContext, useContext } from 'react'

/**
 * SocketContext
 * Fournit l'instance de connexion temps réel (websocket) à l'application.
 */
const SocketContext = createContext(null)

export function SocketProvider({ children }) {
  const value = {
    // TODO: socket instance, isConnected, connect(), disconnect()
  }
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
}

export function useSocketContext() {
  return useContext(SocketContext)
}
