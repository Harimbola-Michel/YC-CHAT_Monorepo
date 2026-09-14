import { useMemo, useState } from 'react'
import ChannelsToolbar from '../components/channels/ChannelsToolbar'
import ChannelsTable from '../components/channels/ChannelsTable'
import ChannelFormModal from '../components/channels/ChannelFormModal'
import { initialChannels } from '../constants/adminChannels'

/**
 * ChannelsPage
 * Gestion des canaux : recherche, filtres, création/modification, archivage.
 * NB: état 100% local (pas de backend réel).
 */
export default function ChannelsPage() {
  const [channels, setChannels] = useState(initialChannels)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingChannel, setEditingChannel] = useState(null)

  const filteredChannels = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return channels.filter((channel) => {
      const matchesQuery = !query || channel.name.toLowerCase().includes(query)
      const matchesCategory = categoryFilter === 'all' || channel.category === categoryFilter
      const matchesStatus = statusFilter === 'all' || channel.status === statusFilter
      return matchesQuery && matchesCategory && matchesStatus
    })
  }, [channels, searchQuery, categoryFilter, statusFilter])

  const handleCreate = () => {
    setEditingChannel(null)
    setModalOpen(true)
  }

  const handleEdit = (channel) => {
    setEditingChannel(channel)
    setModalOpen(true)
  }

  const handleToggleArchive = (id) => {
    setChannels((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: c.status === 'archived' ? 'active' : 'archived' } : c
      )
    )
  }

  const handleDelete = (id) => {
    setChannels((prev) => prev.filter((c) => c.id !== id))
  }

  const handleSubmit = (data) => {
    if (editingChannel) {
      setChannels((prev) =>
        prev.map((c) => (c.id === editingChannel.id ? { ...c, ...data } : c))
      )
    } else {
      setChannels((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...data,
          members: 0,
          messages: 0,
          status: 'active',
          createdAt: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
        },
      ])
    }
    setModalOpen(false)
  }

  return (
    <div className="p-6">
      <ChannelsToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        resultCount={filteredChannels.length}
        onCreate={handleCreate}
      />
      <ChannelsTable
        channels={filteredChannels}
        onEdit={handleEdit}
        onToggleArchive={handleToggleArchive}
        onDelete={handleDelete}
      />

      {modalOpen && (
        <ChannelFormModal
          channel={editingChannel}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}