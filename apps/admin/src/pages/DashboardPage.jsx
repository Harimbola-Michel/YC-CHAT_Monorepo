import StatsGrid from '../components/dashboard/StatsGrid'
import MessagesActivityChart from '../components/dashboard/MessagesActivityChart'
import TopChannelsChart from '../components/dashboard/TopChannelsChart'

/**
 * DashboardPage
 * Page d'accueil du back-office (statistiques, graphiques, activité récente).
 */
export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <StatsGrid />

      <div className="flex flex-col xl:flex-row gap-4">
        <MessagesActivityChart />
        <TopChannelsChart />
      </div>
    </div>
  )
}