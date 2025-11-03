'use client'

import Image from 'next/image'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function Header() {
  const { openModal } = useContactModal()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* 左側：ロゴ */}
          <div className="flex items-center">
            <div className="relative h-10 md:h-14 w-auto">
              <Image
                src="/HEROAIVO_logo.png"
                alt="HERO AIVO - AIに選ばれる、企業の見つかる力"
                width={300}
                height={80}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* 右側：無料相談ボタン */}
          <div>
            <button
              onClick={openModal}
              className="bg-[#f62a2a] hover:bg-[#d92424] text-white font-bold py-2 px-4 text-base sm:py-3 sm:px-8 sm:text-lg rounded-full transition-colors duration-200"
            >
              無料相談
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
