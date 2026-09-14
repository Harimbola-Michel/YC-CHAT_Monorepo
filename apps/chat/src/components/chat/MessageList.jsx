import MessageItem from './MessageItem'

/**
 * MessageList
 * Liste défilante des messages du canal actif.
 */
export default function MessageList({ messages = [] }) {
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#b6bedd] text-sm">Aucun message pour l’instant. Soyez le premier à écrire !</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto py-4 space-y-2">
      {messages.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  )
}
