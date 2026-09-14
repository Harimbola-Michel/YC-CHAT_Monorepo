import { useState } from 'react'
import { roles, permissions, initialPermissionMatrix } from '../../constants/adminSettings'

/**
 * RolesPermissions
 * Matrice permissions x rôles. La colonne Admin est verrouillée
 * (un admin a toujours tous les droits).
 */
export default function RolesPermissions() {
  const [matrix, setMatrix] = useState(initialPermissionMatrix)

  const toggleCell = (permissionId, roleId) => {
    if (roleId === 'admin') return // verrouillé
    setMatrix((prev) => ({
      ...prev,
      [permissionId]: {
        ...prev[permissionId],
        [roleId]: !prev[permissionId][roleId],
      },
    }))
  }

  return (
    <div className="bg-[#081246] rounded-xl overflow-hidden max-w-2xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-5 py-3 text-left text-[#b6bedd] font-medium">Permission</th>
            {roles.map((role) => (
              <th key={role.id} className="px-5 py-3 text-center text-[#b6bedd] font-medium">
                {role.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id} className="border-b border-white/5 last:border-0">
              <td className="px-5 py-3 text-[#eef0fa]">{permission.label}</td>
              {roles.map((role) => {
                const checked = matrix[permission.id][role.id]
                const locked = role.id === 'admin'
                return (
                  <td key={role.id} className="px-5 py-3 text-center">
                    <button
                      onClick={() => toggleCell(permission.id, role.id)}
                      disabled={locked}
                      title={locked ? 'Toujours activé pour Admin' : undefined}
                      className={`w-9 h-5 rounded-full inline-flex items-center px-0.5 transition-colors ${
                        checked ? 'bg-[#f13544] justify-end' : 'bg-white/15 justify-start'
                      } ${locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span className="w-4 h-4 rounded-full bg-white block" />
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}