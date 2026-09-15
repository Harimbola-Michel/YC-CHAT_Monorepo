import { useMemo, useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import TypingIndicator from './TypingIndicator'
import MessageInput from './MessageInput'
import { classNames } from '../../utils/classNames'

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
  onBack,
  className,
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
    <section className={classNames('flex-1 flex-col bg-[#081246] min-w-0', className)}>
      <ChatHeader
        channelName={channel.name}
        channelType={channel.type}
        showMembers={showMembers}
        onToggleMembers={onToggleMembers}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onBack={onBack}
      />
      <MessageList messages={filteredMessages} />
      <TypingIndicator />
      <MessageInput channelName={channel.name} onSend={onSendMessage} />
    </section>
  )
}