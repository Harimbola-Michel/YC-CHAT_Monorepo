/**
 * MemberList
 * Colonne de 240px listant les membres du canal, groupés par statut.
 * NB: données de démonstration en dur, à remplacer par le flux réel (socket/API).
 */
const groups = [
  {
    label: 'Leadership',
    members: [
      { id: 1, name: 'Michel-Harimbola', initials: 'MH', color: '#f13544', status: 'online' },
      { id: 2, name: 'Amélia', initials: 'AM', color: '#3b4b9e', status: 'online' },
    ],
  },
  {
    label: 'Membres',
    members: [
      { id: 3, name: 'Jabihy', initials: 'JB', color: '#3b4b9e', status: 'idle' },
      { id: 4, name: 'Erica Sarobidy', initials: 'ES', color: '#5b6280', status: 'online' },
      { id: 5, name: 'Liantsoa Jenny', initials: 'LJ', color: '#5b6280', status: 'dnd' },
    ],
  },
  {
    label: 'Hors ligne',
    members: [
      { id: 6, name: 'Mioratiana', initials: 'MI', color: '#5b6280', status: 'offline' },
    ],
  },
]

const statusColor = {
  online: '#23a55a',
  idle: '#f0b232',
  dnd: '#f13544',
  offline: '#80848e',
}

export default function MemberList() {
  return (
    <aside className="w-60 shrink-0 h-full bg-[#050f3d] overflow-y-auto py-4 hidden lg:block">
      {groups.map((group) => (
        <div key={group.label} className="px-3 mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#b6bedd] px-1 mb-1">
            {group.label} — {group.members.length}
          </p>
          <ul className="space-y-0.5">
            {group.members.map((member) => (
              <li key={member.id}>
                <button className="w-full flex items-center gap-2.5 px-1.5 py-1.5 rounded-md hover:bg-white/5 transition-colors">
                  <div className="relative shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                      style={{ backgroundColor: member.color }}
                    >
                      {member.initials}
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#050f3d]"
                      style={{ backgroundColor: statusColor[member.status] }}
                    />
                  </div>
                  <span
                    className={`text-sm truncate ${
                      member.status === 'offline' ? 'text-[#b6bedd]' : 'text-[#eef0fa]'
                    }`}
                  >
                    {member.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
