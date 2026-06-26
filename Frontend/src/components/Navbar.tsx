import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Network, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { to: '/analyze', label: 'Analyze' },
    { to: '/chat', label: 'Chat' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' }
]

export default function Navbar() {
    const loc = useLocation()
    const isActive = (path: string) => loc.pathname === path
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/70 border-b border-white/[0.06]">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:scale-110">
                        <Network className="w-5 h-5 text-black" />
                    </div>
                    <div>
                        <div className="font-bold text-lg text-white mt-3">REPO INTEL</div>
                        <div className="text-[10px] text-gray-500 tracking-wider uppercase mb-3">AI Repository Intelligence</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onMouseEnter={() => setHoveredNav(to)}
                            onMouseLeave={() => setHoveredNav(null)}
                            className={`text-sm font-medium transition-all duration-300 relative py-1 ${isActive(to) ? 'text-white' : hoveredNav === to ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                        >
                            {label}
                            {(isActive(to) || hoveredNav === to) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-white rounded-full"
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        to="/analyze"
                        className="ml-4 px-6 py-2 rounded-lg font-semibold bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 text-sm"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-3">
                            {navLinks.map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${isActive(to) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link
                                to="/analyze"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 px-6 py-2.5 rounded-lg font-semibold bg-white text-black text-center text-sm"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
