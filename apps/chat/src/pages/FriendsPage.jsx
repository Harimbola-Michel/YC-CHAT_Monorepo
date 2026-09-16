import ServerRail from '../components/layout/ServerRail'
import FriendsSidebar from '../components/friends/FriendsSidebar'
import FriendsList from '../components/friends/FriendsList'
import ActiveNowPanel from '../components/friends/ActiveNowPanel'

/**
 * FriendsPage
 * Page "Amis" / messages privés, ouverte depuis la première icône du rail.
 */
export default function FriendsPage() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <ServerRail />
      <FriendsSidebar className="hidden sm:flex" />
      <div className="flex-1 flex bg-[#00061f] min-w-0">
        <FriendsList />
        <ActiveNowPanel />
      </div>
    </div>
  )
}