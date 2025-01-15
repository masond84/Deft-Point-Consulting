//const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind";

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
        krona: ["Krona One", "sans-serif"],
        neue: ["Neue Montreal", "sans-serif"],
        tusker: ["Tusker Grotesk", "sans-serif"],
      },
      colors: {
        'glass-bg': 'rgba(87, 87, 87, 0.15)', // Updated background color
        'glass-bg-2': 'rgba(26, 26, 26, 0.75)', // Updated background color
        'glass-bg-dark': 'rgba(40, 40, 40, 0.85)', // Darker background color with higher opacity
        'gradient-start': 'rgba(87, 87, 87, 0.25)',
        'gradient-end': 'rgba(255, 255, 255, 0)',
        "light-gold": "#9e764e",
        "dark-bg": "#0e0e0e",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(68, 92, 102, 0.452)', // Updated box-shadow
        'custom-card': '0 8px 32px 0 rgba(68, 92, 102, 0.452)', // Subtle shadow for depth
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // New glassmorphism shadow
        'gradient-shadow': '0px 10px 30px rgba(0, 0, 0, 0.1)', // Base shadow
      },
      backdropBlur: {
        'glass': '3px', // Backdrop blur remains the same
        'custom': '3px',
        'glassmorphism': '1px', // New glassmorphism blur
      },
      borderRadius: {
        'glass': '10px', // Add custom border radius for glassmorphism
      },
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.05)', // Border color remains the same
        'glassmorphism': 'rgba(255, 255, 255, 0.18)', // New border color for glassmorphism
      },
      gradientColorStops: {
        'custom-border-start': 'rgba(255, 255, 255, 0.18)',
        'custom-border-end': 'rgba(255, 255, 255, 0.05)',
      },
      backgroundColor: {
        'glassmorphism': 'rgba(255, 255, 255, 0.1)', // New background for glassmorphism
      },
      backgroundImage: {
        'shadow-gradient': 'linear-gradient(to right, #000000 0%, #BFBFBF 42%, #FFFFFF 73%)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
