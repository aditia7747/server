tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        heading: ['Clash Display', 'sans-serif'],
                        body: ['Plus Jakarta Sans', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        oprp: {
                            orange: '#E85D04', // Premium Matte Orange
                            dark: '#09090B', // Deep Zinc
                            surface: '#121214', // Richer Dark
                            card: '#1C1C1F', // Lighter Dark for premium contrast
                            light: '#F8F9FA',
                            gold: '#F5B041', // Refined Gold (Mewah)
                            green: '#00E676'
                        }
                    },
                    boxShadow: {
                        // Premium 3D Neobrutalism Shadows (Matte finish)
                        '3d-dark': '6px 6px 0px 0px #000000, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.05)',
                        '3d-orange': '6px 6px 0px 0px #7A2E00, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.1)',
                        '3d-gold': '6px 6px 0px 0px #825700, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.1)',
                        '3d-hover': '2px 2px 0px 0px #000000, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.05)',
                        '3d-glow': '0 0 20px rgba(232, 93, 4, 0.2)',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
