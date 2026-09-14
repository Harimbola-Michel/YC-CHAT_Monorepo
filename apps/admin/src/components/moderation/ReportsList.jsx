import { Flag, MessageSquare, User, Check, X } from 'lucide-react'
import ReportStatusBadge from './ReportStatusBadge'

/**
 * ReportsList
 * Liste des signalements avec actions (résoudre / rejeter).
 */
export default function ReportsList({ reports, onResolve, onDismiss }) {
  if (reports.length === 0) {
    return (
      <div className="bg-[#081246] rounded-xl py-16 flex items-center justify-center">
        <p className="text-[#b6bedd] text-sm">Aucun signalement pour l'instant.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {reports.map((report) => {
        const TargetIcon = report.targetType === 'message' ? MessageSquare : User
        return (
          <div key={report.id} className="bg-[#081246] rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                  style={{ backgroundColor: report.reporterColor }}
                >
                  {report.reporterInitials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#eef0fa]">
                    <span className="font-semibold text-white">{report.reporterName}</span> a signalé{' '}
                    <TargetIcon className="w-3.5 h-3.5 inline-block mx-0.5 text-[#b6bedd]" strokeWidth={1.75} />
                    <span className="font-semibold text-white">{report.targetUser}</span>
                    {report.channel && (
                      <span className="text-[#b6bedd]"> dans #{report.channel}</span>
                    )}
                  </p>
                  <p className="text-[#b6bedd] text-sm mt-1 italic">"{report.excerpt}"</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs text-[#f13544]">
                      <Flag className="w-3 h-3" strokeWidth={2} />
                      {report.reason}
                    </span>
                    <span className="text-[#b6bedd] text-xs">· {report.createdAt}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <ReportStatusBadge status={report.status} />
                {report.status === 'pending' && (
                  <div className="flex items-center gap-1 ml-1">
                    <button
                      onClick={() => onResolve(report.id)}
                      title="Marquer comme résolu"
                      className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-[#23a55a]/15 hover:text-[#23a55a] transition-colors"
                    >
                      <Check className="w-4 h-4" strokeWidth={2} />
                    </button>
                    <button
                      onClick={() => onDismiss(report.id)}
                      title="Rejeter"
                      className="w-8 h-8 flex items-center justify-center rounded-md text-[#b6bedd] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}