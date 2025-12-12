import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import ContactModal from '@/components/ContactModal'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

// サイト基本情報の定数化
const SITE_NAME = 'HERO AIVO'
const SITE_URL = 'https://hero-aivo.com'
const COMPANY_NAME = '株式会社Meta Heroes'
const COMPANY_URL = 'https://meta-heroes.co.jp/'
const TWITTER_HANDLE = '@MetaHeroes_100'

export const metadata: Metadata = {
  // === 基本メタデータ ===
  title: {
    default: 'HERO AIVO | AI検索最適化（LLMO）で広告費0円の集客を実現 - 株式会社Meta Heroes',
    template: '%s | HERO AIVO',
  },
  description:
    'HERO AIVOとは、ChatGPTやPerplexityなどのAI検索で自社が表示されやすくなるLLMO（Large Language Model Optimization）対策サービスです。広告費0円でも集客できる資産型Webサイトを、初期15万円+月額20万円から提供。20社限定で最初の50%期間は月額10万円。株式会社Meta Heroesが運営。',
  keywords: [
    'LLMO',
    'AI検索最適化',
    'Large Language Model Optimization',
    'ChatGPT SEO',
    'Perplexity対策',
    'AI対策',
    'LLM最適化',
    '広告費削減',
    '広告費0円',
    '資産型LP',
    'HERO AIVO',
    'ヒーローアイボ',
    'Meta Heroes',
    'メタヒーローズ',
    '中小企業 集客',
    'Webサイト制作',
    'LP制作',
    'AI時代 マーケティング',
  ],

  // === E-E-A-T対策（専門性・権威性・信頼性）===
  authors: [{ name: COMPANY_NAME, url: COMPANY_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,

  // === 検索エンジン制御 ===
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // === 正規URL設定 ===
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },

  // === OGP（Open Graph Protocol）設定 ===
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'HERO AIVO | AI検索最適化（LLMO）で広告費0円の集客を実現',
    description:
      'ChatGPTやPerplexityなどのAI検索で自社が表示されやすくなるLLMO対策サービス。広告費0円でも集客できる資産型Webサイトを提供。20社限定で最初の50%期間は月額10万円。',
    images: [
      {
        url: '/Key_visual_PC.png',
        width: 1200,
        height: 630,
        alt: 'HERO AIVO - AI検索最適化（LLMO）サービス',
        type: 'image/png',
      },
    ],
  },

  // === Twitter Card設定 ===
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: 'HERO AIVO | AI検索最適化（LLMO）で広告費0円の集客を実現',
    description:
      'ChatGPTやPerplexityなどのAI検索で自社が表示されやすくなるLLMO対策サービス。広告費0円でも集客できる資産型Webサイトを提供。',
    images: ['/Key_visual_PC.png'],
  },

  // === その他のメタデータ ===
  category: 'technology',
  classification: 'Business',
  applicationName: SITE_NAME,

  // === フォーマット検出の無効化（誤リンク防止）===
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // === その他のカスタムメタタグ ===
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': SITE_NAME,
  },
}

// Viewportは別エクスポート（Next.js 14以降推奨）
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f62a2a',
  colorScheme: 'light',
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
        {/* JSON-LD構造化データ */}
        <StructuredData />
      </head>
      <body>
        <ContactModalProvider>
          <Header />
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
          <Footer />
          <ContactModal />
        </ContactModalProvider>

        {/* AIVO Chatbot */}
        <Script src="/chatbot/aivo-chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
