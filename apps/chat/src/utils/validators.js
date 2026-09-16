/**
 * Règles de validation et helpers d'erreur, partagés entre les formulaires d'auth.
 */

export function validateSignupPassword(password, confirmPassword) {
  if (password.length < 8) {
    return 'Le mot de passe doit contenir au moins 8 caractères.'
  }
  if (password !== confirmPassword) {
    return 'Les mots de passe ne correspondent pas.'
  }
  return null
}

/** Normalise les erreurs renvoyées par l'API (class-validator renvoie un tableau) */
export function extractErrorMessage(err, fallback) {
  const message = err.response?.data?.message
  return Array.isArray(message) ? message[0] : message || fallback
}