/**
 * channels
 * Données de démonstration partagées (catégories/canaux + messages par canal).
 * NB: en dur pour l'instant — à remplacer par le flux réel (socket/API).
 */
export const categories = [
  {
    id: 'leadership',
    label: 'Leadership',
    channels: [
      { id: 'team-leaders', name: 'team-leaders', type: 'text' },
      { id: 'institutional-representative', name: 'institutional-representative', type: 'text' },
    ],
  },
  {
    id: 'operating',
    label: 'Operating Structure',
    channels: [
      { id: 'administrative-team', name: 'administrative-team', type: 'text' },
      { id: 'relationship-team', name: 'relationship-team', type: 'text' },
      { id: 'community-team', name: 'community-team', type: 'text' },
      { id: 'impactful-team', name: 'impactful-team', type: 'text' },
    ],
  },
  {
    id: 'townhall',
    label: 'Town hall Meeting',
    channels: [
      { id: 'main-chat', name: 'main-chat', type: 'text' },
      { id: 'announcement', name: 'announcement', type: 'text' },
      { id: 'laughter-corner', name: 'laughter-corner', type: 'text' },
    ],
  },
  {
    id: 'meeting',
    label: 'Meeting Channel',
    channels: [
      { id: 'leadership-meeting', name: 'leadership-meeting', type: 'voice' },
      { id: 'field-team-meeting', name: 'field-team-meeting', type: 'voice' },
      { id: 'open-room-1', name: 'open-room-1', type: 'voice' },
      { id: 'open-room-2', name: 'open-room-2', type: 'voice' },
    ],
  },
]

/** Tous les canaux à plat, pratique pour retrouver un canal par id. */
export const allChannels = categories.flatMap((category) => category.channels)

export const defaultMessages = {
  'team-leaders': [
    {
      id: 1,
      author: 'Michel-Harimbola',
      initials: 'MH',
      color: '#f13544',
      time: "Aujourd'hui à 8:40 PM",
      content: 'Est-ce que la réunion peut avancer un peu plus tôt ? Je suis au bureau.',
    },
    {
      id: 2,
      author: 'Jabihy',
      initials: 'JB',
      color: '#3b4b9e',
      time: "Aujourd'hui à 8:53 PM",
      content: 'Présentiel ou en ligne pour cette fois ?',
    },
    {
      id: 3,
      author: 'Michel-Harimbola',
      initials: 'MH',
      color: '#f13544',
      time: "Aujourd'hui à 8:55 PM",
      content: 'Ça marche pour toi ?',
    },
    {
      id: 4,
      author: 'Erica Sarobidy',
      initials: 'ES',
      color: '#5b6280',
      time: "Aujourd'hui à 10:22 PM",
      content: "On n'est pas encore prêts à présenter aujourd'hui.",
    },
    {
      id: 5,
      author: 'Amélia',
      initials: 'AM',
      color: '#3b4b9e',
      time: 'Hier à 6:43 AM',
      content: 'Il reste une semaine, on ne peut pas se permettre de rater ça.',
    },
  ],
  'main-chat': [
    {
      id: 1,
      author: 'Amélia',
      initials: 'AM',
      color: '#3b4b9e',
      time: "Aujourd'hui à 9:32 AM",
      content: 'Tout le monde en ligne aujourd’hui ?',
    },
  ],
  announcement: [
    {
      id: 1,
      author: 'Michel-Harimbola',
      initials: 'MH',
      color: '#f13544',
      time: "Aujourd'hui à 3:26 PM",
      content: 'Réunion générale ce soir à 20h.',
    },
  ],
}
