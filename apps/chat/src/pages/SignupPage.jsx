import { Link } from 'react-router-dom'
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react'
import Button from '../components/ui/Button'
import { useSignupForm } from '../hooks/useSignupForm'

/**
 * SignupPage
 * Plein écran sur mobile, carte centrée sur desktop/tablette.
 * Palette : gris / blanc / noir, avec fuchsia (#f13544) en accent.
 *
 * Purement présentationnel : toute la logique vit dans useSignupForm.
 */
export default function SignupPage() {
  const {
    form,
    showPassword,
    showConfirmPassword,
    error,
    loading,
    handleChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSubmit,
  } = useSignupForm()

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white sm:bg-gray-100 sm:px-4 sm:py-8">
      <div className="w-full h-full sm:h-auto sm:max-w-md bg-white sm:rounded-[2rem] px-8 py-10 sm:px-10 sm:py-12 sm:shadow-sm flex flex-col justify-center">

        {/* Icône + titre */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src="/YouthComputing.png"
            alt="YouthComputing"
            className="w-14 h-14 object-contain mb-5"
          />
          <h1 className="text-xl font-semibold text-black leading-snug">
            Your journey starts here
          </h1>
          <p className="text-xl font-semibold text-black leading-snug">
            Take the first step
          </p>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-[#f13544]">
            {error}
          </div>
        )}

        {/* Formulaire */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <Mail className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange('email')}
              required
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
          </label>

          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <User className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange('username')}
              required
              minLength={3}
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
          </label>

          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <Lock className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={form.password}
              onChange={handleChange('password')}
              required
              minLength={8}
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="shrink-0 text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Eye className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </label>

          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <Lock className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange('confirmPassword')}
              required
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
            <button
              type="button"
              onClick={toggleShowConfirmPassword}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              className="shrink-0 text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Eye className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </label>

          <Button
            type="submit"
            disabled={loading}
            className="!w-full !rounded-full !py-3.5 !bg-[#f13544] hover:!bg-[#d81f2e] !text-base !mt-8 disabled:opacity-60"
          >
            {loading ? 'Création du compte...' : 'Sign up'}
          </Button>
        </form>

        {/* Lien vers connexion */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-[#f13544] underline underline-offset-2 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}