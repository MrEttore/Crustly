/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            // Minimalist, clean sans-serif stack
            sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            // Use the same as sans for display to avoid decorative styles
            display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        extend: {
            colors: {
                // Minimal, neutral-first palette
                primary: {
                    DEFAULT: '#111827', // neutral-900 (ink)
                    dark: '#0f172a', // slate-900
                    light: '#374151', // gray-700
                },
                cream: {
                    DEFAULT: '#ffffff', // pure white surface
                    dark: '#f5f5f5', // neutral-100 for subtle sections
                },
                // Keep the key but repurpose gold to a subtle accent used sparingly
                gold: {
                    DEFAULT: '#111827', // align with minimalist accent (ink)
                },
                neutral: {
                    ...require('tailwindcss/colors').neutral,
                },
                zinc: {
                    ...require('tailwindcss/colors').zinc,
                },
            },
            borderRadius: {
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.25rem',
            },
            boxShadow: {
                // Softer, lightweight shadow
                elegant:
                    '0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
            },
            height: {
                screen: '100dvh', // For mobile browsers.
            },
        },
    },
    plugins: [],
};
