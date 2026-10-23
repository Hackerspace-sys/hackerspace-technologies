/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hst: {
          red: '#FF2626',
          'red-hover': '#E01E1E',
          'red-muted': 'rgba(255, 38, 38, 0.08)',
          'red-glow': 'rgba(255, 38, 38, 0.25)',
          black: '#050505',
          graphite: '#111111',
          charcoal: '#191919',
          surface: '#151515',
          'surface-light': '#F4F4F6',
          gray: '#777777',
          'gray-light': '#E8E8E8',
          'gray-border': '#222222',
          'gray-border-light': '#E2E2E6',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      maxWidth: {
        'site': '1360px',
        'reading': '760px',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'editorial': '0.12em',
        'widest-caps': '0.2em'
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    },
  },
  plugins: [],
}
