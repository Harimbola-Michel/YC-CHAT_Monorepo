import { useState } from 'react'
import { Users, Gem, Store, Compass as QuestIcon, Plus } from 'lucide-react'
import { friends } from '../../constants/friends'
import { classNames } from '../../utils/classNames'

/**
 * FriendsSidebar
 * Colonne gauche de la page Amis : recherche, navigation (Amis/Nitro/Shop/Quêtes),
 * liste des messages privés.
 */
export default function FriendsSidebar({ className }) {
  const [search, setSearch] = useState('')

  return (
    <aside className={classNames('w-full sm:w-60 shrink-0 h-full bg-[#050f3d] flex-col', className)}>
      <div className="p-2.5 shrink-0">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Trouver ou démarrer une conversation"
          className="w-full bg-[#020a30] text-sm text-white placeholder:text-[#b6bedd] rounded-md px-3 py-1.5 outline-none"
        />
      </div>

      <nav className="px-2 space-y-0.5 shrink-0">
        <button className="w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium bg-white/10 text-white">
          <Users className="w-5 h-5 shrink-0" strokeWidth={1.75} />
          Amis
        </button>
        <button className="w-full flex items-center justify-between gap-3 px-2 py-2 rounded-md text-sm font-medium text-[#b6bedd] hover:bg-white/5 hover:text-white transition-colors">
          <span className="flex items-center gap-3">
            <Gem className="w-5 h-5 shrink-0" strokeWidth={1.75} />
            Nitro
          </span>
          <span className="text-[10px] bg-white/10 rounded px-1.5 py-0.5">PROMO</span>
        </button>
        <button className="w-full flex items-center justify-between gap-3 px-2 py-2 rounded-md text-sm font-medium text-[#b6bedd] hover:bg-white/5 hover:text-white transition-colors">
          <span className="flex items-center gap-3">
            <Store className="w-5 h-5 shrink-0" strokeWidth={1.75} />
            Boutique
          </span>
          <span className="text-[10px] bg-[#f13544] text-white rounded px-1.5 py-0.5">NOUVEAU</span>
        </button>
        <button className="w-full flex items-center justify-between gap-3 px-2 py-2 rounded-md text-sm font-medium text-[#b6bedd] hover:bg-white/5 hover:text-white transition-colors">
          <span className="flex items-center gap-3">
            <QuestIcon className="w-5 h-5 shrink-0" strokeWidth={1.75} />
            Quêtes
          </span>
          <span className="text-[10px] bg-[#f13544] text-white rounded px-1.5 py-0.5">NOUVEAU</span>
        </button>
      </nav>

      <div className="flex items-center justify-between px-3.5 mt-4 mb-1 shrink-0">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#b6bedd]">
          Messages privés
        </span>
        <button title="Nouveau message" className="text-[#b6bedd] hover:text-white transition-colors">
          <Plus className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
        {friends
          .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          .map((friend) => (
            <button
              key={friend.id}
              className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 transition-colors"
            >
              <div className="relative shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: friend.color }}
                >
                  {friend.initials}
                </div>
                <span
                  className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#050f3d] ${
                    friend.status === 'online' ? 'bg-[#23a55a]' : 'bg-[#80848e]'
                  }`}
                />
              </div>
              <span className="text-[#eef0fa] text-sm truncate">{friend.name}</span>
            </button>
          ))}
      </div>
    </aside>
  )
}