import React from 'react'
import { Github, Twitter, Linkedin, Mail, Network } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-white/[0.06] bg-black/80 backdrop-blur-xl mt-20 mb-6">
            <div className="container py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                <Network className="w-4 h-4 text-black" />
                            </div>
                            <h3 className="font-bold text-white">REPO INTEL</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">Understand any GitHub repository instantly with AI-powered insights and intelligent analysis.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
                        <ul className="space-y-2.5 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
                        <ul className="space-y-2.5 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
                        <ul className="space-y-2.5 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-600">
                        © {currentYear} REPO INTEL. All rights reserved.
                    </div>
                    <div className="flex gap-3">
                        {[
                            { Icon: Github, label: 'GitHub' },
                            { Icon: Twitter, label: 'Twitter' },
                            { Icon: Linkedin, label: 'LinkedIn' },
                            { Icon: Mail, label: 'Email' }
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 group"
                            >
                                <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
