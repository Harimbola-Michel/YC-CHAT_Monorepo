const STATUS_STYLES = {
  active: 'bg-[#23a55a]/15 text-[#23a55a]',
  archived: 'bg-white/10 text-[#b6bedd]',
}

const STATUS_LABELS = {
  active: 'Actif',
  archived: 'Archivé',
}

/**
 * ChannelStatusBadge
 * Pastille indiquant si un canal est actif ou archivé.
 */
export default function ChannelStatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  )
}