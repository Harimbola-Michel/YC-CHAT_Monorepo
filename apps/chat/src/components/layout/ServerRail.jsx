import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MessagesSquare, Plus, Compass } from 'lucide-react'

/**
 * ServerRail
 * Colonne verticale de 72px (façon Discord) listant les serveurs/espaces.
 * Icônes en carré arrondi (16px) qui passent en cercle au survol/actif,
 * avec une pastille blanche à gauche indiquant l'élément actif.
 */
const servers = [
  { id: 'design', label: 'Design Team', initials: 'DT', color: '#5865f2' },
  { id: 'dev', label: 'Dev Squad', initials: 'DS', color: '#23a55a' },
  { id: 'random', label: 'Random', initials: 'RN', color: '#f0b232' },
]

// RailButton EST le bouton (un seul <button> par item, plus de wrapper imbriqué)
function RailButton({ active, color, children, label, onClick }) {
  return (
    <div className="relative flex items-center w-full justify-center group">
      {/* Pastille active/hover à gauche */}
      <span
        className={`absolute left-0 w-1 rounded-r-full bg-white transition-all duration-200 ${
          active ? 'h-10' : 'h-2 opacity-0 group-hover:opacity-100 group-hover:h-5'
        }`}
      />
      <button
        onClick={onClick}
        title={label}
        style={color ? { backgroundColor: color } : undefined}
        className={`w-12 h-12 flex items-center justify-center text-white font-medium text-sm
          transition-all duration-200 ease-out
          ${active ? 'rounded-2xl' : 'rounded-full hover:rounded-2xl'}
          ${!color ? 'bg-[#0a1550] hover:bg-[#f13544]' : ''}`}
      >
        {children}
      </button>
    </div>
  )
}

export default function ServerRail() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeServerId, setActiveServerId] = useState('design')

  const isFriendsActive = location.pathname === '/friends'

  const goToServer = (serverId) => {
    setActiveServerId(serverId)
    if (location.pathname !== '/chat') navigate('/chat')
  }

  return (
    <nav className="w-18 shrink-0 h-full bg-[#00061f] flex flex-col items-center py-3 gap-2 overflow-y-auto">
      <RailButton
        active={isFriendsActive}
        color="#f13544"
        label="Amis / Messages privés"
        onClick={() => navigate('/friends')}
      >
        <MessagesSquare className="w-6 h-6" strokeWidth={1.75} />
      </RailButton>

      <div className="w-8 h-0.5 bg-[#10163a] rounded-full my-1 shrink-0" />

      {servers.map((server) => (
        <RailButton
          key={server.id}
          active={!isFriendsActive && activeServerId === server.id}
          color={server.color}
          label={server.label}
          onClick={() => goToServer(server.id)}
        >
          {server.initials}
        </RailButton>
      ))}

      <RailButton active={false} label="Ajouter un serveur">
        <Plus className="w-6 h-6 text-[#f13544]" strokeWidth={1.75} />
      </RailButton>

      <RailButton active={false} label="Explorer">
        <Compass className="w-6 h-6 text-[#f13544]" strokeWidth={1.75} />
      </RailButton>
    </nav>
  )
}