import { createContext, useContext } from 'react'

/**
 * ChatContext
 * Fournit l'état global du chat (conversations, conversation active, messages).
 */
const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const value = {
    // TODO: conversations, activeConversation, messages, setActiveConversation(), sendMessage()
  }
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChatContext() {
  return useContext(ChatContext)
}
