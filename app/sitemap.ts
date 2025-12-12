import { MetadataRoute } from 'next'
import { client } from '@/lib/microcms'

/**
 * sitemap.xml 動的生成
 *
 * - トップページ（priority: 1.0）
 * - 記事ページ（microCMS連携、priority: 0.7）
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hero-aivo.com'

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // 動的ページ（microCMS記事）
  try {
    const articles = await client.getList({
      endpoint: 'articles',
      queries: { limit: 100 },
    })

    const articlePages: MetadataRoute.Sitemap = articles.contents.map(
      (article: { id: string; updatedAt?: string; publishedAt?: string }) => ({
        url: `${baseUrl}/articles/${article.id}`,
        lastModified: new Date(article.updatedAt || article.publishedAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    )

    return [...staticPages, ...articlePages]
  } catch {
    // microCMS接続エラー時は静的ページのみ返す
    return staticPages
  }
}
