import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '無料診断 | HERO AIVO',
  description: 'あなたのWebサイトのAI検索対応状況を診断します。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DiagnosticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
