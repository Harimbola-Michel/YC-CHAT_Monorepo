import { useState } from 'react'
import { MessagesSquare, Check } from 'lucide-react'

/**
 * GeneralSettings
 * Configuration générale du serveur (nom, description, icône).
 */
export default function GeneralSettings() {
  const [serverName, setServerName] = useState('Youth Computing Executive Squad')
  const [description, setDescription] = useState(
    "Espace de coordination de l'équipe exécutive de Youth Computing."
  )
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <form onSubmit={handleSave} className="max-w-xl space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#f13544] flex items-center justify-center shrink-0">
          <MessagesSquare className="w-7 h-7 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <button
            type="button"
            className="text-sm text-white bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 transition-colors"
          >
            Changer l'icône
          </button>
          <p className="text-[#b6bedd] text-xs mt-1.5">PNG ou JPG, 512×512px recommandé.</p>
        </div>
      </div>

      <div>
        <label className="block text-[#b6bedd] text-xs uppercase tracking-wide mb-1.5">
          Nom du serveur
        </label>
        <input
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
          className="w-full bg-[#081246] text-white text-sm rounded-md px-3 py-2.5 outline-none border border-transparent focus:border-[#f13544]/50"
        />
      </div>

      <div>
        <label className="block text-[#b6bedd] text-xs uppercase tracking-wide mb-1.5">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full bg-[#081246] text-white text-sm rounded-md px-3 py-2.5 outline-none border border-transparent focus:border-[#f13544]/50 resize-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-[#f13544] hover:bg-[#d81f2e] text-white text-sm font-medium rounded-md px-4 py-2 transition-colors"
        >
          Enregistrer
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-[#23a55a] text-sm">
            <Check className="w-4 h-4" strokeWidth={2} />
            Modifications enregistrées
          </span>
        )}
      </div>
    </form>
  )
}