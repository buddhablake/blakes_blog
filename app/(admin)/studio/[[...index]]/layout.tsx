import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StudioHeader from '@/app/_components/StudioHeader'

const inter = Inter({ subsets: ['latin'] })

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
    <html>
      <body className={inter.className}>
        <StudioHeader />
      {children}
      </body>
    </html>

  )
}