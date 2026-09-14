import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import ChartTooltip from './ChartTooltip'
import { topChannels } from '../../constants/charts'

const BAR_COLORS = ['#f13544', '#d81f2e', '#b91825', '#9c141f', '#7f0f18']

/**
 * TopChannelsChart
 * Classement des canaux les plus actifs (nombre de messages).
 */
export default function TopChannelsChart() {
  return (
    <div className="bg-[#081246] rounded-xl p-5 w-full xl:w-[380px] shrink-0">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm">Canaux les plus actifs</h3>
        <p className="text-[#b6bedd] text-xs">Messages (14 derniers jours)</p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={topChannels}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: '#eef0fa', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={110}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
          <Bar dataKey="messages" radius={[0, 6, 6, 0]} barSize={16}>
            {topChannels.map((entry, index) => (
              <Cell key={entry.name} fill={BAR_COLORS[index % BAR_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}