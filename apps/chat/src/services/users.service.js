import api from './api.service'

/**
 * Met à jour username et/ou email en un seul appel — un seul bouton
 * côté UI, un seul PATCH côté API.
 */
export async function updateProfile({ username, email }) {
  const { data } = await api.patch('/users/me', { username, email })
  return data
}

/**
 * Change le mot de passe — flux séparé de updateProfile,
 * nécessite l'ancien mot de passe côté backend.
 */
export async function changePassword({ currentPassword, newPassword }) {
  const { data } = await api.patch('/users/me/password', { currentPassword, newPassword })
  return data
}