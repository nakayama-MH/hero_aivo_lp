import Image from 'next/image'

export default function PromoBanner() {
  return (
    <section className="w-full">
      <Image
        src="/バナー.png"
        alt="10社限定 先行導入募集 - 一括払いで10万円割引"
        width={1920}
        height={200}
        className="w-full h-auto"
      />
    </section>
  )
}
