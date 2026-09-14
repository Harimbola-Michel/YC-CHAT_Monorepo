import { ROLE_LABELS } from '../../constants/users'

const ROLE_STYLES = {
  admin: 'bg-[#f13544]/15 text-[#f13544]',
  moderator: 'bg-[#3b4b9e]/25 text-[#8f9fe8]',
  member: 'bg-white/10 text-[#b6bedd]',
}

/**
 * RoleBadge
 * Pastille indiquant le rôle d'un utilisateur.
 */
export default function RoleBadge({ role }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${ROLE_STYLES[role]}`}>
      {ROLE_LABELS[role]}
    </span>
  )
}