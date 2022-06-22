/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'soft-blue': 'hsl(215, 51%, 70%)',
                cyan: 'hsl(178, 100%, 50%)',
                'dark-blue-main-bg': 'hsl(217, 54%, 11%)',
                'dark-blue-card-bg': 'hsl(216, 50%, 16%)',
                'dark-blue-line': 'hsl(215, 32%, 27%)'
            }
        }
    },
    plugins: []
};
