/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary purple palette - main brand colors
        purpleBrand: {
          50: '#faf5ff',   // softest lavender
          100: '#f3e8ff',  // light lavender
          200: '#e9d5ff',  // pale lavender
          300: '#d8b4fe',  // soft lavender
          400: '#c084fc',  // medium lavender
          500: '#a855f7',  // vibrant purple
          600: '#9333ea',  // deep purple
          700: '#7c3aed',  // rich purple
          800: '#6b21a8',  // dark purple
          900: '#581c87',  // deepest purple
          950: '#3b0764',  // midnight purple
        },
        warm: {
          50: '#fdf4ff',    // softest pink-lavender
          100: '#fae8ff',   // light pink-lavender
          200: '#f5d0fe',   // pale pink-lavender
          300: '#f0abfc',   // soft pink-lavender
          400: '#e879f9',   // medium pink-lavender
          500: '#d946ef',   // vibrant pink-purple
          600: '#c026d3',   // deep pink-purple
          700: '#a21caf',   // rich pink-purple
          800: '#86198f',   // dark pink-purple
          900: '#701a75',   // deepest pink-purple
          950: '#4a044e',   // midnight pink-purple
        },
        
        // Accent colors for highlights and CTAs
        accent: {
          lavender: '#e9d5ff',     // soft lavender
          violet: '#c084fc',       // medium violet
          orchid: '#d946ef',       // vibrant orchid
          plum: '#a855f7',         // rich plum
          mauve: '#f0abfc',        // soft mauve
          lilac: '#f3e8ff',        // light lilac
          periwinkle: '#c7d2fe',   // soft periwinkle
          amethyst: '#9333ea',     // deep amethyst
        },
        
        // Neutral grays with purple undertones
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        
        // Fashion-specific colors
        fashion: {
          champagne: '#f7e7ce',
          dustyRose: '#dcae96',
          mauve: '#c8a2c8',
          sage: '#b7c4ae',
          lavender: '#c4a5d6',
          mushroom: '#c7b299',
          linen: '#faf0e6',
          oatmeal: '#f2e6d7',
        },
        
        // Status colors with purple tones
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(168, 85, 247, 0.1), 0 1px 2px 0 rgba(168, 85, 247, 0.06)',
        'warm': '0 4px 8px 0 rgba(168, 85, 247, 0.12), 0 2px 4px 0 rgba(168, 85, 247, 0.08)',
        'warm-md': '0 4px 8px 0 rgba(168, 85, 247, 0.12), 0 2px 4px 0 rgba(168, 85, 247, 0.08)',
        'warm-lg': '0 8px 16px 0 rgba(168, 85, 247, 0.15), 0 4px 8px 0 rgba(168, 85, 247, 0.1)',
        'warm-xl': '0 12px 24px 0 rgba(168, 85, 247, 0.18), 0 6px 12px 0 rgba(168, 85, 247, 0.12)',
        'warm-2xl': '0 20px 40px 0 rgba(168, 85, 247, 0.2), 0 10px 20px 0 rgba(168, 85, 247, 0.15)',
        'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 30px rgba(168, 85, 247, 0.4)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-warm': 'pulseWarm 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        pulseWarm: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      scale: {
        '102': '1.02',
      },
      
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}