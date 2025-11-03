import { NextResponse } from 'next/server'
import { client } from '@/lib/microcms'
import { ArticleListResponse } from '@/types/article'

export async function GET() {
  try {
    const data = await client.get<ArticleListResponse>({
      endpoint: 'articles',
      queries: {
        limit: 20,
        orders: '-publishedAt',
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}
