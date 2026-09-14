import { classNames } from './classNames'

/**
 * Button
 * Bouton générique partagé entre les apps (chat, admin, ...).
 */
export default function Button({ children, className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-[#f13544] hover:bg-[#d81f2e] text-white',
    ghost: 'bg-white/10 hover:bg-white/20 text-white',
    danger: 'bg-transparent hover:bg-[#f13544] text-[#f13544] hover:text-white',
  }

  return (
    <button
      className={classNames(
        'px-4 py-2 rounded-lg font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
