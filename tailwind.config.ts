import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xsm' : '500px',
        'xxsm' : '400px'
      },
      fontFamily:{
        'sans': 'var(--new-font)',
      }
    },
  },
  plugins: [],
};
export default config;
