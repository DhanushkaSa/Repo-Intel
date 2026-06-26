import React, { useState } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export default function Button({ variant = 'primary', size = 'md', className = '', ...props }: Props) {
    const [isHovered, setIsHovered] = useState(false)

    const base = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer'

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3.5 text-base'
    }

    const variantStyles = {
        primary: 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98]',
        secondary: 'bg-gradient-to-r from-gray-200 to-gray-300 text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5',
        ghost: 'text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/15',
        outline: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
    }

    return (
        <button
            className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {isHovered && variant === 'primary' && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse"></span>
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">{props.children}</span>
        </button>
    )
}
