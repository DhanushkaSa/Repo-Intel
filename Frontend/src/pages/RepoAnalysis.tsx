import React, { useState } from 'react'
import { analyzeRepo } from '../services/api'
import Button from '../components/Button'
import ProgressSteps from '../components/ProgressSteps'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Zap, ArrowRight } from 'lucide-react'

export default function RepoAnalysis() {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isFocused, setIsFocused] = useState(false)
    const nav = useNavigate()

    const start = async () => {
        if (!url.trim()) return
        setLoading(true); setProgress(10)
        await new Promise(r => setTimeout(r, 700)); setProgress(30)
        await analyzeRepo({ url })
        setProgress(100)
        setTimeout(() => { setLoading(false); nav('/results') }, 600)
    }

    return (
        <div className="container py-16 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Analyze Repository</h2>
                    <p className="text-gray-500">Enter a GitHub repository URL to get started</p>
                </div>

                <div className="glass-card p-8 rounded-2xl space-y-6">
                    <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.01]' : 'scale-100'}`}>
                        <Github className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-white' : 'text-gray-600'}`} />
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && start()}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="https://github.com/user/project"
                            className={`w-full bg-white/[0.03] border px-4 pl-12 py-4 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${isFocused ? 'border-white/30 bg-white/[0.06] shadow-[0_0_30px_rgba(255,255,255,0.08)]' : 'border-white/[0.08]'}`}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button onClick={start} disabled={loading || !url.trim()} className="gap-2">
                            <Zap className="w-4 h-4" />
                            <span>{loading ? 'Analyzing...' : 'Start Analysis'}</span>
                        </Button>
                        {loading && (
                            <Button variant="ghost" onClick={() => { setLoading(false); setProgress(0) }}>
                                Cancel
                            </Button>
                        )}
                    </div>

                    {loading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 pt-6 border-t border-white/[0.06]"
                        >
                            <ProgressSteps value={progress} />
                        </motion.div>
                    )}
                </div>

                {!loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 grid grid-cols-3 gap-4"
                    >
                        {[
                            { label: 'Public Repos', desc: 'Free analysis' },
                            { label: 'AI Powered', desc: 'Deep insights' },
                            { label: 'Fast Results', desc: 'Under 3 seconds' },
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-4 rounded-xl text-center hover-glow transition-all duration-300">
                                <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                                <div className="text-xs text-gray-600">{item.desc}</div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}
