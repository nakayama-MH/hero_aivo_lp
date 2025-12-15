import Link from 'next/link'
import { Article } from '@/types/article'

interface ArticleNavigationProps {
  prevArticle?: Article | null
  nextArticle?: Article | null
}

export default function ArticleNavigation({
  prevArticle,
  nextArticle,
}: ArticleNavigationProps) {
  if (!prevArticle && !nextArticle) return null

  return (
    <nav className="mt-12 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 前の記事 */}
        <div>
          {prevArticle ? (
            <Link
              href={`/articles/${prevArticle.id}`}
              className="group flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors h-full"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#f62a2a] transition-colors flex-shrink-0"
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
              <div className="min-w-0">
                <span className="text-xs text-gray-500 block mb-1">
                  前の記事
                </span>
                <span className="font-medium text-gray-900 group-hover:text-[#f62a2a] transition-colors line-clamp-2 text-sm">
                  {prevArticle.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* 次の記事 */}
        <div>
          {nextArticle ? (
            <Link
              href={`/articles/${nextArticle.id}`}
              className="group flex items-center justify-end p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors h-full text-right"
            >
              <div className="min-w-0">
                <span className="text-xs text-gray-500 block mb-1">
                  次の記事
                </span>
                <span className="font-medium text-gray-900 group-hover:text-[#f62a2a] transition-colors line-clamp-2 text-sm">
                  {nextArticle.title}
                </span>
              </div>
              <svg
                className="w-5 h-5 ml-3 text-gray-400 group-hover:text-[#f62a2a] transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </nav>
  )
}
