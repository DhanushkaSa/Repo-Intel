import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
    return (
        <div className="container py-32 text-center flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none mb-4 select-none"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    404
                </motion.div>
                <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
                <p className="text-gray-500 mb-10 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
                <Link to="/">
                    <Button className="gap-2 rounded-xl mx-auto">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}
