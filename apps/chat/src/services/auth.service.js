import api from './api.service'

/**
 * Appelle POST /auth/register.
 * Le backend attend { username, email, displayName, password }.
 */
export async function registerUser({ email, username, displayName, password }) {
  const { data } = await api.post('/auth/register', {
    email,
    username,
    displayName: displayName || username,
    password,
  })
  return data // { accessToken, user }
}

export async function loginUser({ email, password }) {
  const { data } = await api.post('/auth/login', { email, password })
  return data
}

export function saveSession({ accessToken, user }) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  const raw = localStorage.getItem('user')
  return raw ? JSON.parse(raw) : null
}

/** Fusionne les champs mis à jour (ex: username/email) dans la session stockée */
export function updateStoredUser(patch) {
  const current = getCurrentUser()
  const updated = { ...current, ...patch }
  localStorage.setItem('user', JSON.stringify(updated))
  return updated
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem('accessToken'))
}

export function logout() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('user')
}