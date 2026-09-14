import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ChartTooltip from './ChartTooltip'
import { messagesOverTime } from '../../constants/charts'

/**
 * MessagesActivityChart
 * Évolution du nombre de messages envoyés sur les 14 derniers jours.
 */
export default function MessagesActivityChart() {
  return (
    <div className="bg-[#081246] rounded-xl p-5 flex-1 min-w-0">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm">Activité des messages</h3>
        <p className="text-[#b6bedd] text-xs">14 derniers jours</p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={messagesOverTime} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="messagesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f13544" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f13544" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: '#b6bedd', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
            interval={1}
          />
          <YAxis
            tick={{ fill: '#b6bedd', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={56}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.15)' }} />
          <Area
            type="monotone"
            dataKey="messages"
            stroke="#f13544"
            strokeWidth={2}
            fill="url(#messagesGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}