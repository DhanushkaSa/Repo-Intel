module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                secondary: '#888888',
                background: '#000000',
                card: '#111111',
                accent: '#cccccc',
                muted: '#555555',
                dim: '#333333',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'border-pulse': 'border-pulse 3s ease-in-out infinite',
                'spin-slow': 'spin-slow 8s linear infinite',
            },
            boxShadow: {
                'glow-white': '0 0 30px rgba(255, 255, 255, 0.1)',
                'glow-white-lg': '0 0 60px rgba(255, 255, 255, 0.15)',
            }
        }
    },
    plugins: []
}
