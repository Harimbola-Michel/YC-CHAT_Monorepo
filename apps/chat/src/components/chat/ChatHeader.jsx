import { useState } from 'react'
import { Hash, Volume2, Bell, BellOff, Pin, Users, Search, X, ChevronLeft } from 'lucide-react'

/**
 * ChatHeader
 * En-tête du canal actif : bouton retour (mobile), icône + nom, actions à droite.
 */
export default function ChatHeader({
  channelName,
  channelType = 'text',
  showMembers,
  onToggleMembers,
  searchQuery,
  onSearchChange,
  onBack,
}) {
  const [muted, setMuted] = useState(false)
  const [pinOpen, setPinOpen] = useState(false)
  const Icon = channelType === 'voice' ? Volume2 : Hash

  return (
    <header className="h-12 shrink-0 flex items-center justify-between px-2 sm:px-4 border-b border-white/10 bg-[#081246] relative">
      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
        <button
          onClick={onBack}
          title="Retour aux canaux"
          className="sm:hidden w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors shrink-0"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <Icon className="w-5 h-5 text-[#b6bedd] shrink-0" strokeWidth={2} />
        <span className="text-white font-semibold text-[15px] truncate">{channelName}</span>
      </div>

      <div className="flex items-center gap-1 text-[#b6bedd] shrink-0">
        <button
          onClick={() => setMuted((prev) => !prev)}
          aria-pressed={muted}
          title={muted ? 'Réactiver les notifications' : 'Couper les notifications'}
          className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
            muted ? 'text-[#f13544] bg-white/10' : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          {muted ? <BellOff className="w-5 h-5" strokeWidth={1.75} /> : <Bell className="w-5 h-5" strokeWidth={1.75} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setPinOpen((prev) => !prev)}
            aria-pressed={pinOpen}
            title="Messages épinglés"
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
              pinOpen ? 'text-white bg-white/10' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Pin className="w-5 h-5" strokeWidth={1.75} />
          </button>

          {pinOpen && (
            <div className="absolute right-0 top-10 w-64 bg-[#020a30] border border-white/10 rounded-md shadow-lg p-3 z-10">
              <p className="text-white text-sm font-semibold mb-2">Messages épinglés</p>
              <p className="text-[#b6bedd] text-sm">Aucun message épinglé pour l’instant.</p>
            </div>
          )}
        </div>

        <button
          onClick={onToggleMembers}
          aria-pressed={showMembers}
          title="Membres"
          className={`hidden lg:flex w-8 h-8 items-center justify-center rounded-md transition-colors ${
            showMembers ? 'text-white bg-white/10' : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          <Users className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <div className="flex items-center bg-[#10184f] rounded-md px-2 py-1.5 ml-1 sm:ml-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Rechercher"
            className="bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd] w-16 sm:w-28"
          />
          {searchQuery ? (
            <button onClick={() => onSearchChange?.('')} title="Effacer">
              <X className="w-4 h-4 shrink-0 hover:text-white" strokeWidth={1.75} />
            </button>
          ) : (
            <Search className="w-4 h-4 shrink-0" strokeWidth={1.75} />
          )}
        </div>
      </div>
    </header>
  )
}