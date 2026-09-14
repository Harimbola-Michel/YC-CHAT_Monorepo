/**
 * adminSettings
 * Données de démonstration pour la page Paramètres admin.
 * NB: en dur pour l'instant — à remplacer par le flux réel (API).
 */
export const roles = [
  { id: 'admin', label: 'Admin' },
  { id: 'moderator', label: 'Modérateur' },
  { id: 'member', label: 'Membre' },
]

export const permissions = [
  { id: 'manageChannels', label: 'Gérer les canaux' },
  { id: 'manageMembers', label: 'Gérer les membres' },
  { id: 'banSuspend', label: 'Bannir / suspendre' },
  { id: 'deleteMessages', label: 'Supprimer des messages' },
  { id: 'viewAuditLog', label: "Voir le journal d'audit" },
  { id: 'manageRoles', label: 'Gérer les rôles' },
]

/** Matrice permission x rôle. L'admin a toujours tout (verrouillé). */
export const initialPermissionMatrix = {
  manageChannels: { admin: true, moderator: true, member: false },
  manageMembers: { admin: true, moderator: true, member: false },
  banSuspend: { admin: true, moderator: true, member: false },
  deleteMessages: { admin: true, moderator: true, member: false },
  viewAuditLog: { admin: true, moderator: false, member: false },
  manageRoles: { admin: true, moderator: false, member: false },
}