import { useMemo, useState } from 'react'
import { Users, Search, MessageSquare, MoreVertical, UserPlus } from 'lucide-react'
import { friends } from '../../constants/friends'

const TABS = [
  { id: 'online', label: 'En ligne' },
  { id: 'all', label: 'Tous' },
  { id: 'pending', label: 'En attente' },
  { id: 'add', label: 'Ajouter un ami' },
]

/**
 * FriendsList
 * Liste des amis avec onglets (en ligne/tous/en attente/ajouter) et recherche.
 */
export default function FriendsList() {
  const [activeTab, setActiveTab] = useState('all')
  const [search, setSearch] = useState('')

  const visibleFriends = useMemo(() => {
    let list = friends
    if (activeTab === 'online') list = list.filter((f) => f.status === 'online')
    return list.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
  }, [activeTab, search])

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* En-tête avec onglets */}
      <div className="h-12 shrink-0 flex items-center gap-4 px-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-white font-semibold shrink-0">
          <Users className="w-5 h-5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Amis</span>
        </div>
        <div className="w-px h-6 bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? tab.id === 'add'
                    ? 'bg-[#23a55a] text-white'
                    : 'bg-white/10 text-white'
                  : 'text-[#b6bedd] hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'add' ? (
        <div className="p-4">
          <p className="text-white text-sm font-semibold mb-2">AJOUTER UN AMI</p>
          <p className="text-[#b6bedd] text-xs mb-3">
            Tu peux ajouter un ami avec son pseudo Youth Computing.
          </p>
          <div className="flex items-center gap-2 bg-[#081246] rounded-md px-3 py-2.5 max-w-md">
            <input
              placeholder="Saisir un pseudo"
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd]"
            />
            <button className="flex items-center gap-1.5 bg-[#f13544] hover:bg-[#d81f2e] text-white text-sm font-medium rounded-md px-3 py-1.5 transition-colors shrink-0">
              <UserPlus className="w-4 h-4" strokeWidth={1.75} />
              Envoyer
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Recherche */}
          <div className="px-4 pt-4 pb-2 shrink-0">
            <div className="flex items-center gap-2 bg-[#081246] rounded-md px-3 py-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd]"
              />
              <Search className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
            </div>
          </div>

          <p className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-[#b6bedd] shrink-0">
            {activeTab === 'online' ? 'En ligne' : 'Tous les amis'} — {visibleFriends.length}
          </p>

          {/* Liste */}
          <div className="flex-1 overflow-y-auto px-2">
            {visibleFriends.length === 0 ? (
              <p className="text-[#b6bedd] text-sm text-center mt-10">Aucun ami trouvé.</p>
            ) : (
              visibleFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center gap-3 px-2.5 py-2.5 rounded-md hover:bg-white/5 transition-colors group border-t border-white/5 first:border-0"
                >
                  <div className="relative shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                      style={{ backgroundColor: friend.color }}
                    >
                      {friend.initials}
                    </div>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#00061f] ${
                        friend.status === 'online' ? 'bg-[#23a55a]' : 'bg-[#80848e]'
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium truncate">{friend.name}</p>
                    <p className="text-[#b6bedd] text-xs truncate">
                      {friend.status === 'online' ? 'En ligne' : 'Hors ligne'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <button
                      title="Envoyer un message"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#b6bedd] hover:text-white transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                    <button
                      title="Plus d'options"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#b6bedd] hover:text-white transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}