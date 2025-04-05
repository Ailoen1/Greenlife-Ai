/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#2E8B57', // 主色调：环保绿
        'lake-blue': '#5F9EA0', // 主色调：湖水蓝
        'coral-red': '#FF7F50', // 强调色：珊瑚红
        'light-gray': '#F8F9FA', // 中性色：浅灰
        'dark-gray': '#343A40',  // 中性色：深灰
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // 正文字体
        display: ['Montserrat', 'sans-serif'], // 标题字体
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)', // 玻璃拟态阴影
      }
    },
  },
  plugins: [],
} 