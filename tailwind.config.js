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
      },
      colors: {
        BLACK: '#222',
        SOFT_BLACK: '#343434',
        WHITE: '#FFFDFA',
        BGinner: '#f7e5ba',
        BGoutter: '#e8ba4d',
        TAWNY: '#dcc098',
        RICH_TAWNY: '#c2914c',
        MED_TAWNY: '#593c05',
        DARK_TAWNY: '#3d2a05',
        YELLOW: '#deb20b',
        RED: '#c44431',
        BLUE: '#1c6a9a',
        GREEN: '#6c7e19',
      },
    },
  },
  plugins: [],
}
