import { useState } from 'react'
import {
  ChevronDown,
  Hash,
  Volume2,
  Mic,
  MicOff,
  Headphones,
  Settings,
  UserPlus,
  Bell,
  LogOut,
} from 'lucide-react'
import { categories } from '../../constants/channels'
import SettingsModal from '../settings/SettingsModal'

/**
 * ChannelSidebar
 * Sidebar de 240px façon Discord : en-tête serveur (avec menu), catégories
 * repliables, liste de canaux (texte/vocal), bandeau utilisateur fixe en bas.
 */
export default function ChannelSidebar({ activeChannelId, onSelectChannel }) {
  const [openCategories, setOpenCategories] = useState(
    () => Object.fromEntries(categories.map((c) => [c.id, true]))
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [micMuted, setMicMuted] = useState(false)
  const [deafened, setDeafened] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const toggleCategory = (id) =>
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <aside className="w-60 shrink-0 h-full bg-[#050f3d] flex flex-col relative">
      {/* En-tête serveur */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="h-12 shrink-0 flex items-center justify-between px-4 border-b border-white/10 hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-semibold text-[15px] truncate">
          Youth Computing Executive Squad
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/70 shrink-0 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {/* Menu déroulant du serveur */}
      {menuOpen && (
        <div className="absolute top-14 left-2 right-2 z-10 bg-[#020a30] rounded-md shadow-lg py-1.5 border border-white/10">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#eef0fa] hover:bg-[#f13544] hover:text-white transition-colors">
            <UserPlus className="w-4 h-4" strokeWidth={1.75} />
            Inviter des personnes
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#eef0fa] hover:bg-[#f13544] hover:text-white transition-colors">
            <Settings className="w-4 h-4" strokeWidth={1.75} />
            Paramètres du serveur
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#eef0fa] hover:bg-[#f13544] hover:text-white transition-colors">
            <Bell className="w-4 h-4" strokeWidth={1.75} />
            Notifications
          </button>
          <div className="my-1 border-t border-white/10" />
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#f13544] hover:bg-[#f13544] hover:text-white transition-colors">
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
            Quitter le serveur
          </button>
        </div>
      )}

      {/* Catégories + canaux */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-3" onClick={() => setMenuOpen(false)}>
        {categories.map((category) => (
          <div key={category.id}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleCategory(category.id)
              }}
              className="w-full flex items-center gap-1 px-1 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#b6bedd] hover:text-white transition-colors"
            >
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  openCategories[category.id] ? '' : '-rotate-90'
                }`}
                strokeWidth={2.5}
              />
              {category.label}
            </button>

            {openCategories[category.id] && (
              <ul className="mt-0.5 space-y-0.5">
                {category.channels.map((channel) => {
                  const isActive = activeChannelId === channel.id
                  const Icon = channel.type === 'voice' ? Volume2 : Hash
                  return (
                    <li key={channel.id}>
                      <button
                        onClick={() => onSelectChannel?.(channel.id)}
                        className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[15px] transition-colors ${
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-[#b6bedd] hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0 text-[#b6bedd]" strokeWidth={1.75} />
                        <span className="truncate">{channel.name}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Bandeau utilisateur */}
      <div className="h-14 shrink-0 flex items-center gap-2 px-2 bg-[#020a30]">
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#f13544] flex items-center justify-center text-white text-xs font-semibold">
            MH
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#23a55a] border-2 border-[#020a30]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">Michel-Harimbola</p>
          <p className="text-[#b6bedd] text-xs truncate">
            {deafened ? 'Casque coupé' : micMuted ? 'Micro coupé' : 'Online'}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMicMuted((prev) => !prev)}
            aria-pressed={micMuted}
            title={micMuted ? 'Activer le micro' : 'Couper le micro'}
            className={`p-1.5 rounded transition-colors ${
              micMuted ? 'text-[#f13544] bg-white/10' : 'text-[#b6bedd] hover:bg-white/10 hover:text-white'
            }`}
          >
            {micMuted ? <MicOff className="w-4 h-4" strokeWidth={1.75} /> : <Mic className="w-4 h-4" strokeWidth={1.75} />}
          </button>
          <button
            onClick={() => setDeafened((prev) => !prev)}
            aria-pressed={deafened}
            title={deafened ? 'Réactiver le son' : 'Couper le son'}
            className={`p-1.5 rounded transition-colors ${
              deafened ? 'text-[#f13544] bg-white/10' : 'text-[#b6bedd] hover:bg-white/10 hover:text-white'
            }`}
          >
            <Headphones className="w-4 h-4" strokeWidth={1.75} />
          </button>
          <button
            onClick={() => setSettingsOpen(true)}
            title="Paramètres utilisateur"
            className="p-1.5 rounded text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
    </aside>
  )
}
