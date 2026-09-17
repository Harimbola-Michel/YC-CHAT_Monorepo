import { useState } from 'react'
import { changePassword } from '../services/users.service'
import { validateNewPassword, extractErrorMessage } from '../utils/validators'

/**
 * Logique du formulaire de changement de mot de passe.
 * Séparé de useProfileForm : nécessite l'ancien mot de passe,
 * ne touche pas au contexte auth (pas de champ user affecté).
 */
export function usePasswordForm() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [saving, setSaving] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function toggleShowCurrentPassword() {
    setShowCurrentPassword((prev) => !prev)
  }

  function toggleShowNewPassword() {
    setShowNewPassword((prev) => !prev)
  }

  function toggleShowConfirmNewPassword() {
    setShowConfirmNewPassword((prev) => !prev)
  }

  function startEditing() {
    setForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' })
    setError(null)
    setSuccess(false)
    setEditing(true)
  }

  function cancelEditing() {
    setEditing(false)
    setError(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    const validationError = validateNewPassword(form.newPassword, form.confirmNewPassword)
    if (validationError) {
      setError(validationError)
      return
    }

    setSaving(true)
    try {
      await changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      })
      setEditing(false)
      setSuccess(true)
    } catch (err) {
      setError(extractErrorMessage(err, 'Impossible de changer le mot de passe.'))
    } finally {
      setSaving(false)
    }
  }

  return {
    editing,
    form,
    error,
    success,
    saving,
    showCurrentPassword,
    showNewPassword,
    showConfirmNewPassword,
    handleChange,
    toggleShowCurrentPassword,
    toggleShowNewPassword,
    toggleShowConfirmNewPassword,
    startEditing,
    cancelEditing,
    handleSubmit,
  }
}