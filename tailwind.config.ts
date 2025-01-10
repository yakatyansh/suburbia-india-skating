import fluid, { extract } from 'fluid-tailwind'
import type { Config } from "tailwindcss";

export default {
  content: {
    files:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extract
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bowlby-sc)'],
        mono: ['var(--font-dm-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
