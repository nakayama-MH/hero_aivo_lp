import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/microcms'
import { Article } from '@/types/article'

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

  return {
    title: `${article.title} | HERO AIVO`,
    description: article.content.substring(0, 150),
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 150),
      images: article.eyecatch ? [article.eyecatch.url] : [],
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
    <div className="min-h-screen bg-gray-50">
      <div className="pt-36 md:pt-44 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#f62a2a] hover:text-[#d92424] mb-8 transition-colors"
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

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {article.eyecatch && (
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={article.eyecatch.url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="p-6 md:p-12">
              <time className="text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-gray-900">
                {article.title}
              </h1>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
