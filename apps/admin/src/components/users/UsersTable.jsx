import { Ban, ShieldOff, ShieldAlert, Trash2, RotateCcw } from 'lucide-react'
import RoleBadge from './RoleBadge'
import StatusBadge from './StatusBadge'

/**
 * UsersTable
 * Tableau des utilisateurs avec actions (suspendre, bannir, supprimer).
 */
export default function UsersTable({ users, onToggleSuspend, onToggleBan, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="bg-[#081246] rounded-xl py-16 flex items-center justify-center">
        <p className="text-[#b6bedd] text-sm">Aucun utilisateur ne correspond à ces filtres.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#081246] rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Utilisateur</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Rôle</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Statut</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Inscrit le</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Messages</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-white/5 last:border-0 hover:bg-white/3">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium truncate">{user.name}</p>
                    <p className="text-[#b6bedd] text-xs truncate">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3"><RoleBadge role={user.role} /></td>
              <td className="px-5 py-3"><StatusBadge status={user.status} /></td>
              <td className="px-5 py-3 text-[#eef0fa]">{user.joinedAt}</td>
              <td className="px-5 py-3 text-[#eef0fa]">{user.messages.toLocaleString('fr-FR')}</td>
              <td className="px-5 py-3">
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => onToggleSuspend(user.id)}
                    title={user.status === 'suspended' ? 'Réactiver' : 'Suspendre'}
                    className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-[#f0b232]/15 hover:text-[#f0b232] transition-colors"
                  >
                    {user.status === 'suspended' ? (
                      <RotateCcw className="w-4 h-4" strokeWidth={1.75} />
                    ) : (
                      <ShieldAlert className="w-4 h-4" strokeWidth={1.75} />
                    )}
                  </button>
                  <button
                    onClick={() => onToggleBan(user.id)}
                    title={user.status === 'banned' ? 'Débannir' : 'Bannir'}
                    className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-[#f13544]/15 hover:text-[#f13544] transition-colors"
                  >
                    {user.status === 'banned' ? (
                      <ShieldOff className="w-4 h-4" strokeWidth={1.75} />
                    ) : (
                      <Ban className="w-4 h-4" strokeWidth={1.75} />
                    )}
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    title="Supprimer"
                    className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.75} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}