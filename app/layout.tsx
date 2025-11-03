import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import ContactModal from '@/components/ContactModal'

export const metadata: Metadata = {
  title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
  description: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/chatbot/aivo-chatbot.css" />
      </head>
      <body>
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>

        {/* AIVO Chatbot */}
        <Script src="/chatbot/aivo-chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
