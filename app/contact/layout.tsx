import type { Metadata } from 'next'

const SITE_URL = 'https://hero-aivo.com'

export const metadata: Metadata = {
  title: '無料相談フォーム',
  description:
    'AI検索最適化（LLMO）について無料でご相談いただけます。HERO AIVOは、ChatGPTやPerplexityなどのAI検索で見つかりやすいWebサイトを制作。広告費0円で集客できる資産型サイトを提供します。',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${SITE_URL}/contact`,
    title: '無料相談フォーム | HERO AIVO',
    description:
      'AI検索最適化（LLMO）について無料でご相談。広告費0円で集客できる資産型Webサイトを提供します。',
    siteName: 'HERO AIVO',
    images: [
      {
        url: `${SITE_URL}/Key_visual_PC.png`,
        width: 1200,
        height: 630,
        alt: 'HERO AIVO - 無料相談フォーム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '無料相談フォーム | HERO AIVO',
    description:
      'AI検索最適化（LLMO）について無料でご相談。広告費0円で集客できる資産型Webサイトを提供します。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
