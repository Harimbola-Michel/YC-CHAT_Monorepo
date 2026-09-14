import { STATUS_LABELS } from '../../constants/users'

const STATUS_STYLES = {
  active: { dot: 'bg-[#23a55a]', text: 'text-[#23a55a]' },
  suspended: { dot: 'bg-[#f0b232]', text: 'text-[#f0b232]' },
  banned: { dot: 'bg-[#f13544]', text: 'text-[#f13544]' },
}

/**
 * StatusBadge
 * Pastille avec point coloré indiquant le statut d'un utilisateur.
 */
export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status]
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${style.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {STATUS_LABELS[status]}
    </span>
  )
}