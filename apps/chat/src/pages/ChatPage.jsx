import { useState } from 'react'
import ServerRail from '../components/layout/ServerRail'
import ChannelSidebar from '../components/chat/ChannelSidebar'
import ChatWindow from '../components/chat/ChatWindow'
import MemberList from '../components/chat/MemberList'
import { allChannels, defaultMessages } from '../constants/channels'

/**
 * ChatPage
 * Page principale : rail des serveurs + sidebar des canaux + fenêtre de chat + membres.
 * Layout plein écran façon Discord (pas de navbar globale).
 * NB: état 100% local (pas de backend) — canal actif, messages par canal, visibilité des membres.
 */
export default function ChatPage() {
  const [activeChannelId, setActiveChannelId] = useState('team-leaders')
  const [showMembers, setShowMembers] = useState(true)
  const [messagesByChannel, setMessagesByChannel] = useState(defaultMessages)
  // Navigation mobile : un seul panneau visible à la fois en dessous de sm (640px).
  // 'sidebar' = rail + liste des canaux ; 'chat' = fenêtre de conversation.
  const [mobileView, setMobileView] = useState('sidebar')

  const activeChannel =
    allChannels.find((c) => c.id === activeChannelId) ?? allChannels[0]
  const currentMessages = messagesByChannel[activeChannelId] ?? []

  const handleSelectChannel = (channelId) => {
    setActiveChannelId(channelId)
    setMobileView('chat') // sur mobile, ouvrir directement la conversation
  }

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      author: 'Michel-Harimbola',
      initials: 'MH',
      color: '#f13544',
      time: "Aujourd'hui",
      content: text,
    }
    setMessagesByChannel((prev) => ({
      ...prev,
      [activeChannelId]: [...(prev[activeChannelId] ?? []), newMessage],
    }))
  }

  return (
    <div className="h-screen w-full flex overflow-hidden">
      <div className={`${mobileView === 'chat' ? 'hidden' : 'flex'} sm:flex shrink-0`}>
        <ServerRail />
      </div>
      <ChannelSidebar
        activeChannelId={activeChannelId}
        onSelectChannel={handleSelectChannel}
        className={mobileView === 'chat' ? 'hidden sm:flex' : 'flex'}
      />
      <ChatWindow
        channel={activeChannel}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
        showMembers={showMembers}
        onToggleMembers={() => setShowMembers((prev) => !prev)}
        onBack={() => setMobileView('sidebar')}
        className={mobileView === 'sidebar' ? 'hidden sm:flex' : 'flex'}
      />
      {showMembers && <MemberList />}
    </div>
  )
}