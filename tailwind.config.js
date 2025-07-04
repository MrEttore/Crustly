/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: [
                'Satoshi',
                'Inter',
                'ui-sans-serif',
                'system-ui',
                'Kantumruy Pro',
                'sans-serif',
            ],
            display: [
                'Playfair Display',
                'Fraunces',
                'serif',
            ],
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#A02C2C', // Deep Italian red
                    dark: '#842424',
                    light: '#D36A4A',
                },
                cream: {
                    DEFAULT: '#F8F5F2', // Creamy white
                    dark: '#F3E9E2',
                },
                olive: {
                    DEFAULT: '#6B8E23', // Olive green
                    dark: '#4E6B1A',
                },
                gold: {
                    DEFAULT: '#E1B869', // Gold accent
                },
                stone: {
                    ...require('tailwindcss/colors').stone,
                },
                red: {
                    ...require('tailwindcss/colors').red,
                },
            },
            borderRadius: {
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'elegant': '0 4px 32px 0 rgba(160,44,44,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.04)',
            },
            height: {
                screen: '100dvh', // For mobile browsers.
            },
        },
    },
    plugins: [],
};
