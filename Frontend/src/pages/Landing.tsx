import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import NetworkAnimation from '../components/NetworkAnimation'
import { Zap, Code, BarChart3, MessageSquare, Shield, FileText, ArrowRight, Github, Sparkles, Cpu, GitBranch, Users, BookOpen, ChevronRight, Star } from 'lucide-react'

const features = [
    { icon: Code, label: 'Project Summary', desc: 'Comprehensive analysis of your repository structure, patterns, and design decisions.' },
    { icon: BarChart3, label: 'Technology Detection', desc: 'Identify all frameworks, libraries, and dependencies used throughout the project.' },
    { icon: GitBranch, label: 'Architecture Analysis', desc: 'Visualize system design, data flows, and architectural patterns at a glance.' },
    { icon: MessageSquare, label: 'AI Chat', desc: 'Ask natural language questions about the codebase and get instant answers.' },
    { icon: Shield, label: 'Security Insights', desc: 'Identify potential vulnerabilities, outdated dependencies, and security risks.' },
    { icon: FileText, label: 'Auto Documentation', desc: 'Generate professional, comprehensive documentation automatically.' }
]

const stats = [
    { value: '50K+', label: 'Repos Analyzed' },
    { value: '12K+', label: 'Developers' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<3s', label: 'Avg Speed' },
]

const steps = [
    { num: '01', title: 'Paste URL', desc: 'Enter any public GitHub repository link to get started.' },
    { num: '02', title: 'AI Analysis', desc: 'Our AI engine scans every file, dependency, and pattern.' },
    { num: '03', title: 'Get Insights', desc: 'Receive a comprehensive intelligence report in seconds.' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Landing() {
    const nav = useNavigate()
    const [repoUrl, setRepoUrl] = React.useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleAnalyze = () => {
        if (repoUrl.trim()) {
            nav('/analyze')
        }
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-24 md:py-36 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 dot-grid opacity-40"></div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl"></div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-xs text-gray-400 group-hover:text-gray-200 font-medium tracking-wide uppercase transition-colors">Powered by Advanced AI</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
                                Understand Any
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GitHub Repo</span>
                                <span className="block text-gray-600 text-4xl md:text-5xl mt-1">in Seconds</span>
                            </h1>

                            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
                                Paste any public GitHub repository link and instantly get comprehensive insights — architecture, tech stack, security, and AI-powered recommendations.
                            </p>

                            {/* Interactive Search Input */}
                            <div className="flex gap-3 mb-6">
                                <div className={`flex-1 relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
                                    <Github className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-white' : 'text-gray-600'}`} />
                                    <input
                                        placeholder="https://github.com/user/repo"
                                        value={repoUrl}
                                        onChange={(e) => setRepoUrl(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        className={`w-full bg-white/[0.03] border px-4 pl-12 py-4 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${isFocused ? 'border-white/30 bg-white/[0.06] shadow-[0_0_30px_rgba(255,255,255,0.08)]' : 'border-white/[0.08]'}`}
                                    />
                                </div>
                                <Button size="lg" onClick={handleAnalyze} className="gap-2 rounded-xl">
                                    <div className="flex flex-row items-center gap-1">
                                        <span>Analyze</span>
                                        <ArrowRight className="w-4 h-3" />
                                    </div>

                                </Button>
                            </div>

                            <p className="text-xs text-gray-600">✓ Free for public repos • No sign-up required • Results in seconds</p>
                        </div>

                        {/* Right side 3D showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden md:block"
                        >
                            <NetworkAnimation />
                            {/* Floating accent */}
                            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl animate-float pointer-events-none"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-white/[0.04]">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 md:py-32 relative">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">How It Works</h2>
                        <p className="text-gray-600 text-lg">Three simple steps to full repository intelligence</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative glass-card p-8 rounded-2xl hover-glow transition-all duration-300 group text-left"
                            >
                                <div className="text-5xl font-black text-white/[0.05] absolute top-4 right-6 group-hover:text-white/[0.1] transition-colors">{step.num}</div>
                                <div className="relative z-10">
                                    <div className="text-lg font-semibold text-white mb-3">{step.title}</div>
                                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 md:py-32 relative">
                <div className="absolute inset-0 dot-grid opacity-20"></div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">Powerful Features</h2>
                        <p className="text-lg text-gray-600">Everything you need to understand any codebase</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={feature.label}
                                    variants={itemVariants}
                                    className="group p-7 rounded-2xl glass-card hover-glow transition-all duration-300 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white group-hover:border-white transition-all duration-300">
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{feature.label}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 relative">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 dot-grid opacity-30"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Explore?</h2>
                            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">Start analyzing repositories for free. No sign-up required.</p>
                            <Button size="lg" onClick={() => nav('/analyze')} className="rounded-xl gap-2 mx-auto text-base px-10 py-4">
                                <span>Get Started Free</span>
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
