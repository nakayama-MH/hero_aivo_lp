export interface Article {
  id: string
  title: string
  content: string
  eyecatch?: {
    url: string
    height: number
    width: number
  }
  publishedAt: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}

export interface ArticleListResponse {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}
