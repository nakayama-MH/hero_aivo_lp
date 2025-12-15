import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types/article'

interface RelatedArticlesProps {
  currentArticleId: string
  articles: Article[]
}

export default function RelatedArticles({
  currentArticleId,
  articles,
}: RelatedArticlesProps) {
  // 現在の記事を除外し、最新3件を取得
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3)

  if (relatedArticles.length === 0) return null

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-[#f62a2a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        関連記事
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            {article.eyecatch ? (
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.eyecatch.url}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="h-40 bg-gradient-to-br from-[#f62a2a] to-[#ff6b6b] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">A</span>
              </div>
            )}
            <div className="p-4">
              <time className="text-xs text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <h3 className="mt-2 font-bold text-gray-900 line-clamp-2 group-hover:text-[#f62a2a] transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
