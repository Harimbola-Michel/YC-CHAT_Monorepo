import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, Bell } from 'lucide-react'
import { navItems } from '../../constants/nav'

/**
 * Topbar
 * Barre supérieure : titre de la page courante, recherche, notifications, profil.
 */
export default function Topbar() {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  const currentItem =
    navItems.find((item) => item.path === location.pathname) ?? navItems[0]

  return (
    <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-white/10 bg-[#081246]">
      <h1 className="text-white text-lg font-semibold">{currentItem.label}</h1>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#10184f] rounded-md px-3 py-2 w-64">
          <Search className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher..."
            className="bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd] w-full"
          />
        </div>

        <button
          title="Notifications"
          className="relative w-9 h-9 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors"
        >
          <Bell className="w-5 h-5" strokeWidth={1.75} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#f13544]" />
        </button>

        <div className="w-9 h-9 rounded-full bg-[#f13544] flex items-center justify-center text-white text-xs font-semibold shrink-0">
          MH
        </div>
      </div>
    </header>
  )
}