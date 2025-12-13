/**
 * ArticleStructuredData.tsx
 * 記事ページ専用のJSON-LD構造化データコンポーネント
 *
 * LLMO最適化のための記事構造化データを出力
 * - Article: 記事情報
 * - BreadcrumbList: 記事用パンくずリスト
 */

import { Article } from '@/types/article'

const SITE_URL = 'https://hero-aivo.com'

interface ArticleStructuredDataProps {
  article: Article
}

export default function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  // HTMLタグを除去してプレーンテキストに変換
  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '').trim()
  }

  // 記事の説明文を生成（150文字以内）
  const description = stripHtml(article.content).substring(0, 150)

  // Article スキーマ（記事情報）
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/articles/${article.id}#article`,
    headline: article.title,
    description: description,
    image: article.eyecatch?.url || `${SITE_URL}/Key_visual_PC.png`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    dateCreated: article.createdAt,
    // 著者・発行者は親スキーマを参照
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/articles/${article.id}`,
    },
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    inLanguage: 'ja-JP',
    // 記事のトピック（LLMO関連）
    about: [
      {
        '@type': 'Thing',
        name: 'LLMO（Large Language Model Optimization）',
      },
      {
        '@type': 'Thing',
        name: 'AI検索最適化',
      },
    ],
    // キーワード
    keywords: ['LLMO', 'AI検索最適化', 'ChatGPT', 'Perplexity', 'SEO', 'HERO AIVO'],
    // 記事カテゴリ
    articleSection: 'LLMO・AI検索最適化コラム',
    // 言語アシスタント対応
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.prose h2', '.prose p:first-of-type'],
    },
  }

  // BreadcrumbList スキーマ（記事用パンくずリスト）
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'コラム',
        item: `${SITE_URL}/articles`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/articles/${article.id}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
