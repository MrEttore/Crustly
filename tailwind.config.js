/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Kantumruy Pro, monospace',
        },
        extend: {
            height: {
                screen: '100dvh', // For mobile browsers.
            },
        },
    },
    plugins: [],
};
