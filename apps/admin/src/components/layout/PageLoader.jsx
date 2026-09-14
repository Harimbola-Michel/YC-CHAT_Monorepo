/**
 * PageLoader
 * Écran de chargement affiché pendant le téléchargement différé (React.lazy)
 * d'une page admin.
 */
export default function PageLoader() {
  return (
    <div className="flex items-center justify-center h-full py-24">
      <div className="w-8 h-8 border-2 border-white/15 border-t-[#f13544] rounded-full animate-spin" />
    </div>
  )
}