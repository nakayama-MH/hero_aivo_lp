import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/lib/microcms'
import { Article, ArticleListResponse } from '@/types/article'
import ArticleStructuredData from '@/components/ArticleStructuredData'

// 新規コンポーネント
import Breadcrumb from '@/components/articles/Breadcrumb'
import ReadingTime from '@/components/articles/ReadingTime'
import TableOfContents from '@/components/articles/TableOfContents'
import ShareButtons from '@/components/articles/ShareButtons'
import AuthorSection from '@/components/articles/AuthorSection'
import RelatedArticles from '@/components/articles/RelatedArticles'
import ArticleNavigation from '@/components/articles/ArticleNavigation'

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

async function getAllArticles(): Promise<Article[]> {
  try {
    const data = await client.get<ArticleListResponse>({
      endpoint: 'articles',
      queries: { limit: 100, orders: '-publishedAt' },
    })
    return data.contents
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

// 前後の記事を取得
function getAdjacentArticles(articles: Article[], currentId: string) {
  const currentIndex = articles.findIndex((a) => a.id === currentId)
  if (currentIndex === -1) {
    return { prev: null, next: null }
  }
  return {
    // 新しい記事が前、古い記事が後ろ
    prev: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null,
    next: currentIndex > 0 ? articles[currentIndex - 1] : null,
  }
}

// 見出しにidを自動付与
function addHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])([^>]*)>(.*?)<\/\1>/gi,
    (match, tag, attrs, content) => {
      // すでにid属性がある場合はそのまま
      if (/id=["'][^"']*["']/.test(attrs)) {
        return match
      }
      // テキストからIDを生成
      const text = content.replace(/<[^>]*>/g, '').trim()
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf-]/g, '')
      return `<${tag}${attrs} id="${id}">${content}</${tag}>`
    }
  )
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

  // 記事と記事一覧を並列取得
  const [article, allArticles] = await Promise.all([
    getArticle(id),
    getAllArticles(),
  ])

  if (!article) {
    notFound()
  }

  const { prev, next } = getAdjacentArticles(allArticles, id)
  const processedContent = addHeadingIds(article.content)
  const articleUrl = `${SITE_URL}/articles/${id}`

  return (
    <>
      {/* 記事専用の構造化データ */}
      <ArticleStructuredData article={article} />

      <article className="flex-1 bg-white">
        <div className="pt-24 md:pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            {/* パンくずリスト */}
            <Breadcrumb articleTitle={article.title} />

            {/* アイキャッチ画像 */}
            {article.eyecatch && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={article.eyecatch.url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* メタ情報（公開日 + 読了時間） */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <time className="text-sm text-gray-500 font-medium">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <ReadingTime content={article.content} />
            </div>

            {/* タイトル */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              {article.title}
            </h1>

            {/* SNSシェアボタン（上部） */}
            <div className="mb-10">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>

            {/* 目次 */}
            <TableOfContents content={processedContent} />

            {/* 本文 */}
            <div
              className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-a:transition-colors prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* SNSシェアボタン（下部） */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>

            {/* 著者情報 */}
            <AuthorSection />

            {/* 前後記事ナビゲーション */}
            <ArticleNavigation prevArticle={prev} nextArticle={next} />

            {/* 関連記事 */}
            <RelatedArticles currentArticleId={id} articles={allArticles} />
          </div>
        </div>
      </article>
    </>
  )
}
