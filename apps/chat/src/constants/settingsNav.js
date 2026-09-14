import {
  User,
  ShieldCheck,
  MessageSquare,
  Bell,
  Sparkles,
  Rocket,
  Repeat,
  Gift,
  CreditCard,
  Mic,
  Palette,
  Accessibility,
  Monitor,
} from 'lucide-react'

/**
 * settingsNav
 * Structure de navigation de la modale des paramètres (façon Discord).
 * Les entrées avec `children` sont dépliables ; leurs enfants servent
 * d'ancres de défilement dans la section correspondante.
 */
export const navGroups = [
  {
    title: null,
    items: [
      {
        id: 'account',
        label: 'Account',
        icon: User,
        children: [
          { id: 'account-info', label: 'Account Info' },
          { id: 'password-security', label: 'Password & Security' },
          { id: 'account-standing', label: 'Account Standing' },
          { id: 'family-center', label: 'Family Center' },
        ],
      },
      { id: 'privacy', label: 'Data & Privacy', icon: ShieldCheck },
      { id: 'messaging', label: 'Messaging Permissions', icon: MessageSquare },
      { id: 'notifications', label: 'Notifications', icon: Bell },
    ],
  },
  {
    title: 'Billing',
    items: [
      { id: 'nitro', label: 'Nitro', icon: Sparkles, badge: 'DISCOUNT' },
      { id: 'boost', label: 'Server Boost', icon: Rocket },
      { id: 'subscriptions', label: 'Subscriptions', icon: Repeat },
      { id: 'gifts', label: 'Gift Inventory', icon: Gift },
      { id: 'billing', label: 'Billing', icon: CreditCard },
    ],
  },
  {
    title: 'Experience',
    items: [
      { id: 'voice', label: 'Voice & Video', icon: Mic },
      {
        id: 'appearance',
        label: 'Appearance',
        icon: Palette,
        children: [
          { id: 'theme', label: 'Theme' },
          { id: 'app-icon', label: 'App Icon' },
          { id: 'messages', label: 'Messages' },
          { id: 'chat-box', label: 'Chat Box' },
          { id: 'search', label: 'Search' },
          { id: 'streamer-mode', label: 'Streamer Mode' },
        ],
      },
      { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
      { id: 'system', label: 'System', icon: Monitor },
    ],
  },
]

/** Tous les items de nav à plat (utile pour la recherche). */
export const allNavItems = navGroups.flatMap((group) =>
  group.items.flatMap((item) => [item, ...(item.children ?? [])])
)
