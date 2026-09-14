import { useMemo, useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import TypingIndicator from './TypingIndicator'
import MessageInput from './MessageInput'

/**
 * ChatWindow
 * Zone principale : regroupe l'en-tête, les messages et la saisie.
 * Gère localement la recherche et l'ajout de messages (pas de backend réel).
 */
export default function ChatWindow({
  channel,
  messages,
  onSendMessage,
  showMembers,
  onToggleMembers,
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMessages = useMemo(() => {
    if (!searchQuery.trim()) return messages
    const query = searchQuery.toLowerCase()
    return messages.filter(
      (m) =>
        m.content.toLowerCase().includes(query) ||
        m.author.toLowerCase().includes(query)
    )
  }, [messages, searchQuery])

  return (
    <section className="flex-1 flex flex-col bg-[#081246] min-w-0">
      <ChatHeader
        channelName={channel.name}
        channelType={channel.type}
        showMembers={showMembers}
        onToggleMembers={onToggleMembers}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <MessageList messages={filteredMessages} />
      <TypingIndicator />
      <MessageInput channelName={channel.name} onSend={onSendMessage} />
    </section>
  )
}
