import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="kr">
      <body className={inter.className} h-screen max-h-screen min-h-screen>
        <Links />
        <>
        {children}
        </>
      </body>
    </html>
  )
}
