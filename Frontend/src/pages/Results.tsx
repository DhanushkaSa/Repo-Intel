import React from 'react'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import { motion } from 'framer-motion'

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Results() {
    return (
        <div className="container py-10">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h2 className="text-2xl font-bold text-white">Analysis Results</h2>
                <p className="text-gray-600 text-sm mt-1">Repository intelligence report</p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-6">
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-3"
                >
                    <Sidebar />
                </motion.aside>

                <motion.section
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-6 space-y-5"
                >
                    <motion.div variants={fadeUp} className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <h3 className="font-bold text-white">Project Summary</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">RepoMind produced a concise summary of the repository, its purpose, and architecture. The project follows a modular design with clean separation of concerns.</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <h3 className="font-bold text-white">Architecture</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">The system follows a component-based architecture with clear data flow patterns.</p>
                        <div className="grid grid-cols-3 gap-3">
                            {['Frontend', 'API Layer', 'AI Engine'].map((layer) => (
                                <div key={layer} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                                    <span className="text-xs text-gray-400">{layer}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <h3 className="font-bold text-white">Key Findings</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: 'Code Quality', score: 'A+', desc: 'Well-structured with consistent patterns' },
                                { label: 'Documentation', score: 'B+', desc: 'Good coverage with room for improvement' },
                                { label: 'Security', score: 'A', desc: 'No critical vulnerabilities detected' },
                            ].map((finding) => (
                                <div key={finding.label} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg hover:bg-white/[0.05] transition-colors">
                                    <div>
                                        <div className="text-sm font-medium text-white">{finding.label}</div>
                                        <div className="text-xs text-gray-600">{finding.desc}</div>
                                    </div>
                                    <div className="text-lg font-bold text-white">{finding.score}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>

                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-3"
                >
                    <RightSidebar />
                </motion.aside>
            </div>
        </div>
    )
}
