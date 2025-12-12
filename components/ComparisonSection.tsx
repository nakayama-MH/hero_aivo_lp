export default function ComparisonSection() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-48 pb-12 sm:pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* セクションタイトル */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl mb-2 text-black font-bold whitespace-nowrap">
              ＼そもそも／
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              <span className="whitespace-nowrap">今までのWebサイトと</span>
              <span className="whitespace-nowrap">何が違うの？</span>
            </h2>
          </div>
        </div>

        {/* 説明カード */}
        <div className="bg-pink-50 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* 左側：チャット風UI */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="w-full max-w-sm">
                {/* お客さんのメッセージ */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 mt-1 whitespace-nowrap">お客様</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                    <p className="text-gray-700">近くで評判の良いリフォーム業者はどこ？</p>
                  </div>
                </div>

                {/* AIのメッセージ */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#f62a2a] rounded-2xl rounded-tr-none px-4 py-3 shadow-sm">
                    <p className="text-white font-bold">それなら、〇〇社（貴社）が<br />おすすめです。</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xl">✦</span>
                    </div>
                    <span className="text-sm text-red-500 mt-1">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：説明テキスト */}
            <div className="w-full lg:w-3/5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
                AIがあなたの代わりに<br />
                Webサイトを「オススメ」してくれます
              </h3>

              <p className="text-sm sm:text-base text-gray-700 mb-4">
                今までのホームページは、人間が検索して探すものでした。
              </p>

              <p className="text-sm sm:text-base text-gray-700 mb-4">
                私たちが作るのは、<span className="bg-yellow-200 font-bold">「AIに好かれるホームページ」</span>です。<br />
                AIに好かれると、誰かがスマホで質問した時に、<br />
                あなたのお店や会社をAIが優先的に紹介してくれます。
              </p>

              <div className="flex items-center gap-2">
                <span className="text-red-500 text-2xl">✓</span>
                <span className="text-base sm:text-lg font-bold text-red-500">
                  だから、広告を出さなくても集客できる！
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
