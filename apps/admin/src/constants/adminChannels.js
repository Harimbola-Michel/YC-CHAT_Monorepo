/**
 * adminChannels
 * Données de démonstration pour la page Canaux du back-office.
 * NB: en dur pour l'instant — à remplacer par le flux réel (API).
 */
export const CATEGORY_OPTIONS = [
  'Leadership',
  'Operating Structure',
  'Town hall Meeting',
  'Meeting Channel',
]

export const initialChannels = [
  { id: 1, name: 'team-leaders', category: 'Leadership', type: 'text', members: 12, messages: 1204, status: 'active', createdAt: '10 jan. 2026' },
  { id: 2, name: 'institutional-representative', category: 'Leadership', type: 'text', members: 8, messages: 342, status: 'active', createdAt: '10 jan. 2026' },
  { id: 3, name: 'administrative-team', category: 'Operating Structure', type: 'text', members: 15, messages: 566, status: 'active', createdAt: '14 jan. 2026' },
  { id: 4, name: 'relationship-team', category: 'Operating Structure', type: 'text', members: 9, messages: 210, status: 'active', createdAt: '14 jan. 2026' },
  { id: 5, name: 'community-team', category: 'Operating Structure', type: 'text', members: 21, messages: 890, status: 'active', createdAt: '14 jan. 2026' },
  { id: 6, name: 'impactful-team', category: 'Operating Structure', type: 'text', members: 11, messages: 178, status: 'archived', createdAt: '15 jan. 2026' },
  { id: 7, name: 'main-chat', category: 'Town hall Meeting', type: 'text', members: 128, messages: 3021, status: 'active', createdAt: '20 jan. 2026' },
  { id: 8, name: 'announcement', category: 'Town hall Meeting', type: 'text', members: 128, messages: 87, status: 'active', createdAt: '20 jan. 2026' },
  { id: 9, name: 'laughter-corner', category: 'Town hall Meeting', type: 'text', members: 96, messages: 654, status: 'active', createdAt: '22 jan. 2026' },
  { id: 10, name: 'leadership-meeting', category: 'Meeting Channel', type: 'voice', members: 6, messages: 0, status: 'active', createdAt: '25 jan. 2026' },
  { id: 11, name: 'open-room-2', category: 'Meeting Channel', type: 'voice', members: 0, messages: 0, status: 'archived', createdAt: '2 fév. 2026' },
]