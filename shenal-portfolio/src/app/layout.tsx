import type { Metadata } from 'next'
import './globals.css'
import { Delius } from 'next/font/google' // This is similar to Alumni Sans SC

const delius = Delius({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shenal Silva',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={delius.className}>{children}</body>
    </html>
  )
}
