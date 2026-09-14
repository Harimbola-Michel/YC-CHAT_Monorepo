import { useState } from 'react'
import { Plus, Smile, Gift } from 'lucide-react'

const QUICK_EMOJIS = ['😀', '😂', '👍', '🎉', '❤️', '🙏', '😢', '🔥']

/**
 * MessageInput
 * Zone de saisie et d'envoi d'un nouveau message (façon Discord).
 */
export default function MessageInput({ channelName, onSend }) {
  const [value, setValue] = useState('')
  const [emojiOpen, setEmojiOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSend?.(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="shrink-0 px-4 pb-4 relative">
      {emojiOpen && (
        <div className="absolute bottom-full right-4 mb-2 bg-[#020a30] border border-white/10 rounded-md shadow-lg p-2 grid grid-cols-4 gap-1 z-10">
          {QUICK_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                setValue((prev) => prev + emoji)
                setEmojiOpen(false)
              }}
              className="text-xl w-9 h-9 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 bg-[#10184f] rounded-lg px-3 py-2.5">
        <button
          type="button"
          title="Joindre un fichier"
          className="text-[#b6bedd] hover:text-white transition-colors shrink-0"
        >
          <Plus className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Écrire un message dans #${channelName}`}
          className="flex-1 bg-transparent outline-none text-[15px] text-white placeholder:text-[#b6bedd]"
        />

        <button
          type="button"
          title="Envoyer un GIF"
          className="text-[#b6bedd] hover:text-white transition-colors shrink-0"
        >
          <Gift className="w-5 h-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => setEmojiOpen((prev) => !prev)}
          aria-pressed={emojiOpen}
          title="Émoji"
          className={`transition-colors shrink-0 ${emojiOpen ? 'text-white' : 'text-[#b6bedd] hover:text-white'}`}
        >
          <Smile className="w-5 h-5" strokeWidth={1.75} />
        </button>
      </div>
    </form>
  )
}
