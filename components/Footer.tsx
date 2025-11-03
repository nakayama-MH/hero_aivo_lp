'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-6 md:gap-12 lg:gap-16 mb-8">
          {/* 左側：Meta Heroes ロゴ */}
          <div className="flex items-center">
            <Image
              src="/metaheroes_logo.png"
              alt="Meta Heroes"
              width={350}
              height={105}
              className="h-16 md:h-24 w-auto"
            />
          </div>

          {/* リンク */}
          <div className="flex gap-6 md:gap-12 text-base md:text-lg">
            <a
              href="https://meta-heroes.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors underline decoration-1 underline-offset-4"
            >
              会社概要
            </a>
            <a
              href="https://meta-heroes.co.jp/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors underline decoration-1 underline-offset-4"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center text-sm text-gray-300 mt-8">
          ©2021-2025 Meta Heroes,Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
