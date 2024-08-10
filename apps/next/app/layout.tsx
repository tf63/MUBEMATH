import { Inter } from 'next/font/google'

import { cn } from '@ui/lib/utils'

import type { Metadata } from 'next'

// import '@repo/ui/styles.css'
import './globals.css'

import { Provider } from '@/app/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja" data-theme="light">
            <body className={cn(inter.className, 'h-full overflow-hidden bg-base-300 p-5')}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
