/**
 * ActiveNowPanel
 * Colonne de droite listant les amis actuellement actifs (vocal, activité...).
 * Masquée en dessous de lg pour ne pas surcharger les petits écrans.
 */
export default function ActiveNowPanel() {
  return (
    <aside className="w-60 shrink-0 h-full bg-[#00061f] p-4 hidden lg:block">
      <h2 className="text-white font-semibold mb-4">Actif maintenant</h2>
      <div className="bg-[#081246] rounded-lg p-4">
        <p className="text-white text-sm font-semibold mb-1.5">C'est calme pour l'instant...</p>
        <p className="text-[#b6bedd] text-xs leading-relaxed">
          Quand un ami démarre une activité — comme une conversation vocale — on te le montrera ici.
        </p>
      </div>
    </aside>
  )
}