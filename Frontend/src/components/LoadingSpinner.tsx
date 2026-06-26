import React from 'react'

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-md animate-pulse"></div>
                <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                    <div className="w-11 h-11 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
                </div>
            </div>
            <p className="text-gray-500 text-sm font-medium tracking-wide">Loading...</p>
        </div>
    )
}
