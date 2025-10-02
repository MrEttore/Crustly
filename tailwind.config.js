import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#111827',
                    dark: '#0f172a',
                    light: '#374151',
                },
                cream: {
                    DEFAULT: '#ffffff',
                    dark: '#f5f5f5',
                },
                gold: {
                    DEFAULT: '#111827',
                },
                neutral: colors.neutral,
                zinc: colors.zinc,
            },
            borderRadius: {
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.25rem',
            },
            boxShadow: {
                elegant:
                    '0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
            },
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [],
};
