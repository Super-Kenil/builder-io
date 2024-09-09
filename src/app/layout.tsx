import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: 'Builder.io Velocity',
  description: 'AI Launch Event',
  authors: {
    name: 'Clone made by @Super-Kenil',
    url: 'https://superkenil.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#111] text-white`}>{children}</body>
    </html>
  )
}
