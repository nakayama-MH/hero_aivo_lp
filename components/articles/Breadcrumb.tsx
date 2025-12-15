import Link from 'next/link'

interface BreadcrumbProps {
  articleTitle: string
}

export default function Breadcrumb({ articleTitle }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-[#f62a2a] transition-colors"
          >
            ホーム
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li>
          <Link
            href="/#column"
            className="text-gray-500 hover:text-[#f62a2a] transition-colors"
          >
            コラム
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li className="text-gray-700 font-medium truncate max-w-[200px] md:max-w-[400px]">
          {articleTitle}
        </li>
      </ol>
    </nav>
  )
}
