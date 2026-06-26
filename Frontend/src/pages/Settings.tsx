import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon, Monitor, Globe, Bell, Eye, Palette } from 'lucide-react'

function Toggle({ checked, onChange }: { checked: boolean, onChange: () => void }) {
    return (
        <button
            onClick={onChange}
            className={`relative w-11 h-6 rounded-full transition-all duration-300 ${checked ? 'bg-white' : 'bg-white/[0.08] border border-white/[0.1]'}`}
        >
            <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${checked ? 'left-[22px] bg-black' : 'left-0.5 bg-gray-500'}`} />
        </button>
    )
}

export default function Settings() {
    const [notifications, setNotifications] = useState(true)
    const [analytics, setAnalytics] = useState(false)
    const [autoDoc, setAutoDoc] = useState(true)

    return (
        <div className="container py-16 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                        <SettingsIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Settings</h2>
                        <p className="text-sm text-gray-600">Manage your preferences</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Appearance */}
                    <div className="glass-card p-6 rounded-xl">
                        <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
                            <Palette className="w-4 h-4 text-gray-500" />
                            Appearance
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Theme</label>
                                <select className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none">
                                    <option value="dark">Dark</option>
                                    <option value="system">System</option>
                                    <option value="light">Light</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Language */}
                    <div className="glass-card p-6 rounded-xl">
                        <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-gray-500" />
                            Language & Region
                        </h3>
                        <div>
                            <label className="text-sm text-gray-400 mb-2 block">Language</label>
                            <select className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Japanese</option>
                            </select>
                        </div>
                    </div>

                    {/* Toggles */}
                    <div className="glass-card p-6 rounded-xl">
                        <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
                            <Bell className="w-4 h-4 text-gray-500" />
                            Preferences
                        </h3>
                        <div className="space-y-5">
                            {[
                                { label: 'Email Notifications', desc: 'Get notified when analysis completes', checked: notifications, toggle: () => setNotifications(!notifications) },
                                { label: 'Usage Analytics', desc: 'Help us improve with anonymous usage data', checked: analytics, toggle: () => setAnalytics(!analytics) },
                                { label: 'Auto Documentation', desc: 'Generate docs automatically after analysis', checked: autoDoc, toggle: () => setAutoDoc(!autoDoc) },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-medium text-white">{item.label}</div>
                                        <div className="text-xs text-gray-600 mt-0.5">{item.desc}</div>
                                    </div>
                                    <Toggle checked={item.checked} onChange={item.toggle} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
