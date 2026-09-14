import { useMemo, useState } from 'react'
import ModerationTabs from '../components/moderation/ModerationTabs'
import ReportsList from '../components/moderation/ReportsList'
import ActionHistoryList from '../components/moderation/ActionHistoryList'
import { initialReports, actionLog } from '../constants/moderation'

/**
 * ModerationPage
 * File de signalements à traiter + historique des actions de modération.
 * NB: état 100% local (pas de backend réel).
 */
export default function ModerationPage() {
  const [activeTab, setActiveTab] = useState('reports')
  const [reports, setReports] = useState(initialReports)

  const pendingCount = useMemo(
    () => reports.filter((r) => r.status === 'pending').length,
    [reports]
  )

  const handleResolve = (id) => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved' } : r)))
  }

  const handleDismiss = (id) => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status: 'dismissed' } : r)))
  }

  return (
    <div className="p-6">
      <ModerationTabs activeTab={activeTab} onChange={setActiveTab} pendingCount={pendingCount} />

      {activeTab === 'reports' ? (
        <ReportsList reports={reports} onResolve={handleResolve} onDismiss={handleDismiss} />
      ) : (
        <ActionHistoryList actions={actionLog} />
      )}
    </div>
  )
}