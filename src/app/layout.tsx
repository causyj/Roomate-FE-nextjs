import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import localFont from 'next/font/local'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const pretendard = localFont({
  src: [
      { path: './styles/fonts/100.woff', weight: '100', style: 'normal' },
      { path: './styles/fonts/200.woff', weight: '200', style: 'normal' },
      { path: './styles/fonts/300.woff', weight: '300', style: 'normal' },
      { path: './styles/fonts/400.woff', weight: '400', style: 'normal' },
      { path: './styles/fonts/500.woff', weight: '500', style: 'normal' },
      { path: './styles/fonts/600.woff', weight: '600', style: 'normal' },
      { path: './styles/fonts/700.woff', weight: '700', style: 'normal' },
      { path: './styles/fonts/800.woff', weight: '800', style: 'normal' },
      { path: './styles/fonts/900.woff', weight: '900', style: 'normal' },
  ],
  variable: '--pretendard',
})

const googleSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--google-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const Links = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-32">
            <Link href="/login">login</Link>
            <Link href="/signup">signup</Link>
            <Link href="/typetest">typetests</Link>
            <Link href="/type">type</Link>
            <Link href="/recommend">recommend</Link>
            <Link href="/recommendationresult">recommendationresult</Link>
            <Link href="/">main</Link>
    </div>
  )
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr" className={`${googleSans.variable} ${pretendard.variable}`}>
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className="h-screen max-h-screen min-h-screen" bg-background font-kor >
        <Links />
        <>
        {children}
        </>
      </body>
      </ThemeProvider>
    </html>
  )
}
