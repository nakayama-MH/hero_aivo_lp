import Image from 'next/image'

export default function StrengthsSection() {
  const strengths = [
    {
      id: 1,
      image: '/強み1.png',
      alt: 'AIが勝手に連れてくる！【持続的な集客力】',
    },
    {
      id: 2,
      image: '/強み2.png',
      alt: 'お客様を逃さない！【24時間自動接客】',
    },
    {
      id: 3,
      image: '/強み3.png',
      alt: '売却時も評価される！【資産価値のあるWebサイト】',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-100">
      <div className="w-full">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-[#f62a2a]">
          <span className="whitespace-nowrap">HERO AIVO の</span>
          <span className="whitespace-nowrap">3つの強み</span>
        </h2>

        {/* 強み画像リスト */}
        <div className="space-y-0">
          {strengths.map((strength) => (
            <div
              key={strength.id}
              className="flex justify-center"
            >
              <div className="w-full">
                <Image
                  src={strength.image}
                  alt={strength.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  sizes="100vw"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
