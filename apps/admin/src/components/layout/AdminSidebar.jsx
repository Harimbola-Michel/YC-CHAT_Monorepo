import { NavLink, useNavigate } from 'react-router-dom'
import { MessagesSquare, LogOut } from 'lucide-react'
import { navItems } from '../../constants/nav'

/**
 * AdminSidebar
 * Navigation principale du back-office : logo, liens, profil admin en bas.
 */
export default function AdminSidebar() {
  const navigate = useNavigate()

  return (
    <aside className="w-64 shrink-0 h-screen bg-[#050f3d] flex flex-col">
      {/* Logo / marque */}
      <div className="h-16 shrink-0 flex items-center gap-2.5 px-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-[#f13544] flex items-center justify-center shrink-0">
          <MessagesSquare className="w-4.5 h-4.5 text-white" strokeWidth={2} />
        </div>
        <span className="text-white font-semibold text-[15px] truncate">Youth Computing Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#f13544] text-white'
                    : 'text-[#b6bedd] hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon className="w-4.5 h-4.5 shrink-0" strokeWidth={1.75} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      {/* Profil admin */}
      <div className="h-16 shrink-0 flex items-center gap-2.5 px-3 border-t border-white/10 bg-[#020a30]">
        <div className="w-8 h-8 rounded-full bg-[#f13544] flex items-center justify-center text-white text-xs font-semibold shrink-0">
          MH
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">Michel-Harimbola</p>
          <p className="text-[#b6bedd] text-xs truncate">Administrateur</p>
        </div>
        <button
          onClick={() => navigate('/login')}
          title="Se déconnecter"
          className="p-1.5 rounded text-[#b6bedd] hover:bg-white/10 hover:text-[#f13544] transition-colors shrink-0"
        >
          <LogOut className="w-4.5 h-4.5" strokeWidth={1.75} />
        </button>
      </div>
    </aside>
  )
}