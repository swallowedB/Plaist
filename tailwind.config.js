/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 폰트
      fontFamily: {
        pretendard: ['Pretendard', 'san-serif'],
        rubik: ['"Rubik Bubbles"', 'cursive'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      // 커스텀 컬러
      colors: {
        primary: {
          50: '#E8F0FA',
          100: '#d8e7f9',
          200: '#B1D0F4',
          300: '#8AB8EE',
          400: '#63A1E8',
          500: '#d8e7f9',
          600: '#306EB5',
          700: '#245288',
          800: '#18375b',
          900: '#0c1b2d',
        },
        custom: {
          gray: '#7d848d',
          black: '#2e2e2e',
          graylight: '#D7D7D7',
          input: '#FEFEFE',
          icon: '#6E6776',
        }
      },
      // 커스텀 그림자
      boxShadow: {
        'default': '0px 8px 18px 0px rgba(168, 178, 198, 0.45)',
        'backblue': '0px 4px 10px 0px rgba(49, 78, 141, 0.25);',
        'blue': '0px 4px 10px 0px rgba(180, 184, 201, 0.40)',
        'nav': '0px -6px 10px 0px rgba(168, 178, 198, 0.45);'
      },
      backgroundImage: {
        'custom-radial1': 'radial-gradient(circle, #3b89e2, #62a1e8)',
        'custom-radial2' : 'radial-gradient(circle, #62A1E8, #B1D0F3)'
      }

    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};