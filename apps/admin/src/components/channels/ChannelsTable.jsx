import { Hash, Volume2, Pencil, Archive, ArchiveRestore, Trash2 } from 'lucide-react'
import ChannelTypeBadge from './ChannelTypeBadge'
import ChannelStatusBadge from './ChannelStatusBadge'

/**
 * ChannelsTable
 * Tableau des canaux avec actions (modifier, archiver, supprimer).
 */
export default function ChannelsTable({ channels, onEdit, onToggleArchive, onDelete }) {
  if (channels.length === 0) {
    return (
      <div className="bg-[#081246] rounded-xl py-16 flex items-center justify-center">
        <p className="text-[#b6bedd] text-sm">Aucun canal ne correspond à ces filtres.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#081246] rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Canal</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Catégorie</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Type</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Membres</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Messages</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium">Statut</th>
            <th className="px-5 py-3 text-[#b6bedd] font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => {
            const Icon = channel.type === 'voice' ? Volume2 : Hash
            return (
              <tr key={channel.id} className="border-b border-white/5 last:border-0 hover:bg-white/3">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon className="w-4 h-4 text-[#b6bedd] shrink-0" strokeWidth={1.75} />
                    <span className="text-white font-medium truncate">{channel.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-[#eef0fa]">{channel.category}</td>
                <td className="px-5 py-3"><ChannelTypeBadge type={channel.type} /></td>
                <td className="px-5 py-3 text-[#eef0fa]">{channel.members}</td>
                <td className="px-5 py-3 text-[#eef0fa]">{channel.messages.toLocaleString('fr-FR')}</td>
                <td className="px-5 py-3"><ChannelStatusBadge status={channel.status} /></td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => onEdit(channel)}
                      title="Modifier"
                      className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <Pencil className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                    <button
                      onClick={() => onToggleArchive(channel.id)}
                      title={channel.status === 'archived' ? 'Désarchiver' : 'Archiver'}
                      className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-[#f0b232]/15 hover:text-[#f0b232] transition-colors"
                    >
                      {channel.status === 'archived' ? (
                        <ArchiveRestore className="w-4 h-4" strokeWidth={1.75} />
                      ) : (
                        <Archive className="w-4 h-4" strokeWidth={1.75} />
                      )}
                    </button>
                    <button
                      onClick={() => onDelete(channel.id)}
                      title="Supprimer"
                      className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-[#f13544]/15 hover:text-[#f13544] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}