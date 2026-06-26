import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Target, Users, Zap, Shield, Globe } from 'lucide-react'

const values = [
    { icon: Target, title: 'Our Mission', desc: 'Make every codebase instantly understandable. We believe developers should spend time building, not deciphering legacy code.' },
    { icon: Zap, title: 'Speed First', desc: 'Analysis completes in seconds, not minutes. Our AI pipeline is optimized for real-time developer workflows.' },
    { icon: Shield, title: 'Privacy & Security', desc: 'We only analyze public repositories. No code is stored permanently, and all analysis happens in isolated environments.' },
    { icon: Globe, title: 'Open Source Friendly', desc: 'Built by developers, for developers. We support and contribute to the open source ecosystem.' },
]

const teamStats = [
    { value: '2024', label: 'Founded' },
    { value: '15+', label: 'Team Members' },
    { value: '50K+', label: 'Repos Analyzed' },
    { value: '120+', label: 'Countries Reached' },
]

export default function About() {
    return (
        <div className="container py-16 max-w-5xl mx-auto">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-6">
                    <Cpu className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">About RepoMind AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                    Making Code
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Universally Accessible</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    RepoMind AI uses advanced language models to analyze public repositories and produce comprehensive documentation, architecture diagrams, and actionable improvement suggestions.
                </p>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
                {teamStats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-xl text-center hover-glow transition-all duration-300"
                    >
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Values */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">What Drives Us</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    {values.map((value, i) => {
                        const Icon = value.icon
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white group-hover:border-white transition-all duration-300">
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>

            {/* Team Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-12 text-center"
            >
                <Users className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Built by a Global Team</h2>
                <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                    Our distributed team of engineers, designers, and AI researchers is passionate about making developer tools that feel magical.
                </p>
            </motion.div>
        </div>
    )
}
