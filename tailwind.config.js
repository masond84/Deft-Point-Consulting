const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html', 
      './src/**/*.{js,ts,jsx,tsx}',
      flowbite.content(),
    ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'serif'], // Add the Sora font
      },
      colors: {
        'glass-bg': 'rgba(87, 87, 87, 0.15)', // Updated background color
        'gradient-start': 'rgba(87, 87, 87, 0.25)',
        'gradient-end': 'rgba(255, 255, 255, 0)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(68, 92, 102, 0.452)', // Updated box-shadow
        'custom-card': '0 8px 32px 0 rgba(68, 92, 102, 0.452)', // Subtle shadow for depth
      },
      backdropBlur: {
        'glass': '3px', // Backdrop blur remains the same
        'custom': '3px',
      },
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.05)', // Border color remains the same
      },
      gradientColorStops: {
        'custom-border-start': 'rgba(255, 255, 255, 0.18)',
        'custom-border-end': 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
