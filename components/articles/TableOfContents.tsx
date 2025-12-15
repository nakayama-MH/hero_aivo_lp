interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

function extractHeadings(html: string): TOCItem[] {
  const headingRegex = /<(h[23])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/\1>/gi
  const headings: TOCItem[] = []
  let match

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1].charAt(1))
    const rawText = match[3]
    // HTMLタグを除去してプレーンテキストに
    const text = rawText.replace(/<[^>]*>/g, '').trim()
    // IDがあればそれを使用、なければテキストからID生成
    const existingId = match[2]
    const id =
      existingId ||
      text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf-]/g, '')

    if (text) {
      headings.push({ id, text, level })
    }
  }

  return headings
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content)

  if (headings.length === 0) return null

  return (
    <nav className="bg-gray-50 rounded-xl p-6 mb-10">
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-[#f62a2a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        目次
      </h2>
      <ol className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={heading.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${heading.id}`}
              className="text-gray-600 hover:text-[#f62a2a] transition-colors block py-1 text-sm leading-relaxed"
            >
              {heading.level === 2 && (
                <span className="text-[#f62a2a] mr-2">●</span>
              )}
              {heading.level === 3 && (
                <span className="text-gray-400 mr-2">○</span>
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
