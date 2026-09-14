import { classNames } from '../../utils/classNames'

/**
 * Button
 * Bouton générique réutilisable de l'UI.
 */
export default function Button({ children, className, ...props }) {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
