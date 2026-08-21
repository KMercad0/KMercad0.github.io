/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-clash)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex)', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        'primary': '#ff9157',
        'primary-fixed': '#ff7a2c',
        'on-primary': '#531e00',
        'on-primary-fixed': '#000000',
        'surface': '#0e0e0e',
        'surface-container': '#191919',
        'surface-container-high': '#1f1f1f',
        'surface-container-highest': '#262626',
        'surface-variant': '#262626',
        'on-surface': '#ffffff',
        'on-surface-variant': '#ababab',
        'background': '#0e0e0e',
        'outline': '#757575',
        'outline-variant': '#484848',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
