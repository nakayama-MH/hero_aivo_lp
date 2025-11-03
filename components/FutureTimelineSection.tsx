import Image from 'next/image'

export default function FutureTimelineSection() {
  const phases = [
    {
      period: 'ご利用開始から 3ヶ月以内',
      benefits: [
        {
          text: '自社サイトの課題を\n数値で明確に',
          icon: '/icon-analysis.png',
        },
        {
          text: '心理的安心感の獲得し\nデジタル施策を推進可能に',
          icon: '/icon-heart.png',
        },
        {
          text: '定期的なコンテンツ更新による\n顧客からの安心感',
          icon: '/icon-thumbsup.png',
        },
      ],
      headline: 'AI時代への不安を解消',
      bgImage: '/future-timeline-bg.png',
    },
    {
      period: 'ご利用開始から 6ヶ月～1年',
      benefits: [
        {
          text: 'AI検索での露出が向上し\nお問い合わせ増加',
          icon: '/icon-phone.png',
        },
        {
          text: 'コンテンツ蓄積による\n情報資産の形成',
          icon: '/icon-diamond.png',
        },
        {
          text: '先行者ポジションを築き\n成長カーブを実感',
          icon: '/icon-chart.png',
        },
      ],
      headline: '検索エンジンがあなたの見方に',
      bgImage: '/future-timeline-bg2.png',
    },
    {
      period: 'ご利用開始から 2年以降',
      benefits: [
        {
          text: '広告費に頼らない\n強固な集客基盤の完成',
          icon: '/icon-search.png',
        },
        {
          text: '継続的に価値を生む\nデジタル資産を所有',
          icon: '/icon-treasure.png',
        },
        {
          text: '豊富なコンテンツと集客力により\n市場での揺るぎない権威性を確立',
          icon: '/icon-star.png',
        },
      ],
      headline: '自動で稼ぎ続ける仕組みの完成',
      bgImage: '/future-timeline-bg2.png',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="bg-gradient-to-r from-[#ffd4d4] to-[#ffe4c4] py-8 sm:py-10 md:py-12 mb-8 sm:mb-12 md:mb-16">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black px-4">
          <span className="whitespace-nowrap">ご利用された方の</span>
          <span className="bg-gradient-to-r from-[#fd0000] to-[#ff971d] bg-clip-text text-transparent whitespace-nowrap">未来</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* タイムラインフェーズ */}
        <div className="space-y-6">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex}>
              <div className="overflow-hidden">
                {/* 期間ヘッダー */}
                <div className="bg-[#f62a2a] text-white text-center py-4 sm:py-5 md:py-6">
                  <h3 className="font-bold">
                    <span className="text-lg sm:text-xl md:text-2xl">ご利用開始から </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl">{phase.period.replace('ご利用開始から ', '')}</span>
                  </h3>
                </div>

                {/* コンテンツエリア */}
                <div
                  className="bg-gray-200 p-6 sm:p-8 md:p-12 bg-cover bg-center"
                  style={phase.bgImage ? { backgroundImage: `url(${phase.bgImage})` } : {}}
                >
                  {/* ベネフィットグリッド */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
                    {phase.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex flex-col items-center text-center"
                      >
                        {/* 円形プレースホルダー */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white mb-6 flex-shrink-0 flex items-center justify-center">
                          {benefit.icon && (
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                              <Image
                                src={benefit.icon}
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>

                        {/* ベネフィット説明 */}
                        <p className="text-base sm:text-lg text-black font-medium leading-relaxed whitespace-pre-line">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* フェーズヘッドライン */}
                  <div className="text-center">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#fd0000] to-[#ff971d] bg-clip-text text-transparent">
                      {phase.headline}
                    </h4>
                  </div>
                </div>
              </div>

              {/* 矢印（最後のフェーズ以外） */}
              {phaseIndex < phases.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-0 h-0 border-l-[40px] sm:border-l-[60px] border-l-transparent border-r-[40px] sm:border-r-[60px] border-r-transparent border-t-[20px] sm:border-t-[30px] border-t-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
