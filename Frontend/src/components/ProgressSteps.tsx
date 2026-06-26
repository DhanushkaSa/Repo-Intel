import React from 'react'
import { Check } from 'lucide-react'

export default function ProgressSteps({ value }: { value: number }) {
    const steps = ['Connecting', 'Downloading', 'Scanning Files', 'Building Context', 'AI Analysis', 'Generating Report']
    const current = Math.min(Math.floor((value / 100) * steps.length), steps.length - 1)

    return (
        <div className="space-y-5">
            {/* Progress Bar */}
            <div>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white">Overall Progress</span>
                    <span className="text-sm font-bold text-white">{Math.round(value)}%</span>
                </div>
                <div className="w-full bg-white/[0.06] rounded-full h-2 overflow-hidden border border-white/[0.04]">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        style={{ width: `${value}%` }}
                    />
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-2.5">
                {steps.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${i < current
                                ? 'bg-white text-black'
                                : i === current
                                    ? 'bg-white/20 border border-white/50 text-white animate-pulse'
                                    : 'bg-white/[0.04] border border-white/[0.08] text-gray-600'
                            }`}>
                            {i < current ? <Check className="w-3 h-3" /> : i + 1}
                        </div>
                        <span className={`text-sm transition-colors duration-300 ${i < current
                            ? 'text-white font-medium'
                            : i === current
                                ? 'text-gray-300 font-medium'
                                : 'text-gray-600'
                            }`}>{s}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
