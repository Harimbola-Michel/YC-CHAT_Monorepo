/**
 * TypingIndicator
 * Indique qu'un ou plusieurs utilisateurs sont en train d'écrire.
 * NB: masqué par défaut (pas d'état réel branché) ; affiché ici à titre d'exemple visuel.
 */
export default function TypingIndicator({ text }) {
  if (!text) return <div className="h-5 shrink-0" />

  return (
    <div className="h-5 shrink-0 px-4 text-xs text-[#b6bedd] italic">
      {text}
    </div>
  )
}
