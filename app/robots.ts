import { MetadataRoute } from 'next'

/**
 * robots.txt 動的生成
 *
 * LLMO対策として、AIクローラーを明示的に許可
 * - GPTBot (OpenAI)
 * - ChatGPT-User (OpenAI)
 * - Google-Extended (Google AI)
 * - CCBot (Common Crawl)
 * - anthropic-ai (Anthropic)
 * - Claude-Web (Anthropic)
 * - PerplexityBot (Perplexity AI)
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hero-aivo.com'

  return {
    rules: [
      // 一般的なクローラー
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/diagnostic/'],
      },
      // OpenAI GPTBot
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // OpenAI ChatGPT User
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Google AI (Gemini等)
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Common Crawl (多くのAIモデルの学習データソース)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Anthropic AI
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Anthropic Claude Web
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Bing AI
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
