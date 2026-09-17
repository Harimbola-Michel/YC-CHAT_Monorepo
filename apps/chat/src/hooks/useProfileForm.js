import { useState } from 'react'
import { useAuth } from './useAuth'
import { extractErrorMessage } from '../utils/validators'

/**
 * Logique du formulaire "Mon compte" : username + email édités et
 * sauvegardés ensemble, en un seul appel à useAuth().updateProfile().
 * Le mot de passe n'est PAS géré ici — il reste un flux séparé.
 */
export function useProfileForm() {
  const { user, updateProfile } = useAuth()

  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    username: user?.username ?? '',
    email: user?.email ?? '',
  })
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function startEditing() {
    setForm({ username: user?.username ?? '', email: user?.email ?? '' })
    setError(null)
    setEditing(true)
  }

  function cancelEditing() {
    setEditing(false)
    setError(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      await updateProfile(form)
      setEditing(false)
    } catch (err) {
      setError(extractErrorMessage(err, 'Impossible de mettre à jour le profil.'))
    } finally {
      setSaving(false)
    }
  }

  return {
    editing,
    form,
    error,
    saving,
    handleChange,
    startEditing,
    cancelEditing,
    handleSubmit,
  }
}