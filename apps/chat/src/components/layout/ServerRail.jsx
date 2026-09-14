import { useState } from 'react'
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

function RailButton({ active, color, children, label }) {
  return (
    <div className="relative flex items-center w-full justify-center group">
      {/* Pastille active/hover à gauche */}
      <span
        className={`absolute left-0 w-1 rounded-r-full bg-white transition-all duration-200 ${
          active ? 'h-10' : 'h-2 opacity-0 group-hover:opacity-100 group-hover:h-5'
        }`}
      />
      <button
        title={label}
        style={color ? { backgroundColor: color } : undefined}
        className={`w-12 h-12 flex items-center justify-center text-white font-medium text-sm
          transition-all duration-200 ease-out
          ${active ? 'rounded-[16px]' : 'rounded-full hover:rounded-[16px]'}
          ${!color ? 'bg-[#0a1550] hover:bg-[#f13544]' : ''}`}
      >
        {children}
      </button>
    </div>
  )
}

export default function ServerRail() {
  const [activeId, setActiveId] = useState('design')

  return (
    <nav className="w-[72px] shrink-0 h-full bg-[#00061f] flex flex-col items-center py-3 gap-2 overflow-y-auto">
      <button onClick={() => setActiveId('home')} className="w-full flex justify-center">
        <RailButton active={activeId === 'home'} color="#f13544" label="Accueil">
          <MessagesSquare className="w-6 h-6" strokeWidth={1.75} />
        </RailButton>
      </button>

      <div className="w-8 h-[2px] bg-[#10163a] rounded-full my-1 shrink-0" />

      {servers.map((server) => (
        <button key={server.id} onClick={() => setActiveId(server.id)} className="w-full flex justify-center">
          <RailButton active={activeId === server.id} color={server.color} label={server.label}>
            {server.initials}
          </RailButton>
        </button>
      ))}

      <button onClick={() => setActiveId('add')} className="w-full flex justify-center">
        <RailButton active={false} label="Ajouter un serveur">
          <Plus className="w-6 h-6 text-[#f13544]" strokeWidth={1.75} />
        </RailButton>
      </button>

      <button onClick={() => setActiveId('explore')} className="w-full flex justify-center">
        <RailButton active={false} label="Explorer">
          <Compass className="w-6 h-6 text-[#f13544]" strokeWidth={1.75} />
        </RailButton>
      </button>
    </nav>
  )
}
