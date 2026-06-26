import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RepoAnalysis from './pages/RepoAnalysis'
import Results from './pages/Results'
import Chat from './pages/Chat'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/analyze" element={<RepoAnalysis />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
