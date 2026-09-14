/**
 * users
 * Données de démonstration pour la page Utilisateurs.
 * NB: en dur pour l'instant — à remplacer par le flux réel (API).
 */
export const initialUsers = [
  {
    id: 1,
    name: 'Michel-Harimbola',
    initials: 'MH',
    color: '#f13544',
    email: 'michel.harimbola@gmail.com',
    role: 'admin',
    status: 'active',
    joinedAt: '12 jan. 2026',
    messages: 1204,
  },
  {
    id: 2,
    name: 'Amélia',
    initials: 'AM',
    color: '#3b4b9e',
    email: 'amelia@gmail.com',
    role: 'moderator',
    status: 'active',
    joinedAt: '3 fév. 2026',
    messages: 842,
  },
  {
    id: 3,
    name: 'Jabihy',
    initials: 'JB',
    color: '#3b4b9e',
    email: 'jabihy@gmail.com',
    role: 'member',
    status: 'active',
    joinedAt: '18 fév. 2026',
    messages: 331,
  },
  {
    id: 4,
    name: 'Erica Sarobidy',
    initials: 'ES',
    color: '#5b6280',
    email: 'erica.sarobidy@gmail.com',
    role: 'member',
    status: 'suspended',
    joinedAt: '2 mar. 2026',
    messages: 198,
  },
  {
    id: 5,
    name: 'Liantsoa Jenny',
    initials: 'LJ',
    color: '#5b6280',
    email: 'liantsoa.jenny@gmail.com',
    role: 'member',
    status: 'active',
    joinedAt: '9 mar. 2026',
    messages: 76,
  },
  {
    id: 6,
    name: 'Mioratiana',
    initials: 'MI',
    color: '#5b6280',
    email: 'mioratiana@gmail.com',
    role: 'member',
    status: 'banned',
    joinedAt: '20 mar. 2026',
    messages: 12,
  },
  {
    id: 7,
    name: 'PAPEO Miantsa',
    initials: 'PM',
    color: '#3b4b9e',
    email: 'papeo.miantsa@gmail.com',
    role: 'moderator',
    status: 'active',
    joinedAt: '30 mar. 2026',
    messages: 567,
  },
]

export const ROLE_LABELS = {
  admin: 'Admin',
  moderator: 'Modérateur',
  member: 'Membre',
}

export const STATUS_LABELS = {
  active: 'Actif',
  suspended: 'Suspendu',
  banned: 'Banni',
}