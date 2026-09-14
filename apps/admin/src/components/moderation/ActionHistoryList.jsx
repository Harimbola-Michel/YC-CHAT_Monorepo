
import { Ban, ShieldAlert, Trash2, CheckCircle2, XCircle } from 'lucide-react'

const ACTION_STYLES = {
  ban: { icon: Ban, color: '#f13544' },
  suspend: { icon: ShieldAlert, color: '#f0b232' },
  delete: { icon: Trash2, color: '#b6bedd' },
  resolve: { icon: CheckCircle2, color: '#23a55a' },
  dismiss: { icon: XCircle, color: '#b6bedd' },
}

/**
 * ActionHistoryList
 * Historique chronologique des actions de modération (lecture seule).
 */
export default function ActionHistoryList({ actions }) {
  if (actions.length === 0) {
    return (
      <div className="bg-[#081246] rounded-xl py-16 flex items-center justify-center">
        <p className="text-[#b6bedd] text-sm">Aucune action enregistrée pour l'instant.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#081246] rounded-xl p-5">
      <ul className="space-y-0">
        {actions.map((entry, index) => {
          const style = ACTION_STYLES[entry.action]
          const Icon = style.icon
          const isLast = index === actions.length - 1
          return (
            <li key={entry.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${style.color}26` }}
                >
                  <Icon className="w-4 h-4" style={{ color: style.color }} strokeWidth={1.75} />
                </div>
                {!isLast && <div className="w-px flex-1 bg-white/10 my-1" />}
              </div>
              <div className={`min-w-0 ${isLast ? 'pb-0' : 'pb-5'}`}>
                <p className="text-sm text-[#eef0fa]">
                  <span className="font-semibold text-white">{entry.actor}</span> {entry.label}{' '}
                  <span className="font-semibold text-white">{entry.target}</span>
                </p>
                <p className="text-[#b6bedd] text-xs mt-0.5">{entry.timestamp}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}