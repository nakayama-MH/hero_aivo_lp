'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Article } from '@/types/article'

export default function ArticleModal() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        // 最新3記事のみ取得
        setArticles((data.contents || []).slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // 日付フォーマット関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}.${month}.${day}`
  }

  if (isLoading || articles.length === 0) {
    return null
  }

  return (
    <>
      {/* モーダルオーバーレイ（開いているときのみ） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* モーダルコンテナ */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col-reverse">
        {/* 開閉ボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center gap-1.5 px-4 py-2
            bg-gradient-to-r from-[#f62a2a] to-[#d91a1a]
            text-white font-semibold rounded-full
            shadow-md hover:shadow-lg hover:scale-[1.03]
            active:scale-[0.97]
            transition-all duration-200
            backdrop-blur-sm
            ${isOpen ? 'mt-3' : ''}
          `}
          aria-label={isOpen ? 'コラムを閉じる' : 'コラムを開く'}
        >
          <span className="text-xs sm:text-sm tracking-wide">コラム</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* モーダルコンテンツ */}
        <div
          className={`
            bg-white rounded-2xl shadow-2xl overflow-hidden
            transition-all duration-300 ease-out
            ${isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
            }
          `}
          style={{ width: '340px', maxWidth: 'calc(100vw - 2rem)' }}
        >
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-[#f62a2a] via-[#f83d3d] to-[#d91a1a] px-5 py-4">
            <h3 className="text-lg font-bold text-white">
              最新コラム
            </h3>
          </div>

          {/* 記事リスト */}
          <div className="p-4">
            <div className="space-y-2">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className={`
                    block p-4 rounded-xl
                    hover:bg-gray-50
                    transition-all duration-200
                    group border border-transparent
                    hover:border-[#f62a2a]/20
                    hover:shadow-md
                    ${isOpen ? 'animate-slideUp' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-xs font-medium text-gray-500 mb-2">
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="text-sm font-bold text-gray-800 group-hover:text-[#f62a2a] transition-colors line-clamp-2 leading-relaxed">
                    {article.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
