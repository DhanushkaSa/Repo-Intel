import React from 'react'
import { Code2, GitBranch, Shield } from 'lucide-react'

export default function Sidebar() {
    return (
        <div className="space-y-4">
            {/* Project Info Card */}
            <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Project Information
                </h4>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                        <GitBranch className="w-4 h-4 text-gray-500" />
                        <span>main branch</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <span>MIT License</span>
                    </div>
                </div>
            </div>

            {/* Folder Tree Card */}
            <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-gray-500" />
                    Folder Structure
                </h5>
                <div className="text-gray-500 text-sm space-y-1.5 font-mono text-xs">
                    <div className="hover:text-gray-300 transition-colors cursor-pointer">📁 src/</div>
                    <div className="ml-4 hover:text-gray-300 transition-colors cursor-pointer">📁 components/</div>
                    <div className="ml-4 hover:text-gray-300 transition-colors cursor-pointer">📁 pages/</div>
                    <div className="ml-4 hover:text-gray-300 transition-colors cursor-pointer">📁 utils/</div>
                </div>
            </div>

            {/* Technologies Card */}
            <div className="glass-card p-6 rounded-xl hover-glow transition-all duration-300">
                <h5 className="font-semibold text-white mb-4">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Vite', 'TypeScript', 'Tailwind', 'Node'].map(t => (
                        <span key={t} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs font-medium text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200 cursor-default">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
