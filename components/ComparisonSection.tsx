export default function ComparisonSection() {
  const oldWebsite = [
    '広告運用前提の「広告頼み」の集客設計',
    '広告を止めると、集客もストップ',
    '作ったら終わりの単発投資で、価値は時間と共に目減り',
  ]

  const newWebsite = [
    '広告に依存しない「自力集客型」の仕組み',
    'AI検索経由で、自動でお客様が継続的に訪問',
    '時間と共に価値が育つ生きた集客資産',
  ]

  return (
    <section className="pt-16 sm:pt-24 md:pt-48 pb-12 sm:pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* セクションタイトル */}
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <p className="text-base mb-1 text-black font-bold whitespace-nowrap">
              ＼そもそも／
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              <span className="whitespace-nowrap">今までのWebサイトと</span>
              <span className="whitespace-nowrap">何が違うの？</span>
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* 従来のWebサイト */}
          <div className="overflow-hidden">
            {/* ヘッダー */}
            <div className="bg-gray-800 text-white text-center py-4 sm:py-5 md:py-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                従来のWebサイト
              </h3>
            </div>

            {/* コンテンツ */}
            <div className="bg-gray-200 p-6 sm:p-8 md:p-12">
              <ul className="space-y-6">
                {oldWebsite.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex-shrink-0">
                      ✗
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl text-gray-900 pt-1 font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 私たちの提供するWebサイト */}
          <div className="overflow-hidden">
            {/* ヘッダー */}
            <div className="bg-[#f62a2a] text-white text-center py-4 sm:py-5 md:py-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                私たちの提供するWebサイト
              </h3>
            </div>

            {/* コンテンツ */}
            <div className="bg-red-100 p-6 sm:p-8 md:p-12">
              <ul className="space-y-6">
                {newWebsite.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl text-gray-900 pt-1 font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
