'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* 上部のアクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f62a2a] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* 左側：ロゴ + キャッチ */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/metaheroes_logo.png"
              alt="Meta Heroes"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-gray-400 text-sm">
              HEROをつくるHEROに
            </p>
          </div>

          {/* 右側：リンク */}
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 md:gap-8">
            <a
              href="https://meta-heroes.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-colors relative group whitespace-nowrap"
            >
              会社概要
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f62a2a] transition-all group-hover:w-full" />
            </a>
            <a
              href="https://meta-heroes.co.jp/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-colors relative group whitespace-nowrap"
            >
              プライバシーポリシー
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f62a2a] transition-all group-hover:w-full" />
            </a>
            <a
              href="https://meta-heroes.co.jp/contact-privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-colors relative group whitespace-nowrap"
            >
              個人情報の取り扱い
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f62a2a] transition-all group-hover:w-full" />
            </a>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-colors relative group whitespace-nowrap"
            >
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f62a2a] transition-all group-hover:w-full" />
            </Link>
          </nav>
        </div>

        {/* 区切り線 */}
        <div className="my-8 md:my-10 border-t border-gray-800" />

        {/* コピーライト */}
        <div className="text-center text-xs text-gray-500">
          © 2021-2025 Meta Heroes, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
