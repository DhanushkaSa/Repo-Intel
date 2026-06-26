import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const suggestedQuestions = [
    'What is the main tech stack?',
    'Explain the architecture',
    'Are there security issues?',
    'How is the code organized?',
    'What dependencies are used?',
    'Suggest improvements',
]

export default function Chat() {
    const [messages, setMessages] = useState<{ from: 'user' | 'ai', text: string }[]>([])
    const [text, setText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }, [messages, isTyping])

    const send = (msg?: string) => {
        const input = msg || text
        if (!input.trim()) return
        setMessages((m) => [...m, { from: 'user', text: input }])
        setText('')
        setIsTyping(true)
        setTimeout(() => {
            setIsTyping(false)
            setMessages((m) => [...m, { from: 'ai', text: `Based on the repository analysis, here's what I found about "${input}": The codebase follows modern best practices with clean architecture patterns and well-organized modules.` }])
        }, 1200)
    }

    return (
        <div className="container py-8">
            <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
                {/* Left Panel */}
                <aside className="lg:col-span-1 glass-card p-5 rounded-xl flex flex-col">
                    <h3 className="font-semibold text-white text-sm mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        Conversations
                    </h3>
                    <div className="flex-1 space-y-2">
                        <div className="p-3 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-white cursor-pointer">
                            Current Analysis
                        </div>
                    </div>
                </aside>

                {/* Chat Area */}
                <section className="lg:col-span-2 glass-card rounded-xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                            <Bot className="w-4 h-4 text-black" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-white">RepoMind AI</div>
                            <div className="text-xs text-gray-600">Ask anything about the repository</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-auto p-6 space-y-4">
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <Sparkles className="w-8 h-8 text-gray-700 mb-3" />
                                <p className="text-gray-600 text-sm">Start a conversation about the repository</p>
                            </div>
                        )}
                        <AnimatePresence>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${m.from === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${m.from === 'user' ? 'bg-white' : 'bg-white/[0.06] border border-white/[0.08]'}`}>
                                        {m.from === 'user' ? <User className="w-3.5 h-3.5 text-black" /> : <Bot className="w-3.5 h-3.5 text-gray-400" />}
                                    </div>
                                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.from === 'user'
                                        ? 'bg-white text-black rounded-tr-md'
                                        : 'bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded-tl-md'
                                    }`}>
                                        {m.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Typing indicator */}
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-3 items-start"
                            >
                                <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                                    <Bot className="w-3.5 h-3.5 text-gray-400" />
                                </div>
                                <div className="bg-white/[0.04] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-tl-md flex gap-1.5">
                                    {[0, 1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        ></div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="px-6 py-4 border-t border-white/[0.06]">
                        <div className="flex gap-3">
                            <input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && send()}
                                className="flex-1 bg-white/[0.03] border border-white/[0.08] px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300"
                                placeholder="Ask about the repository..."
                            />
                            <button
                                onClick={() => send()}
                                disabled={!text.trim()}
                                className="px-4 py-3 rounded-xl bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Right Panel */}
                <aside className="lg:col-span-1 glass-card p-5 rounded-xl flex flex-col">
                    <h3 className="font-semibold text-white text-sm mb-4 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gray-500" />
                        Suggested Questions
                    </h3>
                    <div className="space-y-2">
                        {suggestedQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => send(q)}
                                className="w-full text-left p-3 rounded-lg text-xs text-gray-500 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-200"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    )
}
