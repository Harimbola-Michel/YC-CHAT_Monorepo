/**
 * MessageItem
 * Une ligne de message : avatar, auteur, heure, contenu.
 */
export default function MessageItem({ author, initials, color, time, content }) {
  return (
    <div className="flex items-start gap-3 px-4 py-1.5 hover:bg-white/5 rounded-md group">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-white font-medium text-[15px]">{author}</span>
          <span className="text-[#b6bedd] text-xs">{time}</span>
        </div>
        <p className="text-[#eef0fa] text-[15px] leading-snug break-words">{content}</p>
      </div>
    </div>
  )
}
