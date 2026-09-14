import { Users, UserCheck, MessageSquare, Hash } from 'lucide-react'

/**
 * dashboardStats
 * Données de démonstration pour les cartes de statistiques du dashboard.
 * NB: en dur pour l'instant — à remplacer par le flux réel (API).
 */
export const dashboardStats = [
  {
    id: 'total-users',
    label: 'Utilisateurs totaux',
    value: '1 284',
    icon: Users,
    trend: 8.2,
    trendLabel: 'vs mois dernier',
  },
  {
    id: 'active-users',
    label: 'Utilisateurs actifs (24h)',
    value: '342',
    icon: UserCheck,
    trend: 3.1,
    trendLabel: 'vs hier',
  },
  {
    id: 'messages-today',
    label: "Messages envoyés (24h)",
    value: '9 741',
    icon: MessageSquare,
    trend: -2.4,
    trendLabel: 'vs hier',
  },
  {
    id: 'active-channels',
    label: 'Canaux actifs',
    value: '46',
    icon: Hash,
    trend: 0,
    trendLabel: 'stable',
  },
]