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
          black: '#000000',
          surface: '#121212',
          'surface-card': '#161616',
          'surface-hover': '#1C1C1C',
          'surface-elevated': '#222222',
          graphite: '#121212',
          charcoal: '#181818',
          gray: '#888888',
          'gray-light': '#E5E5E5',
          'gray-border': 'rgba(255, 255, 255, 0.08)',
          'gray-border-hover': 'rgba(255, 38, 38, 0.5)',
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
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'laser-sweep': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 5s ease-in-out infinite',
        'laser-sweep': 'laser-sweep 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
