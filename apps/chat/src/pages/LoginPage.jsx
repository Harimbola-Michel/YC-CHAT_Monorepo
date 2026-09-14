import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Button from '../components/ui/Button'

/**
 * LoginPage
 * Plein écran sur mobile, carte centrée sur desktop/tablette.
 * Palette : gris / blanc / noir, avec fuchsia (#f13544) en accent.
 */
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

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
            Welcome back
          </h1>
          <p className="text-xl font-semibold text-black leading-snug">
            Continue your journey
          </p>
        </div>

        {/* Formulaire */}
        <form className="space-y-4">
          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <Mail className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
          </label>

          <label className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3.5">
            <Lock className="w-5 h-5 text-gray-500 shrink-0" strokeWidth={1.75} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="bg-transparent outline-none w-full text-black placeholder:text-gray-400 text-[15px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
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

          <div className="text-right">
            <a href="#" className="text-sm text-[#f13544] underline underline-offset-2">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="!w-full !rounded-full !py-3.5 !bg-[#f13544] hover:!bg-[#d81f2e] !text-base"
          >
            Sign in
          </Button>
        </form>

        {/* Lien vers inscription */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-[#f13544] underline underline-offset-2 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
