export default function FeaturesSection() {
  const features = [
    {
      number: '1',
      title: ['独自の診断ツールで', '現状把握'],
      description: [
        '現状の分析を基に、定量的に改',
        '善状況を評価します。',
        '低コストで貴社のWebサイトを',
        '診断します。',
      ],
    },
    {
      number: '2',
      title: ['24時間365日対応', 'チャットボット標準装備'],
      description: [
        '会話形式でのFAQ対応で、24時',
        '間365日対応可能なチャットボ',
        'ットをオプションではなく、全',
        'てのWebサイトに搭載します。',
      ],
    },
    {
      number: '3',
      title: ['AI時代に適した', 'Webサイトの作成と運用'],
      description: [
        '診断結果を基に、ワンクリック',
        '検索にも対応したAIに最適化さ',
        'れたWebサイトをフルスクラッ',
        'チで作成、運用まで行います。',
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-24 text-black whitespace-nowrap">
          機能のご紹介
        </h2>

        {/* 機能グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.number} className="text-center md:text-left">
              {/* 番号 */}
              <div className="font-bold mb-6 flex items-start justify-center md:justify-start">
                <span className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#fd0000] to-[#ff971d] bg-clip-text text-transparent">#</span>
                <span className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#fd0000] to-[#ff971d] bg-clip-text text-transparent">{feature.number}</span>
              </div>

              {/* タイトル */}
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                {feature.title.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </h3>

              {/* 説明文 */}
              <p className="text-base md:text-lg text-black leading-relaxed">
                {feature.description.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < feature.description.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
