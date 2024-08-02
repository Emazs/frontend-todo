/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        darkBg: "url('./assets/bg-desktop-dark.jpg')",
        lightBg: "url('./assets/bg-desktop-light.jpg')",
      },
      colors: {
        BrightBlue: 'hsl(220, 98%, 61%)',
        // Light theme
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        // Dark theme
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        LightGrayishBlue: 'hsl(236, 33%, 92%)', //hover
        DarkGrayshBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryDarkGrayishBlue: 'hsl(237, 14%, 26%)',

        darkBgColor: 'hsl(235, 21%, 11%)',
        lightBgColor: 'white',
      },
      screens: {
        tablet: { max: '907px' },
        mobile: '907px',
        desktop: '1448px' ,
        mobileWidth: { max: '690px' },
      },
    },
  },
  plugins: [],
}
