/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        secondary: '#9333EA', 
        accent: '#FBBF24', 
        background: '#F9FAFB', 
        text: '#1F2937',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'custom-xl': '0 10px 20px rgba(0, 0, 0, 0.25)', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      borderRadius: {
        'xl': '1rem',
      },
      borderRadius: {
        'custom': '1.5rem', // Example custom radius
      },
      spacing: {
        '128': '32rem', 
      },
    },
  },
  plugins: [],
}
