/**
 * classNames
 * Petit utilitaire pour combiner des classes Tailwind conditionnelles.
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
