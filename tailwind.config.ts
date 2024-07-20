import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
    },
    extend: {
      colors: {
        'nes-dark': '#212529',
      },
    },
  },
  plugins: [],
} satisfies Config;
