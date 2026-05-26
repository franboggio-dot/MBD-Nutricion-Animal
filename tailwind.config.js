/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        // Preset B
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        // Preset C
        grotesk: ['Space Grotesk', 'sans-serif'],
        dmserif: ['DM Serif Display', 'serif'],
        spacemono: ['Space Mono', 'monospace'],
        // Preset D
        sora: ['Sora', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
        fira: ['Fira Code', 'monospace'],
      },
      colors: {
        // Preset A — Organic Tech
        moss: '#2E4036',
        clay: '#CC5833',
        cream: '#F2F0E9',
        charcoal: '#1A1A1A',
        // Preset B — Midnight Luxe
        obsidian: '#0D0D12',
        champagne: '#C9A84C',
        ivory: '#FAF8F5',
        slate: '#2A2A35',
        // Preset C — Brutalist Signal
        paper: '#E8E4DD',
        signal: '#E63B2E',
        offwhite: '#F5F3EE',
        black: '#111111',
        // Preset D — Vapor Clinic
        void: '#0A0A14',
        plasma: '#7B61FF',
        ghost: '#F0EFF4',
        graphite: '#18181B',
        // Identity Brand (Vibrant Violet & Warm Orange)
        brand: {
          primary: '#c46cb8',
          dark: '#642c75',
          medium: '#a675a3',
          accent: '#CA7A29',
          start: '#181537',
          end: '#875c7c',
          support1: '#8f8fc1',
          support2: '#9b9dd5',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      }
    },
  },
  plugins: [],
}
