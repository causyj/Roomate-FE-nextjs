import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            eng: ['var(--google-sans)'],
            kor: ['var(--pretendard)'],
        },
        fontSize: {
            '8xl': '6rem',
            '6xl': '3.75rem',
            '5xl': '3rem',
            '3xl': '1.875rem',
            '2xl': '1.5rem',
            'xl' : '1.25rem',
        },
        colors: {
            background: '#18181B',
            primary: {
                yellow: '#FFE247',
                teal: '#00ECC1',
                blue: '#1753F1',
                purple: '#946AFE',
                accent: '#A93D4C',
            },
        },
    },
},
  plugins: [],
}
export default config
