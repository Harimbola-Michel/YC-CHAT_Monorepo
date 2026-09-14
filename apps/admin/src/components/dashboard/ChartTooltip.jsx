/**
 * ChartTooltip
 * Tooltip recharts personnalisé pour coller au thème sombre.
 */
export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div className="bg-[#050f3d] border border-white/10 rounded-md px-3 py-2 shadow-lg">
      {label && <p className="text-[#b6bedd] text-xs mb-1">{label}</p>}
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-white text-sm font-medium">
          {entry.value.toLocaleString('fr-FR')}
          <span className="text-[#b6bedd] font-normal"> messages</span>
        </p>
      ))}
    </div>
  )
}