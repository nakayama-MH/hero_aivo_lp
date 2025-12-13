/**
 * StructuredData.tsx
 * JSON-LD構造化データコンポーネント
 *
 * LLMO最適化のための構造化データを出力
 * - Organization: 会社情報（founder、所在地含む）
 * - WebSite: サイト情報
 * - Service: サービス情報
 * - FAQPage: よくある質問
 * - BreadcrumbList: パンくずリスト
 * - SoftwareApplication: ツールとしてのHEROAIVO
 * - WebPage: ページ情報（speakable対応）
 * - HowTo: LLMO対策の流れ
 */

const SITE_URL = 'https://hero-aivo.com'
const COMPANY_URL = 'https://meta-heroes.co.jp/'

export default function StructuredData() {
  // Organization スキーマ（会社・組織情報）- 詳細化版
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: '株式会社Meta Heroes',
    legalName: '株式会社Meta Heroes',
    alternateName: ['Meta Heroes', 'メタヒーローズ', 'MetaHeroes'],
    url: COMPANY_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/metaheroes_logo.png`,
      contentUrl: `${SITE_URL}/metaheroes_logo.png`,
      caption: '株式会社Meta Heroes ロゴ',
    },
    image: `${SITE_URL}/metaheroes_logo.png`,
    description:
      '株式会社Meta Heroesは、AI検索最適化（LLMO：Large Language Model Optimization）を専門とするWebマーケティング会社です。中小企業向けに広告費0円を目指せる資産型Webサイト制作・運用サービス「HERO AIVO」を提供しています。',
    foundingDate: '2021',
    // 代表者情報
    founder: {
      '@type': 'Person',
      name: '松石和俊',
      jobTitle: '代表取締役',
    },
    // オフィス所在地（東京・大阪）
    address: [
      {
        '@type': 'PostalAddress',
        name: '東京オフィス',
        addressLocality: '渋谷区',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
      {
        '@type': 'PostalAddress',
        name: '大阪オフィス',
        addressLocality: '梅田',
        addressRegion: '大阪府',
        addressCountry: 'JP',
      },
    ],
    // 従業員規模
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    // 業種分類（Computer Systems Design Services）
    naics: '541512',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Japanese', 'ja'],
      email: 'info@meta-heroes.co.jp',
    },
    sameAs: [
      COMPANY_URL,
      'https://twitter.com/MetaHeroes_100',
    ],
  }

  // WebSite スキーマ（サイト情報）
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'HERO AIVO',
    alternateName: 'ヒーローアイボ',
    description:
      'HERO AIVOは、ChatGPTやPerplexityなどのAI検索で企業が表示されやすくなるLLMO（Large Language Model Optimization）対策サービスです。広告費0円でも集客できる資産型Webサイトを提供します。',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'ja-JP',
  }

  // Service スキーマ（サービス情報）
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: 'HERO AIVO',
    alternateName: 'ヒーローアイボ',
    serviceType: 'AI検索最適化（LLMO）サービス',
    description:
      'HERO AIVOとは、ChatGPTやPerplexityなどのAI検索エンジンで企業が表示されやすくなるよう、Webサイトを最適化するLLMO（Large Language Model Optimization）対策サービスです。広告費0円でも集客できる資産型Webサイトを制作・運用します。',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: '中小企業経営者・マーケティング責任者',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HERO AIVOサービス一覧',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LLMO診断サービス',
            description:
              '現状のWebサイトをAI視点で分析・スコアリングする診断サービス。ソースコードレベルでの深層分析を行い、AI最適化スコアを算出。具体的な改善ポイントを提示します。',
          },
          price: '50000',
          priceCurrency: 'JPY',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '50000',
            priceCurrency: 'JPY',
            valueAddedTaxIncluded: false,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'スタンダードプラン（LP制作）',
            description:
              'LLMO完全対応のLP制作プラン。LP1本制作、LLMO診断込み、チャットボット標準装備。20社限定で最初の50%期間は月額10万円。',
          },
          priceSpecification: {
            '@type': 'CompoundPriceSpecification',
            name: 'スタンダードプラン料金',
            priceComponent: [
              {
                '@type': 'UnitPriceSpecification',
                name: '初期制作費',
                price: '150000',
                priceCurrency: 'JPY',
                valueAddedTaxIncluded: false,
              },
              {
                '@type': 'UnitPriceSpecification',
                name: '月額運用費',
                price: '200000',
                priceCurrency: 'JPY',
                valueAddedTaxIncluded: false,
                billingDuration: 'P1M',
                description: '20社限定で最初の50%期間は月額100,000円',
              },
            ],
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'プレミアムプラン（HP+LP制作）',
            description:
              '新規HP＋新規LP制作の包括的プラン。LLMO診断込み、チャットボット標準装備。規模に応じた見積もり。',
          },
        },
      ],
    },
  }

  // FAQPage スキーマ（よくある質問）
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'LLMOって何ですか？本当に必要なんでしょうか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLMO（Large Language Model Optimization）とは、ChatGPTやPerplexityなどのAI検索で自社が表示されやすくする対策のことです。今、若年層を中心にGoogleよりAIで検索する人が急増しています。従来のSEO対策だけでは、AI検索には対応できません。5年後を見据えた集客には必須の施策です。',
        },
      },
      {
        '@type': 'Question',
        name: 'HERO AIVOの料金体系を教えてください',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLMO診断サービスは50,000円（税別）。スタンダードプラン（LP制作）は初期制作費150,000円（税別）+月額運用費200,000円（税別）。20社限定で最初の50%期間は月額10万円（1年契約なら6ヶ月、半年契約なら3ヶ月）。プレミアムプラン（HP+LP制作）は規模により要見積もり。契約期間はスタンダードが半年or1年、プレミアムが1年です。',
        },
      },
      {
        '@type': 'Question',
        name: '効果が出るまでどれくらいかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3ヶ月以内でサイトの課題が数値化され定期的なコンテンツ更新が始まります。6ヶ月〜1年でAI検索での露出が向上し問い合わせが増加。2年以降で持続的な集客基盤が確立し顧客獲得コストが大幅に削減されます。時間とともに価値が増していく「資産型」の施策です。',
        },
      },
      {
        '@type': 'Question',
        name: '従来のHP制作サービスとの違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '一般的なHP制作は「作って終わり」ですが、HERO AIVOはLLMO・SEO完全対応の構造設計、自社開発ツールによる継続的なコンテンツ運用、広告費ゼロでも集客できる自走型サイト、月次診断で改善状況を数値で追える点が異なります。作るだけでなく、育て続けることで資産価値が高まります。',
        },
      },
      {
        '@type': 'Question',
        name: '月額運用費は何に使われるのですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLMO対策（AI検索最適化の継続実施）、LP保守（コンテンツ更新・改善）、月次LLMO診断とスコアリング、AI検索対応の最新情報反映に使われます。「広報1人分以下」の費用で、専門チームが継続的にサイトを育てます。',
        },
      },
      {
        '@type': 'Question',
        name: '途中で解約できますか？契約期間の縛りはありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'スタンダードプランは半年契約または1年契約、プレミアムプランは1年契約となります。LLMO対策は継続的な運用で効果が積み上がる性質上、最低半年〜1年の継続をお勧めしています。契約期間終了後は、継続・解約をお選びいただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '広告費は別途必要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '広告費は一切不要です。これがHERO AIVOの最大の特徴です。従来のLPは広告運用前提ですが、HERO AIVOのサイトは広告ゼロでもAI検索・自然検索から集客できる設計。「広告をかけ続けないと集客できない」状態から脱却できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'どんな業種でも効果はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。BtoB、BtoC問わず、ほぼ全ての業種で効果があります。特にデジタル施策に力を入れたい中小企業、広告費を削減したい企業、若年層からの問い合わせを増やしたい企業、AI時代に乗り遅れたくない企業に適しています。まずは5万円の診断で、御社の現状と可能性を確認できます。',
        },
      },
      {
        '@type': 'Question',
        name: '既存のホームページはどうなりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'スタンダードプラン（LP制作）の場合は既存HPはそのままで新しいLPを追加します。集客の入口を増やすイメージです。プレミアムプラン（HP+LP新規制作）の場合は新規でHPとLPを制作します。御社の状況に応じて最適なプランをご提案します。',
        },
      },
      {
        '@type': 'Question',
        name: 'SEO対策との違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEOはGoogle検索への対策、LLMOはAI検索への対策です。SEOはGoogleのアルゴリズムに最適化、LLMOはChatGPTなどのAIに理解されやすい構造化を行います。HERO AIVOは両方に対応しています。GoogleでもAIでも見つかる、次世代型のサイトをお届けします。',
        },
      },
      {
        '@type': 'Question',
        name: '具体的にどんな作業をしてくれるのですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '初期制作時はLLMO完全対応のサイト設計・開発、構造化データ・メタ情報の最適配置、チャットボット標準実装、初回コンテンツ作成を行います。月次運用ではLLMO対策の継続実施、コンテンツ更新・改善、LLMO診断とスコアリング、AI検索トレンドの反映を行います。全て自社完結型なので、品質も納期も安心です。',
        },
      },
    ],
  }

  // BreadcrumbList スキーマ（パンくずリスト）
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: SITE_URL,
      },
    ],
  }

  // SoftwareApplication スキーマ（HEROAIVOをツールとしてAIに認識させる）
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: 'HERO AIVO',
    alternateName: ['ヒーローアイボ', 'LLMO診断ツール', 'AI検索最適化ツール'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'マーケティングツール',
    operatingSystem: 'Web',
    description:
      'HERO AIVOは、ChatGPTやPerplexityなどのAI検索エンジンでの表示状況を診断・分析し、LLMO（Large Language Model Optimization）対策を支援するツールです。',
    offers: {
      '@type': 'Offer',
      price: '50000',
      priceCurrency: 'JPY',
      description: 'LLMO診断サービス',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'LLMO診断・スコアリング',
      'AI検索順位チェック',
      'ソースコードレベル深層分析',
      'AI最適化レポート生成',
      '競合サイト比較分析',
      '構造化データ検証',
    ],
    screenshot: `${SITE_URL}/Key_visual_PC.png`,
    softwareVersion: '1.0',
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '20',
      bestRating: '5',
      worstRating: '1',
    },
  }

  // WebPage スキーマ（ページ情報・speakable対応）
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'HERO AIVO | AI検索最適化（LLMO）で広告費0円の集客を実現',
    description:
      'ChatGPTやPerplexityなどのAI検索で自社が表示されやすくなるLLMO対策サービス。広告費0円でも集客できる資産型Webサイトを提供。',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#service`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/Key_visual_PC.png`,
    },
    datePublished: '2024-10-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'ja-JP',
    potentialAction: {
      '@type': 'ReadAction',
      target: [SITE_URL],
    },
    // speakable: 音声アシスタント対応
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.hero-description', '.faq-answer'],
    },
    mainEntity: {
      '@id': `${SITE_URL}/#service`,
    },
  }

  // HowTo スキーマ（LLMO対策の流れ）
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/#howto`,
    name: 'HERO AIVOでLLMO対策を始める方法',
    description:
      'AI検索（ChatGPT、Perplexity等）で見つかりやすいWebサイトを作る3ステップ。広告費0円の集客基盤を構築する方法を解説します。',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'LLMO診断を受ける',
        text: '現状のWebサイトをAI視点で分析・スコアリングする診断サービス（5万円）を受けます。ソースコードレベルでの深層分析を行い、AI最適化スコアを算出。具体的な改善ポイントを把握できます。',
        url: SITE_URL,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'LLMO対応サイトを制作',
        text: '診断結果を基に、AI検索に最適化されたLP（ランディングページ）またはHPを制作します。構造化データ、メタ情報の最適配置、チャットボット標準装備で、AIに「見つけてもらえる」サイトを構築します。',
        url: SITE_URL,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '継続的な運用・改善',
        text: '月次診断とコンテンツ更新で、AI検索での露出を継続的に向上。3ヶ月で課題数値化、6ヶ月〜1年でAI露出向上、2年以降で広告費0円の持続的集客基盤が完成します。',
        url: SITE_URL,
      },
    ],
    totalTime: 'P6M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'JPY',
      value: '150000',
      name: '初期制作費',
    },
    tool: {
      '@type': 'HowToTool',
      name: 'HERO AIVO診断ツール',
    },
  }

  // 全スキーマを配列でまとめる
  const schemas = [
    organizationSchema,
    websiteSchema,
    serviceSchema,
    faqSchema,
    breadcrumbSchema,
    softwareApplicationSchema,
    webPageSchema,
    howToSchema,
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
