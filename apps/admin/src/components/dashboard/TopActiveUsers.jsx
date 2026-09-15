import { Crown } from 'lucide-react'
import { topActiveUsers } from '../../constants/topUsers'

const RANK_STYLES = {
  1: { bg: '#f0b232', text: '#00061f' },
  2: { bg: '#b6bedd', text: '#00061f' },
  3: { bg: '#b06a3a', text: '#00061f' },
}

/**
 * TopActiveUsers
 * Classement des 5 utilisateurs les plus actifs, avec barre de progression
 * relative au plus actif d'entre eux.
 */
export default function TopActiveUsers() {
  const maxMessages = topActiveUsers[0]?.messages ?? 1

  return (
    <div className="bg-[#081246] rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm">Utilisateurs les plus actifs</h3>
        <p className="text-[#b6bedd] text-xs">30 derniers jours</p>
      </div>

      <ul className="space-y-4">
        {topActiveUsers.map((user, index) => {
          const rank = index + 1
          const rankStyle = RANK_STYLES[rank]
          const percent = Math.round((user.messages / maxMessages) * 100)

          return (
            <li key={user.id} className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  backgroundColor: rankStyle?.bg ?? 'rgba(255,255,255,0.1)',
                  color: rankStyle?.text ?? '#b6bedd',
                }}
              >
                {rank === 1 ? <Crown className="w-3.5 h-3.5" strokeWidth={2.5} /> : rank}
              </div>

              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                style={{ backgroundColor: user.color }}
              >
                {user.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white text-sm font-medium truncate">{user.name}</p>
                  <p className="text-[#eef0fa] text-sm font-semibold shrink-0">
                    {user.messages.toLocaleString('fr-FR')}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#b6bedd] text-xs shrink-0">{user.role}</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#f13544] rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}