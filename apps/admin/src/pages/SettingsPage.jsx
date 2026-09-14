import { useState } from 'react'
import SettingsTabs from '../components/settings/SettingsTabs'
import GeneralSettings from '../components/settings/GeneralSettings'
import RolesPermissions from '../components/settings/RolesPermissions'
import ModerationDefaults from '../components/settings/ModerationDefaults'

/**
 * SettingsPage
 * Paramètres admin : configuration générale, rôles & permissions, modération.
 */
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="p-6">
      <SettingsTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'general' && <GeneralSettings />}
      {activeTab === 'roles' && <RolesPermissions />}
      {activeTab === 'moderation' && <ModerationDefaults />}
    </div>
  )
}