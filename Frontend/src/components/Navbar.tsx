import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Network, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase';
import { useAuth } from '../context/AuthContext'

const navLinks = [
    { to: '/analyze', label: 'Analyze' },
    { to: '/chat', label: 'Chat' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' }
]

export default function Navbar() {
    const loc = useLocation()
    const navigate = useNavigate()
    const isActive = (path: string) => loc.pathname === path
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const profileRef = useRef<HTMLDivElement | null>(null)

    // FIX 1: Properly destructure user and logout out from context wrapper
    const { user, logout } = useAuth()

    // FIX 2: Derive authentication state directly from your real global hook variable
    const isAuthenticated = !!user

    const handleGetStarted = (e: React.MouseEvent) => {
        e.preventDefault()
        setMobileOpen(false)

        if (isAuthenticated) {
            navigate('/analyze')
        } else {
            handleGoogleSignIn()
        }
    }

    const handleLogout = async () => {
        try {
            console.log("Logging out user...")
            await logout()
            navigate('/')
            console.log("Logged out successfully.")
        } catch (error) {
            console.error("Error signing out:", error)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            console.log("Opening Google Auth Popup...");
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Logged in user:", result.user);
            navigate('/analyze');
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    }

    // FIX 3: Safe Extraction for the Google Profile Photo URL
    // If photoURL contains the broken local mockup index string, fall back to checking providerData
    const profileImage = user?.photoURL && !user.photoURL.includes("googleusercontent.com/profile")
        ? user.photoURL
        : user?.providerData?.[0]?.photoURL || null;

    const toggleProfilePanel = () => setProfileOpen((current) => !current)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setProfileOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/70 border-b border-white/[0.06]">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:scale-110">
                        <Network className="w-5 h-5 text-black" />
                    </div>
                    <div>
                        <div className="font-bold text-lg text-white mt-3">REPO INTEL</div>
                        <div className="text-[10px] text-gray-500 tracking-wider uppercase mb-3">AI Repository Intelligence</div>
                    </div>
                </Link>

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

                    {!isAuthenticated ? (
                        <button
                            onClick={handleGetStarted}
                            className="ml-4 px-6 py-2 rounded-lg font-semibold bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 text-sm cursor-pointer"
                        >
                            Get Started
                        </button>
                    ) : (
                        <div className="relative ml-4" ref={profileRef}>
                            <button
                                type="button"
                                onClick={toggleProfilePanel}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt={user?.displayName || 'User'}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white text-black flex items-center justify-center font-bold text-sm">
                                        {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                )}
                            </button>

                            <AnimatePresence>
                                {profileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_20px_70px_rgba(0,0,0,0.45)] p-4 z-50"
                                    >
                                        <div className="flex items-center gap-3">
                                            {profileImage ? (
                                                <img
                                                    src={profileImage}
                                                    alt={user?.displayName || 'User'}
                                                    className="w-14 h-14 rounded-full object-cover border border-white/10"
                                                    referrerPolicy="no-referrer"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg border border-white/10">
                                                    {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                                                </div>
                                            )}
                                            <div className="space-y-1">
                                                <p className="text-sm font-semibold text-white">{user?.displayName || 'User'}</p>
                                                <p className="text-xs text-gray-400 break-words max-w-[200px]">{user?.email || 'No email available'}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="mt-4 w-full rounded-xl bg-white text-black py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </nav>

                <button
                    className="md:hidden text-white p-2 cursor-pointer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-3 px-4">
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
                            {!isAuthenticated ? (
                                <button
                                    onClick={handleGetStarted}
                                    className="px-6 py-2 rounded-lg font-semibold bg-white text-black text-sm cursor-pointer w-full text-center"
                                >
                                    Get Started
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2 rounded-lg font-semibold bg-transparent border border-white/20 text-white text-sm cursor-pointer w-full text-center"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}