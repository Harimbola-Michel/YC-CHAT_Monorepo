import { useState } from 'react'
import { X, Hash, Volume2 } from 'lucide-react'
import { CATEGORY_OPTIONS } from '../../constants/adminChannels'

/**
 * ChannelFormModal
 * Modale de création ou modification d'un canal.
 */
export default function ChannelFormModal({ channel, onClose, onSubmit }) {
  const isEditing = Boolean(channel)
  const [name, setName] = useState(channel?.name ?? '')
  const [category, setCategory] = useState(channel?.category ?? CATEGORY_OPTIONS[0])
  const [type, setType] = useState(channel?.type ?? 'text')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim().toLowerCase().replace(/\s+/g, '-')
    if (!trimmed) return
    onSubmit({ name: trimmed, category, type })
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-[#081246] rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          title="Fermer"
          className="absolute top-4 right-4 text-[#b6bedd] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        <h2 className="text-white text-lg font-semibold mb-5">
          {isEditing ? 'Modifier le canal' : 'Créer un canal'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#b6bedd] text-xs uppercase tracking-wide mb-1.5">
              Nom du canal
            </label>
            <div className="flex items-center gap-2 bg-[#10184f] rounded-md px-3 py-2.5">
              {type === 'voice' ? (
                <Volume2 className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
              ) : (
                <Hash className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
              )}
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="nom-du-canal"
                className="bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd] w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#b6bedd] text-xs uppercase tracking-wide mb-1.5">
              Catégorie
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#10184f] text-white text-sm rounded-md px-3 py-2.5 outline-none"
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#b6bedd] text-xs uppercase tracking-wide mb-2">Type</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setType('text')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  type === 'text' ? 'bg-[#f13544] text-white' : 'bg-[#10184f] text-[#b6bedd] hover:text-white'
                }`}
              >
                <Hash className="w-4 h-4" strokeWidth={1.75} />
                Texte
              </button>
              <button
                type="button"
                onClick={() => setType('voice')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  type === 'voice' ? 'bg-[#f13544] text-white' : 'bg-[#10184f] text-[#b6bedd] hover:text-white'
                }`}
              >
                <Volume2 className="w-4 h-4" strokeWidth={1.75} />
                Vocal
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium text-[#b6bedd] hover:text-white transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium bg-[#f13544] hover:bg-[#d81f2e] text-white transition-colors"
            >
              {isEditing ? 'Enregistrer' : 'Créer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}