import Image from 'next/image'
import Link from 'next/link'

export default function AuthorSection() {
  return (
    <section className="bg-gray-50 rounded-xl p-5 md:p-6 mt-12">
      <div className="flex items-center gap-4">
        {/* ロゴ */}
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
          <Image
            src="/metaheroes_logo.png"
            alt="株式会社Meta Heroes"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        {/* 情報 */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900">株式会社Meta Heroes</p>
          <p className="text-sm text-gray-600 mt-0.5">
            「HEROをつくるHEROに」AI×メタバースで社会課題を解決
          </p>
        </div>

        {/* CTAボタン */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center px-4 py-2 bg-[#f62a2a] text-white text-sm font-medium rounded-lg hover:bg-[#d92424] transition-colors flex-shrink-0"
        >
          無料相談
        </Link>
      </div>

      {/* モバイル用CTAボタン */}
      <Link
        href="/contact"
        className="sm:hidden mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#f62a2a] text-white text-sm font-medium rounded-lg hover:bg-[#d92424] transition-colors"
      >
        無料相談を申し込む
      </Link>
    </section>
  )
}
