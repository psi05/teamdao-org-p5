import type { Config } from 'tailwindcss';

const config: Config = {
     content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
     theme: {
          extend: {
               colors: {
                    teamdao_green: '#29ff2f',
                    teamdao_green_dark: '#1c8421',
               },
               fontFamily: {
                    matrix: ['Matrix', 'sans-serif'],
                    teamdao: ['TeamDao', 'sans-serif'],
                    f1: ['F1', 'sans-serif'],
               },
               transitionProperty: {
                    transform: 'transform',
               },
          },
     },
     plugins: [],
};
export default config;
