import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/microcms'
import { Article } from '@/types/article'
import ArticleStructuredData from '@/components/ArticleStructuredData'

const SITE_URL = 'https://hero-aivo.com'
const COMPANY_NAME = '株式会社Meta Heroes'
const COMPANY_URL = 'https://meta-heroes.co.jp/'
const TWITTER_HANDLE = '@MetaHeroes_100'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

async function getArticle(id: string): Promise<Article | null> {
  try {
    const article = await client.get<Article>({
      endpoint: 'articles',
      contentId: id,
    })
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    return {
      title: '記事が見つかりません',
    }
  }

  // HTMLタグを除去してプレーンテキストに変換
  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '').trim()
  }

  const description = stripHtml(article.content).substring(0, 150)
  const articleUrl = `${SITE_URL}/articles/${id}`

  return {
    // 基本メタデータ
    title: article.title,
    description: description,

    // E-E-A-T対策（専門性・権威性・信頼性）
    authors: [{ name: COMPANY_NAME, url: COMPANY_URL }],

    // 正規URL設定
    alternates: {
      canonical: articleUrl,
    },

    // OGP（Open Graph Protocol）設定 - 記事タイプ
    openGraph: {
      type: 'article',
      title: article.title,
      description: description,
      url: articleUrl,
      siteName: 'HERO AIVO',
      locale: 'ja_JP',
      images: article.eyecatch
        ? [
            {
              url: article.eyecatch.url,
              width: article.eyecatch.width,
              height: article.eyecatch.height,
              alt: article.title,
            },
          ]
        : [
            {
              url: `${SITE_URL}/Key_visual_PC.png`,
              width: 1200,
              height: 630,
              alt: 'HERO AIVO',
            },
          ],
      // 記事固有のOGPプロパティ
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [COMPANY_NAME],
      tags: ['LLMO', 'AI検索最適化', 'ChatGPT', 'Perplexity', 'SEO'],
    },

    // Twitter Card設定
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: article.title,
      description: description,
      images: article.eyecatch?.url || `${SITE_URL}/Key_visual_PC.png`,
    },

    // 検索エンジン制御
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* 記事専用の構造化データ */}
      <ArticleStructuredData article={article} />

      <article className="flex-1 bg-white">
      <div className="pt-24 md:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#f62a2a] hover:text-[#d92424] mb-8 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ホームに戻る
          </Link>

          {article.eyecatch && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={article.eyecatch.url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <time className="text-sm text-gray-500 font-medium">
            {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-12 text-gray-900 leading-tight">
            {article.title}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-a:transition-colors prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
      </article>
    </>
  )
}
