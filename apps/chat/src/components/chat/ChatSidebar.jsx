import ConversationItem from './ConversationItem'

/**
 * ChatSidebar
 * Liste des conversations / contacts.
 */
export default function ChatSidebar() {
  return (
    <aside className="w-80 border-r border-gray-200 flex flex-col bg-white">
      {/* TODO: barre de recherche */}
      <ul className="flex-1 overflow-y-auto">
        {/* TODO: map des conversations -> <ConversationItem /> */}
      </ul>
    </aside>
  )
}
