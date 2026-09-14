import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

/**
 * StatCard
 * Carte affichant un indicateur clé (valeur + tendance) du dashboard.
 */
export default function StatCard({ label, value, icon: Icon, trend, trendLabel }) {
  const isPositive = trend > 0
  const isNeutral = trend === 0
  const TrendIcon = isNeutral ? Minus : isPositive ? TrendingUp : TrendingDown
  const trendColor = isNeutral ? 'text-[#b6bedd]' : isPositive ? 'text-[#23a55a]' : 'text-[#f13544]'

  return (
    <div className="bg-[#081246] rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-[#b6bedd] text-sm">{label}</p>
        <div className="w-9 h-9 rounded-lg bg-[#f13544]/15 flex items-center justify-center shrink-0">
          <Icon className="w-4.5 h-4.5 text-[#f13544]" strokeWidth={1.75} />
        </div>
      </div>

      <div>
        <p className="text-white text-2xl font-semibold">{value}</p>
        <div className={`flex items-center gap-1 text-xs mt-1 ${trendColor}`}>
          <TrendIcon className="w-3.5 h-3.5" strokeWidth={2} />
          <span>{isNeutral ? trendLabel : `${isPositive ? '+' : ''}${trend}% ${trendLabel}`}</span>
        </div>
      </div>
    </div>
  )
}