'use client'

import { useContactModal } from '@/contexts/ContactModalContext'

export default function CTASection() {
  const { openModal } = useContactModal()

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#f62a2a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* ヘッドライン */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 sm:mb-12 md:mb-14">
            AIに選ばれる企業への最初の一歩を。
          </h2>

          {/* CTAボタン */}
          <button
            onClick={openModal}
            className="inline-block bg-white text-[#f62a2a] text-xl sm:text-2xl md:text-3xl font-bold px-12 sm:px-16 md:px-20 py-5 sm:py-6 md:py-7 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            無料相談
          </button>
        </div>
      </div>
    </section>
  )
}
