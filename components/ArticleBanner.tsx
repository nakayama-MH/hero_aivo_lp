'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types/article'

export default function ArticleBanner() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('🔍 Fetching articles from /api/articles...')
        const response = await fetch('/api/articles')
        console.log('📡 Response status:', response.status)
        const data = await response.json()
        console.log('📦 Data received:', data)
        console.log('📰 Number of articles:', data.contents?.length || 0)
        setArticles(data.contents || [])
      } catch (error) {
        console.error('❌ Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (isLoading) {
    console.log('⏳ Loading articles...')
    return null
  }

  if (articles.length === 0) {
    console.log('⚠️ No articles found')
    return null
  }

  // アイキャッチがある記事のみをフィルタリング
  const articlesWithImages = articles.filter(article => article.eyecatch?.url)
  console.log('🖼️ Articles with images:', articlesWithImages.length)

  if (articlesWithImages.length === 0) {
    console.log('⚠️ No articles with eyecatch images')
    return null
  }

  console.log('✅ Rendering banner with', articlesWithImages.length, 'articles')

  // 無限ループのために配列を3回複製（よりスムーズなループのため）
  const duplicatedArticles = [
    ...articlesWithImages,
    ...articlesWithImages,
    ...articlesWithImages,
  ]

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 h-20 md:h-[100px] overflow-hidden bg-white shadow-sm">
      <div className="relative w-full h-full">
        <div className="animate-scroll-banner">
          {duplicatedArticles.map((article, index) => (
            <Link
              key={`${article.id}-${index}`}
              href={`/articles/${article.id}`}
              className="flex-shrink-0 h-full block group"
            >
              {article.eyecatch && (
                <img
                  src={article.eyecatch.url}
                  alt={article.title}
                  className="h-full w-auto object-contain group-hover:opacity-80 transition-opacity"
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-banner {
          display: flex;
          animation: scroll 35s linear infinite;
          width: fit-content;
          height: 100%;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll-banner:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
