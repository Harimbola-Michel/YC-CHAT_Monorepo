import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  X,
  User,
  ShieldCheck,
  Bell,
  Palette,
  LogOut,
  Eye,
  EyeOff,
  Pencil,
} from 'lucide-react'

const NAV_SECTIONS = [
  { id: 'account', label: 'Mon compte', icon: User },
  { id: 'privacy', label: 'Confidentialité et données', icon: ShieldCheck },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Apparence', icon: Palette },
]

const THEME_SWATCHES = [
  '#00061f',
  '#050f3d',
  '#081246',
  '#10184f',
  '#f13544',
  '#3b4b9e',
  '#23a55a',
  '#f0b232',
]

/**
 * SettingsModal
 * Fenêtre de paramètres utilisateur en plein écran (façon Discord).
 * NB: la plupart des actions sont visuelles/locales (pas de backend réel).
 */
export default function SettingsModal({ onClose }) {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('account')
  const [emailRevealed, setEmailRevealed] = useState(false)
  const [editingUsername, setEditingUsername] = useState(false)
  const [username, setUsername] = useState('michelharimbola')
  const [compactMode, setCompactMode] = useState(false)
  const [selectedSwatch, setSelectedSwatch] = useState('#f13544')
  const [notifPrefs, setNotifPrefs] = useState({
    sounds: true,
    directMessages: true,
    mentionsOnly: false,
  })

  const toggleNotifPref = (key) =>
    setNotifPrefs((prev) => ({ ...prev, [key]: !prev[key] }))

  const handleLogout = () => {
    onClose?.()
    navigate('/login')
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00061f] flex"
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => e.key === 'Escape' && onClose?.()}
    >
      {/* Navigation gauche */}
      <div className="w-64 shrink-0 bg-[#050f3d] flex flex-col py-6 px-3">
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#f13544] flex items-center justify-center text-white text-sm font-semibold shrink-0">
            MH
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">Michel-Harimbola</p>
            <button className="text-[#b6bedd] text-xs hover:underline">Modifier le profil</button>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5">
          {NAV_SECTIONS.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-[#b6bedd] hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                {section.label}
              </button>
            )
          })}
        </nav>

        <div className="pt-3 mt-3 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-[#f13544] hover:bg-[#f13544] hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            Se déconnecter
          </button>
        </div>
      </div>

      {/* Contenu de droite */}
      <div className="flex-1 overflow-y-auto relative">
        <button
          onClick={onClose}
          title="Fermer"
          className="absolute top-6 right-8 w-9 h-9 flex items-center justify-center rounded-full border border-[#b6bedd]/40 text-[#b6bedd] hover:text-white hover:border-white transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        <div className="max-w-2xl mx-auto px-8 py-10">
          {activeSection === 'account' && (
            <section>
              <h2 className="text-white text-lg font-semibold mb-6">Mon compte</h2>

              <div className="space-y-5">
                <div className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3">
                  <div>
                    <p className="text-[#b6bedd] text-xs uppercase tracking-wide mb-1">Nom d'utilisateur</p>
                    {editingUsername ? (
                      <input
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={() => setEditingUsername(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setEditingUsername(false)}
                        className="bg-[#10184f] text-white text-sm rounded px-2 py-1 outline-none"
                      />
                    ) : (
                      <p className="text-[#eef0fa] text-sm">{username}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setEditingUsername((prev) => !prev)}
                    className="flex items-center gap-1.5 text-sm text-white bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" strokeWidth={1.75} />
                    Modifier
                  </button>
                </div>

                <div className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3">
                  <div>
                    <p className="text-[#b6bedd] text-xs uppercase tracking-wide mb-1">E-mail</p>
                    <p className="text-[#eef0fa] text-sm">
                      {emailRevealed ? 'michel.harimbola@gmail.com' : '••••••••••••••••@gmail.com'}
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailRevealed((prev) => !prev)}
                    className="flex items-center gap-1.5 text-sm text-white bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 transition-colors"
                  >
                    {emailRevealed ? <EyeOff className="w-3.5 h-3.5" strokeWidth={1.75} /> : <Eye className="w-3.5 h-3.5" strokeWidth={1.75} />}
                    {emailRevealed ? 'Masquer' : 'Afficher'}
                  </button>
                </div>

                <div className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3">
                  <div>
                    <p className="text-[#b6bedd] text-xs uppercase tracking-wide mb-1">Mot de passe</p>
                    <p className="text-[#eef0fa] text-sm">••••••••••••</p>
                  </div>
                  <button className="text-sm text-white bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 transition-colors">
                    Modifier
                  </button>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'privacy' && (
            <section>
              <h2 className="text-white text-lg font-semibold mb-4">Confidentialité et données</h2>
              <p className="text-[#b6bedd] text-sm leading-relaxed">
                Gérez ici qui peut vous envoyer des messages, vous ajouter en ami, et comment vos
                données sont utilisées au sein de l'application.
              </p>
            </section>
          )}

          {activeSection === 'notifications' && (
            <section>
              <h2 className="text-white text-lg font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                {[
                  { key: 'sounds', label: 'Sons de notification' },
                  { key: 'directMessages', label: 'Messages privés' },
                  { key: 'mentionsOnly', label: 'Ne me notifier que pour les mentions' },
                ].map(({ key, label }) => (
                  <div
                    key={key}
                    className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3"
                  >
                    <span className="text-[#eef0fa] text-sm">{label}</span>
                    <button
                      onClick={() => toggleNotifPref(key)}
                      aria-pressed={notifPrefs[key]}
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                        notifPrefs[key] ? 'bg-[#f13544] justify-end' : 'bg-white/15 justify-start'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-white block" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeSection === 'appearance' && (
            <section>
              <h2 className="text-white text-lg font-semibold mb-6">Apparence</h2>

              <div className="flex items-center justify-between bg-[#081246] rounded-lg px-4 py-3 mb-6">
                <div>
                  <p className="text-[#eef0fa] text-sm">Mode compact</p>
                  <p className="text-[#b6bedd] text-xs">Réduit l'espacement entre les messages.</p>
                </div>
                <button
                  onClick={() => setCompactMode((prev) => !prev)}
                  aria-pressed={compactMode}
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                    compactMode ? 'bg-[#f13544] justify-end' : 'bg-white/15 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white block" />
                </button>
              </div>

              <p className="text-[#b6bedd] text-xs uppercase tracking-wide mb-2">Couleur d'accent</p>
              <div className="grid grid-cols-8 gap-2">
                {THEME_SWATCHES.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedSwatch(color)}
                    style={{ backgroundColor: color }}
                    className={`w-9 h-9 rounded-full border-2 transition-transform ${
                      selectedSwatch === color ? 'border-white scale-110' : 'border-transparent'
                    }`}
                    title={color}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
