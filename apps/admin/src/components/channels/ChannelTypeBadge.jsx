import { Hash, Volume2 } from 'lucide-react'

/**
 * ChannelTypeBadge
 * Pastille indiquant si un canal est textuel ou vocal.
 */
export default function ChannelTypeBadge({ type }) {
  const Icon = type === 'voice' ? Volume2 : Hash
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#b6bedd]">
      <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
      {type === 'voice' ? 'Vocal' : 'Texte'}
    </span>
  )
}