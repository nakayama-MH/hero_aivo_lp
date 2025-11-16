import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import ContactModal from '@/components/ContactModal'

export const metadata: Metadata = {
  title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
  description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。24時間対応AIチャットボット標準装備。月額4万円で診断から運用まで伴走サポート。',

  // Open Graphタグ
  openGraph: {
    title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。24時間対応AIチャットボット標準装備。月額4万円で診断から運用まで伴走サポート。',
    url: 'https://hero-aivo.com',
    siteName: 'HERO AIVO',
    images: [
      {
        url: '/HEROAIVO_logo.png',
        width: 800,
        height: 600,
        alt: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

  // Twitterカード
  twitter: {
    card: 'summary_large_image',
    title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。24時間対応AIチャットボット標準装備。',
    images: ['/HEROAIVO_logo.png'],
  },

  // アイコン設定
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  // robots設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // その他のメタデータ
  keywords: ['HERO AIVO', 'AI検索', 'LLMO', 'Webサイト制作', 'AIチャットボット', '集客', 'SEO対策', '中小企業向け'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 構造化データ（JSON-LD）の定義
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Meta Heroes, Inc.',
    url: 'https://meta-heroes.co.jp/',
    logo: 'https://hero-aivo.com/metaheroes_logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@meta-heroes.co.jp',
      contactType: 'Customer Service',
      availableLanguage: ['Japanese'],
    },
    sameAs: ['https://meta-heroes.co.jp/'],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HERO AIVO',
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。',
    provider: {
      '@type': 'Organization',
      name: 'Meta Heroes, Inc.',
    },
    areaServed: 'JP',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://hero-aivo.com',
    },
    offers: {
      '@type': 'Offer',
      price: '40000',
      priceCurrency: 'JPY',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '40000',
        priceCurrency: 'JPY',
        unitText: '月額',
      },
    },
    serviceType: 'Webサイト制作・運用サービス',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '導入費用はいくらですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '月額4万円の月次運用費と、初回診断費用1万円が必要です。広告費は一切不要で、契約期間の縛りもありません。',
        },
      },
      {
        '@type': 'Question',
        name: 'どんな業種に向いていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BtoB、BtoC問わず、ほぼ全ての業種に対応しています。特にデジタル施策に力を入れたい中小企業、広告費を削減したい企業、若年層からの問い合わせを増やしたい企業、AI時代に乗り遅れたくない企業に最適です。',
        },
      },
      {
        '@type': 'Question',
        name: '月額4万円で何をしてくれますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '定期的なコンテンツ作成・入稿（自社開発ツール使用）、月次LLMO診断とスコアリング、サイトの改善提案と実装、AI検索対応の最新情報反映を提供します。',
        },
      },
      {
        '@type': 'Question',
        name: '最低契約期間はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '契約期間の縛りはありませんが、効果を実感いただくため、最低6ヶ月〜1年の継続をおすすめしています。',
        },
      },
      {
        '@type': 'Question',
        name: 'AI検索って何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPTやPerplexityなどのAIツールを使った検索のことです。従来のGoogle検索とは異なり、AIが情報を理解して回答します。LLMO（Large Language Model Optimization）対策により、AI検索で自社が表示されやすくなります。',
        },
      },
      {
        '@type': 'Question',
        name: 'なぜ広告費が不要なのですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI検索対応とコンテンツ最適化により、広告に依存しない自力集客型の仕組みを構築します。時間と共に価値が育つ生きた集客資産となり、持続的な集客が可能になります。',
        },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HERO AIVO',
    url: 'https://hero-aivo.com',
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス',
    publisher: {
      '@type': 'Organization',
      name: 'Meta Heroes, Inc.',
    },
    inLanguage: 'ja',
  }

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/chatbot/aivo-chatbot.css" />

        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
