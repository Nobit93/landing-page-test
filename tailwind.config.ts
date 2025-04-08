import type { Config } from 'tailwindcss';
// 使用 require 导入 defaultTheme
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 确保访问路径正确
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
       colors: {
         // 从 Figma 设计稿中提取的颜色
        pink: {
          50: '#FFF6FA', // Feature/Upload background
          200: 'rgba(255, 126, 172, 0.3)', // Feature number color
          400: '#FF7EAC', // Upload border dashed
          500: '#FF528F', // Primary button, stars
        },
        blue: {
           50: '#ECF5FF', // Testimonial background
           400: '#62BFF9', // Quote icon color
        },
        gray: {
            600: '#5C5C5C', // Paragraph text
            800: '#313131', // Footer primary bg
            900: '#151515', // Headings
            950: '#101010', // Upload icon stroke, Button text, Footer dark bg
        }
      },
       height: {
         '18': '4.5rem', // 72px for header height
       }
    },
  },
  plugins: [],
};
export default config; 