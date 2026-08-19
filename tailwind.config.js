/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf3f4',
          100: '#fbe6e8',
          200: '#f8d1d5',
          300: '#f2aeb6',
          400: '#e77f8d',
          500: '#d75567',
          600: '#c0384c',
          700: '#9e293a',
          800: '#721c26', // Primary Burgundy maroon from image
          900: '#5c141c',
          950: '#3d0910',
        },
        ivory: {
          50: '#fffdfa',
          100: '#faf6ed', // Warm background from image
          200: '#f5efe4',
          300: '#ebdcc7',
          400: '#dfc5a4',
          500: '#cfaa7f',
        },
        gold: {
          100: '#fff9e6',
          300: '#f7d885',
          400: '#e5c158',
          500: '#d4af37', // Luxurious Metallic Gold
          600: '#b88e24',
          700: '#8c6819',
        }
      },
      fontFamily: {
        script: ['var(--font-great-vibes)', 'Great Vibes', 'cursive'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #721c26 0%, #4a0f16 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f7d885 0%, #d4af37 50%, #8c6819 100%)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
