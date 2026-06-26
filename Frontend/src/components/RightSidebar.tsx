import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Files, Code2, Users } from 'lucide-react'

const data = [{ name: 'TypeScript', value: 60 }, { name: 'JavaScript', value: 30 }, { name: 'Other', value: 10 }]
const COLORS = ['#ffffff', '#888888', '#333333']

export default function RightSidebar() {
    const stats = [
        { icon: Files, label: 'Files', value: '523' },
        { icon: Code2, label: 'Source Files', value: '312' },
        { icon: Files, label: 'Lines', value: '45,231' },
        { icon: Users, label: 'Contributors', value: '12' }
    ]

    return (
        <div className="space-y-6">
            {/* Stats Header */}
            <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Repository Statistics
                </h4>
                <div className="grid grid-cols-2 gap-3">
                    {stats.map(({ icon: Icon, label, value }, idx) => (
                        <div key={idx} className="bg-white/[0.03] border border-white/[0.06] p-4 rounded-lg hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group cursor-default">
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
                                <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">{label}</span>
                            </div>
                            <div className="text-lg font-bold text-white">{value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                <h5 className="font-semibold text-white mb-4">Language Distribution</h5>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" innerRadius={35} outerRadius={65} stroke="#000" strokeWidth={2}>
                                {data.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
                            </Pie>
                            <Tooltip
                                contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex gap-4 mt-4 text-sm">
                    {data.map((item, idx) => (
                        <div key={item.name} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: COLORS[idx] }}></div>
                            <span className="text-gray-500 text-xs">{item.name} {item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
