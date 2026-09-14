const STYLES = {
  pending: 'bg-[#f0b232]/15 text-[#f0b232]',
  resolved: 'bg-[#23a55a]/15 text-[#23a55a]',
  dismissed: 'bg-white/10 text-[#b6bedd]',
}

const LABELS = {
  pending: 'En attente',
  resolved: 'Résolu',
  dismissed: 'Rejeté',
}

/**
 * ReportStatusBadge
 * Pastille indiquant l'état d'un signalement.
 */
export default function ReportStatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${STYLES[status]}`}>
      {LABELS[status]}
    </span>
  )
}