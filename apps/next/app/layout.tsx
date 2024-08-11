import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@ui/lib/utils'

import './globals.css'

import { Analytics } from '@vercel/analytics/react'

import { Provider } from '@/app/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MUBEMATH',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja" data-theme="light">
            <body className={cn(inter.className, 'h-full overflow-hidden bg-base-300 p-5')}>
                <Provider>{children}</Provider>
                <Analytics />
            </body>
        </html>
    )
}
