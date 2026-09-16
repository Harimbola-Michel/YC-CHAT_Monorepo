import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { validateSignupPassword, extractErrorMessage } from '../utils/validators'

/**
 * Toute la logique de la page d'inscription : état du formulaire,
 * validation, et délégation de l'appel à useAuth().register().
 * La page ne fait que consommer ce hook et afficher le JSX.
 */
export function useSignupForm() {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword((prev) => !prev)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    const validationError = validateSignupPassword(form.password, form.confirmPassword)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      await register({
        email: form.email,
        username: form.username,
        password: form.password,
      })
      navigate('/chat')
    } catch (err) {
      setError(extractErrorMessage(err, 'Une erreur est survenue.'))
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    showPassword,
    showConfirmPassword,
    error,
    loading,
    handleChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSubmit,
  }
}