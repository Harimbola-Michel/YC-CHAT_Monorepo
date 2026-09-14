import { Search, UserPlus } from 'lucide-react'
import { ROLE_LABELS, STATUS_LABELS } from '../../constants/users'

/**
 * UsersToolbar
 * Barre de recherche + filtres (rôle/statut) au-dessus du tableau utilisateurs.
 */
export default function UsersToolbar({
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  statusFilter,
  onStatusFilterChange,
  resultCount,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
      <div className="flex items-center gap-2 bg-[#081246] rounded-md px-3 py-2 flex-1 min-w-0">
        <Search className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher un utilisateur..."
          className="bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd] w-full"
        />
      </div>

      <select
        value={roleFilter}
        onChange={(e) => onRoleFilterChange(e.target.value)}
        className="bg-[#081246] text-sm text-white rounded-md px-3 py-2 outline-none border border-transparent focus:border-[#f13544]/50 shrink-0"
      >
        <option value="all">Tous les rôles</option>
        {Object.entries(ROLE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="bg-[#081246] text-sm text-white rounded-md px-3 py-2 outline-none border border-transparent focus:border-[#f13544]/50 shrink-0"
      >
        <option value="all">Tous les statuts</option>
        {Object.entries(STATUS_LABELS).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <button className="flex items-center justify-center gap-2 bg-[#f13544] hover:bg-[#d81f2e] text-white text-sm font-medium rounded-md px-4 py-2 transition-colors shrink-0">
        <UserPlus className="w-4 h-4" strokeWidth={1.75} />
        Inviter
      </button>

      <p className="text-[#b6bedd] text-xs shrink-0 sm:ml-1">
        {resultCount} résultat{resultCount > 1 ? 's' : ''}
      </p>
    </div>
  )
}