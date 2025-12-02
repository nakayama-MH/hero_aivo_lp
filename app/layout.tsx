import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import ContactModal from '@/components/ContactModal'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
  description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。24時間対応AIチャットボット標準装備。LLMO診断5万円から、フルパッケージで継続的な運用サポートを提供。',

  // Open Graphタグ
  openGraph: {
    title: 'HERO AIVO - AIに選ばれる、企業の見つかる力',
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。24時間対応AIチャットボット標準装備。LLMO診断5万円から、フルパッケージで継続的な運用サポートを提供。',
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
    description: 'AI検索時代に対応した次世代型Webサイト制作・運用サービス。LLMO対策で広告費ゼロでも持続的に集客できる自走型サイトを構築。LLMO診断5万円から、継続的な運用サポートを提供。',
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
    offers: [
      {
        '@type': 'Offer',
        name: 'LLMO診断サービス',
        price: '50000',
        priceCurrency: 'JPY',
        description: 'AI検索表示状況の分析、詳細レポート提出',
      },
      {
        '@type': 'Offer',
        name: '導入プラン初期費用',
        price: '150000',
        priceCurrency: 'JPY',
        description: 'LLMO診断、AI最適化LP制作、初期セットアップ含む',
      },
      {
        '@type': 'Offer',
        name: '年間契約プラン（推奨・キャンペーン価格）',
        price: '1800000',
        priceCurrency: 'JPY',
        description: '運用費180万円（1-6ヶ月目月額10万円、7-12ヶ月目月額20万円）。一括払い特典：10万円割引で170万円。2025/12/3〜2026/12/2のキャンペーン価格。',
        validFrom: '2025-12-03',
        validThrough: '2026-12-02',
      },
      {
        '@type': 'Offer',
        name: '半年契約プラン（トライアル・キャンペーン価格）',
        price: '900000',
        priceCurrency: 'JPY',
        description: '運用費90万円（1-3ヶ月目月額10万円、4-6ヶ月目月額20万円）。初期費用15万円別途。2025/12/3〜2026/12/2のキャンペーン価格。',
        validFrom: '2025-12-03',
        validThrough: '2026-12-02',
      },
      {
        '@type': 'Offer',
        name: '2年目以降（年間契約のみ）',
        price: '200000',
        priceCurrency: 'JPY',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '200000',
          priceCurrency: 'JPY',
          unitText: '月額',
        },
        description: '月額20万円、年間契約のみ',
      },
    ],
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
          text: 'LLMO診断のみは5万円（税別）です。導入プランは初期費用15万円（LLMO診断、LP制作、初期セットアップ含む）と運用費が必要です。年間契約は運用費180万円（一括払いで170万円）、半年契約は運用費90万円です。2年目以降は月額20万円の年間契約のみとなります。広告費は一切不要です。',
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
        name: '月次運用サービスには何が含まれますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'アルゴリズム追従（Google SGEやOpenAIの仕様変更に合わせたコード修正）、情報の鮮度維持（Q&Aの追加・リライト）、外部信頼性向上（被リンク・サイテーション獲得）、レポーティング（毎月の簡易レポートと年4回の詳細診断レポート）を提供します。「番犬」として常に監視し、「成長」させる運用で貴社の表示を守ります。',
        },
      },
      {
        '@type': 'Question',
        name: '最低契約期間はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '年間契約プラン（12ヶ月ごとに更新・解約判断可能）と半年契約プラン（6ヶ月ごとに更新・解約判断可能）があります。効果を実感いただくため、最低6ヶ月〜1年の継続をおすすめしています。2年目以降は年間契約のみとなります。',
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
