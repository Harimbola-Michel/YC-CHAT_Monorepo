/**
 * Badge
 * Petit indicateur (ex: nombre de messages non lus).
 */
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 rounded-full bg-indigo-600 text-white text-xs">
      {children}
    </span>
  )
}
