import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-16 md:pt-20 mb-0 z-0">
      {/* 背景画像 - モバイル用 */}
      <div className="w-full h-[400px] sm:h-[600px] lg:h-[800px] relative block sm:hidden">
        <Image
          src="/Key Visual_mobile.png"
          alt="AIに見つけてもらうWebサイトに"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 背景画像 - デスクトップ用 */}
      <div className="w-full relative hidden sm:block">
        <Image
          src="/Key_visual_PC.png"
          alt="AIに見つけてもらうWebサイト制作"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
