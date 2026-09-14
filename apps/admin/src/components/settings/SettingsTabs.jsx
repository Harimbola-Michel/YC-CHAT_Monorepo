/**
 * SettingsTabs
 * Bascule entre les sections de la page Paramètres admin.
 */
const TABS = [
  { id: 'general', label: 'Général' },
  { id: 'roles', label: 'Rôles & permissions' },
  { id: 'moderation', label: 'Modération' },
]

export default function SettingsTabs({ activeTab, onChange }) {
  return (
    <div className="flex items-center gap-1 border-b border-white/10 mb-5">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
            activeTab === tab.id ? 'text-white' : 'text-[#b6bedd] hover:text-white'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#f13544] rounded-full" />
          )}
        </button>
      ))}
    </div>
  )
}