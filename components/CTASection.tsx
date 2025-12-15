import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#f62a2a]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#f62a2a]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center">
          {/* サブテキスト */}
          <p className="text-[#f62a2a] font-medium text-sm md:text-base tracking-wider mb-4">
            CONTACT US
          </p>

          {/* ヘッドライン */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            AIに選ばれる企業への
            <br className="hidden sm:block" />
            最初の一歩を。
          </h2>

          {/* 説明文 */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            ChatGPT・Perplexityなど、AI検索で選ばれる企業になるための無料相談を承っています。
          </p>

          {/* CTAボタン */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#f62a2a] to-[#ff4757] text-white text-lg md:text-xl font-bold px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl shadow-red-500/20 hover:shadow-red-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            無料相談を申し込む
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* 補足 */}
          <p className="text-gray-500 text-sm mt-6">
            ご相談は無料です。お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  )
}
