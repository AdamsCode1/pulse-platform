// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'pulse-pink': 'var(--pulse-pink)',
          'pulse-purple': 'var(--pulse-purple)',
          'pulse-blue': 'var(--pulse-blue)',
          'pulse-cyan': 'var(--pulse-cyan)',
          'pulse-light': 'var(--pulse-light)',
          'pulse-dark': 'var(--pulse-dark)',
        },
        boxShadow: {
          'pulse': 'var(--pulse-shadow)',
        },
        backgroundImage: {
          'pulse-gradient': 'var(--pulse-gradient)',
        },
      },
    },
    plugins: [],
  }