import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ChevronRight } from 'lucide-react'

/**
 * AccountSection
 * Regroupe Account Info / Password & Security / Account Standing / Family Center
 * sur une seule page défilante, avec ancrage vers la sous-section demandée.
 */
export default function AccountSection({ scrollToId }) {
  const [emailRevealed, setEmailRevealed] = useState(false)
  const [notice, setNotice] = useState('')
  const refs = {
    'account-info': useRef(null),
    'password-security': useRef(null),
    'account-standing': useRef(null),
    'family-center': useRef(null),
  }

  useEffect(() => {
    if (scrollToId && refs[scrollToId]?.current) {
      refs[scrollToId].current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToId])

  const showNotice = (text) => {
    setNotice(text)
    setTimeout(() => setNotice(''), 2500)
  }

  return (
    <div className="max-w-2xl">
      {notice && (
        <div className="mb-4 px-3 py-2 rounded-md bg-[#10184f] text-[#eef0fa] text-sm">
          {notice}
        </div>
      )}

      {/* Account Info */}
      <section ref={refs['account-info']} className="scroll-mt-4">
        <h2 className="text-white text-xl font-semibold mb-4">Account Info</h2>

        <div className="bg-[#0d1550] rounded-lg p-4 mb-3 flex items-center justify-between">
          <div>
            <p className="text-[#b6bedd] text-xs uppercase font-semibold mb-1">Username</p>
            <p className="text-[#eef0fa] text-[15px]">michelharimbola</p>
          </div>
          <button
            onClick={() => showNotice('Édition du nom d’utilisateur — non disponible dans cette démo.')}
            className="px-4 py-1.5 rounded-md bg-[#1a2470] text-white text-sm hover:bg-[#232f8a] transition-colors"
          >
            Edit
          </button>
        </div>

        <div className="bg-[#0d1550] rounded-lg p-4 mb-3 flex items-center justify-between">
          <div>
            <p className="text-[#b6bedd] text-xs uppercase font-semibold mb-1">Email</p>
            <p className="text-[#eef0fa] text-[15px]">
              {emailRevealed ? 'michel.harimbola@example.com' : '••••••••••••••••••••@gmail.com'}{' '}
              <button
                onClick={() => setEmailRevealed((prev) => !prev)}
                className="text-[#f13544] hover:underline"
              >
                {emailRevealed ? 'Hide' : 'Reveal'}
              </button>
            </p>
          </div>
          <button
            onClick={() => showNotice('Édition de l’e-mail — non disponible dans cette démo.')}
            className="px-4 py-1.5 rounded-md bg-[#1a2470] text-white text-sm hover:bg-[#232f8a] transition-colors"
          >
            Edit
          </button>
        </div>

        <div className="bg-[#0d1550] rounded-lg p-4 mb-6 flex items-center justify-between">
          <div>
            <p className="text-[#b6bedd] text-xs uppercase font-semibold mb-1">Phone Number</p>
            <p className="text-[#b6bedd] text-[15px]">You haven't added a phone number yet.</p>
          </div>
          <button
            onClick={() => showNotice('Ajout de numéro — non disponible dans cette démo.')}
            className="px-4 py-1.5 rounded-md bg-[#1a2470] text-white text-sm hover:bg-[#232f8a] transition-colors"
          >
            Add
          </button>
        </div>
      </section>

      {/* Password & Security */}
      <section ref={refs['password-security']} className="scroll-mt-4">
        <h2 className="text-white text-xl font-semibold mb-4">Password & Security</h2>

        <div className="bg-[#0d1550] rounded-lg p-4 mb-3 flex items-center justify-between">
          <p className="text-[#eef0fa] text-[15px]">Password</p>
          <button
            onClick={() => showNotice('Changement de mot de passe — non disponible dans cette démo.')}
            className="px-4 py-1.5 rounded-md bg-[#1a2470] text-white text-sm hover:bg-[#232f8a] transition-colors"
          >
            Edit
          </button>
        </div>

        <button
          onClick={() => showNotice('Configuration MFA — non disponible dans cette démo.')}
          className="w-full bg-[#0d1550] rounded-lg p-4 mb-3 flex items-center justify-between hover:bg-[#10184f] transition-colors"
        >
          <p className="text-[#eef0fa] text-[15px]">Multi-Factor Authentication</p>
          <span className="flex items-center gap-1 text-[#b6bedd] text-sm">
            Set up <ChevronRight className="w-4 h-4" />
          </span>
        </button>

        <button
          onClick={() => showNotice('3 appareils connectés — détail non disponible dans cette démo.')}
          className="w-full bg-[#0d1550] rounded-lg p-4 mb-6 flex items-center justify-between hover:bg-[#10184f] transition-colors"
        >
          <p className="text-[#eef0fa] text-[15px]">Logged-in Devices</p>
          <span className="flex items-center gap-1 text-[#b6bedd] text-sm">
            3 devices <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </section>

      {/* Account Standing */}
      <section ref={refs['account-standing']} className="scroll-mt-4">
        <h2 className="text-white text-xl font-semibold mb-4">Account Standing</h2>
        <button
          onClick={() => showNotice('Aucune violation à afficher.')}
          className="w-full bg-[#0d1550] rounded-lg p-4 mb-6 flex items-start gap-3 hover:bg-[#10184f] transition-colors text-left"
        >
          <CheckCircle2 className="w-6 h-6 text-[#23a55a] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-[#eef0fa] text-[15px] font-medium">All good!</p>
            <p className="text-[#b6bedd] text-sm mt-0.5">
              Merci de respecter les règles de la communauté. En cas de violation, elle apparaîtra ici.
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#b6bedd] shrink-0 mt-1" />
        </button>
      </section>

      {/* Family Center */}
      <section ref={refs['family-center']} className="scroll-mt-4">
        <h2 className="text-white text-xl font-semibold mb-4">Family Center</h2>
        <button
          onClick={() => showNotice('Family Center — non disponible dans cette démo.')}
          className="w-full bg-[#0d1550] rounded-lg p-4 mb-6 flex items-center justify-between hover:bg-[#10184f] transition-colors text-left"
        >
          <div>
            <p className="text-[#eef0fa] text-[15px] font-medium">Set up Family Center</p>
            <p className="text-[#b6bedd] text-sm mt-0.5 max-w-md">
              Restez informé de l'expérience de votre ado. Consultez son activité et gérez les paramètres de sécurité.
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#b6bedd] shrink-0" />
        </button>

        <div className="flex items-center justify-between bg-[#0d1550] rounded-lg p-4 mb-3">
          <div>
            <p className="text-[#eef0fa] text-[15px] font-medium">Disable your account</p>
            <p className="text-[#b6bedd] text-sm">Temporarily disable your account.</p>
          </div>
          <button
            onClick={() => showNotice('Compte non désactivé — action désactivée dans cette démo.')}
            className="px-4 py-1.5 rounded-md border border-[#f13544] text-[#f13544] text-sm hover:bg-[#f13544] hover:text-white transition-colors"
          >
            Disable Account
          </button>
        </div>

        <div className="flex items-center justify-between bg-[#0d1550] rounded-lg p-4 mb-8">
          <div>
            <p className="text-[#eef0fa] text-[15px] font-medium">Close your account</p>
            <p className="text-[#b6bedd] text-sm">Permanently close your account.</p>
          </div>
          <button
            onClick={() => showNotice('Compte non supprimé — action désactivée dans cette démo.')}
            className="px-4 py-1.5 rounded-md bg-[#f13544] text-white text-sm hover:bg-[#d81f2e] transition-colors"
          >
            Delete Account
          </button>
        </div>
      </section>
    </div>
  )
}
