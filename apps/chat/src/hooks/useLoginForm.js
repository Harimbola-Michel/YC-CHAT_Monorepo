import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { extractErrorMessage } from '../utils/validators'

/**
 * Toute la logique de la page de connexion : état du formulaire
 * et délégation de l'appel à useAuth().login().
 */
export function useLoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(form)
      navigate('/chat')
    } catch (err) {
      setError(extractErrorMessage(err, 'Identifiants invalides.'))
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    showPassword,
    error,
    loading,
    handleChange,
    toggleShowPassword,
    handleSubmit,
  }
}