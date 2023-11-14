/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dropdownItemBG': 'radial-gradient(circle, #9b3627 60%, #212121 100%)',
      },
      colors: {
        BLACK: '#222',
        SOFT_BLACK: '#343434',
        WHITE: '#FFFDFA',
        BGinner: '#f7e5ba',
        BGoutter: '#e8ba4d',
        TAWNY_SOFT: '#e9d7be',
        TAWNY: '#dcc098',
        RICH_TAWNY: '#c2914c',
        MED_TAWNY: '#593c05',
        DARK_TAWNY: '#3d2a05',
        YELLOW: '#deb20b',
        RED: '#c44431',
        BLUE: '#1c6a9a',
        GREEN: '#6c7e19',
      },
      fontFamily: {
        ribeye: ['Ribeye'],
      },
      fontSize: {
        sm: '0.85rem',
        base: '1rem',
        lg: '1.15rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.5rem',
      },
      dropShadow: {
        '4xl': 
          '0 45px 65px rgba(52, 64, 235, 0.15)'
      },
    },
  },
  plugins: [],
};
