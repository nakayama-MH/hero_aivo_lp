interface ReadingTimeProps {
  content: string
}

function calculateReadingTime(html: string): number {
  // HTMLタグを除去してテキストのみ取得
  const text = html.replace(/<[^>]*>/g, '').trim()
  const charCount = text.length
  // 日本語の平均読了速度: 約400〜600文字/分 → 500文字/分で計算
  const charsPerMinute = 500
  return Math.max(1, Math.ceil(charCount / charsPerMinute))
}

export default function ReadingTime({ content }: ReadingTimeProps) {
  const minutes = calculateReadingTime(content)

  return (
    <span className="inline-flex items-center text-sm text-gray-500">
      <svg
        className="w-4 h-4 mr-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      約{minutes}分で読めます
    </span>
  )
}
