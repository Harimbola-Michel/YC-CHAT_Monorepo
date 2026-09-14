import { LayoutDashboard, Users, Hash, ShieldAlert, Settings } from 'lucide-react'

/**
 * navItems
 * Éléments de navigation de la sidebar admin.
 */
export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'users', label: 'Utilisateurs', icon: Users, path: '/users' },
  { id: 'channels', label: 'Canaux', icon: Hash, path: '/channels' },
  { id: 'moderation', label: 'Modération', icon: ShieldAlert, path: '/moderation' },
  { id: 'settings', label: 'Paramètres', icon: Settings, path: '/settings' },
]