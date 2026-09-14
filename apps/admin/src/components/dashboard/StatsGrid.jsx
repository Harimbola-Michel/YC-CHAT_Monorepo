import StatCard from './StatCard'
import { dashboardStats } from '../../constants/stats'

/**
 * StatsGrid
 * Grille responsive des cartes de statistiques du dashboard.
 */
export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {dashboardStats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  )
}