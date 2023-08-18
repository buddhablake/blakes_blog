import '@/app/globals.css'
import type { Metadata } from 'next'
import { Mate_SC } from 'next/font/google'

const mateSC = Mate_SC({subsets: ['latin'], weight: "400"})

export const metadata: Metadata = {
  title: 'Pints of Joy',
  description: 'A blog about beer and joy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mateSC.className}>
        {children}
      </body>
    </html>
  )
}
