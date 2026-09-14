import { Search, Plus } from 'lucide-react'
import { CATEGORY_OPTIONS } from '../../constants/adminChannels'

/**
 * ChannelsToolbar
 * Barre de recherche + filtres (catégorie/statut) + bouton de création.
 */
export default function ChannelsToolbar({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryFilterChange,
  statusFilter,
  onStatusFilterChange,
  resultCount,
  onCreate,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
      <div className="flex items-center gap-2 bg-[#081246] rounded-md px-3 py-2 flex-1 min-w-0">
        <Search className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher un canal..."
          className="bg-transparent outline-none text-sm text-white placeholder:text-[#b6bedd] w-full"
        />
      </div>

      <select
        value={categoryFilter}
        onChange={(e) => onCategoryFilterChange(e.target.value)}
        className="bg-[#081246] text-sm text-white rounded-md px-3 py-2 outline-none border border-transparent focus:border-[#f13544]/50 shrink-0"
      >
        <option value="all">Toutes les catégories</option>
        {CATEGORY_OPTIONS.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="bg-[#081246] text-sm text-white rounded-md px-3 py-2 outline-none border border-transparent focus:border-[#f13544]/50 shrink-0"
      >
        <option value="all">Tous les statuts</option>
        <option value="active">Actif</option>
        <option value="archived">Archivé</option>
      </select>

      <button
        onClick={onCreate}
        className="flex items-center justify-center gap-2 bg-[#f13544] hover:bg-[#d81f2e] text-white text-sm font-medium rounded-md px-4 py-2 transition-colors shrink-0"
      >
        <Plus className="w-4 h-4" strokeWidth={1.75} />
        Créer un canal
      </button>

      <p className="text-[#b6bedd] text-xs shrink-0 sm:ml-1">
        {resultCount} résultat{resultCount > 1 ? 's' : ''}
      </p>
    </div>
  )
}