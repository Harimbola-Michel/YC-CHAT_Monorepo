import { useState } from 'react'

const TOGGLE_ITEMS = [
  { key: 'autoSpamFilter', label: 'Filtre anti-spam automatique', hint: 'Détecte et bloque les messages répétitifs.' },
  { key: 'blockExternalLinks', label: 'Bloquer les liens externes', hint: 'Pour les membres non vérifiés.' },
  { key: 'autoVerifyNewMembers', label: 'Vérification automatique des nouveaux membres', hint: "Via l'adresse e-mail à l'inscription." },
]

/**
 * ModerationDefaults
 * Réglages de modération par défaut appliqués à tout le serveur.
 */
export default function ModerationDefaults() {
  const [toggles, setToggles] = useState({
    autoSpamFilter: true,
    blockExternalLinks: false,
    autoVerifyNewMembers: true,
  })
  const [bannedWords, setBannedWords] = useState('spam, arnaque, lien-suspect')

  const toggle = (key) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="max-w-xl space-y-4">
      {TOGGLE_ITEMS.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3"
        >
          <div className="min-w-0 pr-4">
            <p className="text-[#eef0fa] text-sm">{item.label}</p>
            <p className="text-[#b6bedd] text-xs mt-0.5">{item.hint}</p>
          </div>
          <button
            onClick={() => toggle(item.key)}
            aria-pressed={toggles[item.key]}
            className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors shrink-0 ${
              toggles[item.key] ? 'bg-[#f13544] justify-end' : 'bg-white/15 justify-start'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-white block" />
          </button>
        </div>
      ))}

      <div className="bg-[#081246] rounded-lg px-4 py-3">
        <label className="block text-[#eef0fa] text-sm mb-1">Mots interdits</label>
        <p className="text-[#b6bedd] text-xs mb-2">Séparés par des virgules.</p>
        <textarea
          value={bannedWords}
          onChange={(e) => setBannedWords(e.target.value)}
          rows={2}
          className="w-full bg-[#10184f] text-white text-sm rounded-md px-3 py-2 outline-none resize-none"
        />
      </div>
    </div>
  )
}