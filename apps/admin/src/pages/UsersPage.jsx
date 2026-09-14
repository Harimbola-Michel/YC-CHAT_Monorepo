import { useMemo, useState } from 'react'
import UsersToolbar from '../components/users/UsersToolbar'
import UsersTable from '../components/users/UsersTable'
import { initialUsers } from '../constants/users'

/**
 * UsersPage
 * Gestion des utilisateurs : recherche, filtres, actions de modération.
 * NB: état 100% local (pas de backend réel).
 */
export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredUsers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return users.filter((user) => {
      const matchesQuery =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      const matchesRole = roleFilter === 'all' || user.role === roleFilter
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter
      return matchesQuery && matchesRole && matchesStatus
    })
  }, [users, searchQuery, roleFilter, statusFilter])

  const handleToggleSuspend = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === 'suspended' ? 'active' : 'suspended' }
          : u
      )
    )
  }

  const handleToggleBan = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === 'banned' ? 'active' : 'banned' } : u
      )
    )
  }

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  return (
    <div className="p-6">
      <UsersToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        resultCount={filteredUsers.length}
      />
      <UsersTable
        users={filteredUsers}
        onToggleSuspend={handleToggleSuspend}
        onToggleBan={handleToggleBan}
        onDelete={handleDelete}
      />
    </div>
  )
}