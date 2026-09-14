/**
 * ModerationTabs
 * Bascule entre la file de signalements et l'historique des actions.
 */
export default function ModerationTabs({ activeTab, onChange, pendingCount }) {
  const tabs = [
    { id: 'reports', label: 'Signalements', badge: pendingCount },
    { id: 'history', label: "Historique d'actions" },
  ]

  return (
    <div className="flex items-center gap-1 border-b border-white/10 mb-5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
            activeTab === tab.id ? 'text-white' : 'text-[#b6bedd] hover:text-white'
          }`}
        >
          {tab.label}
          {tab.badge > 0 && (
            <span className="bg-[#f13544] text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
              {tab.badge}
            </span>
          )}
          {activeTab === tab.id && (
            <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#f13544] rounded-full" />
          )}
        </button>
      ))}
    </div>
  )
}