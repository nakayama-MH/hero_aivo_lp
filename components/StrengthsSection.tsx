import Image from 'next/image'

export default function StrengthsSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* 赤い背景の上部（丸みを帯びた形） */}
      <div className="bg-[#f62a2a] rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[120px] pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-24">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-white">
          <span className="whitespace-nowrap">HERO AIVOの</span>
          <span className="whitespace-nowrap">3つの魅力</span>
        </h2>

        {/* 魅力1 - 右から生える */}
        <div className="flex justify-end mb-8">
          <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] relative">
            <div className="bg-white rounded-l-3xl py-6 sm:py-10 md:py-14 pl-4 sm:pl-8 md:pl-12 pr-4 sm:pr-6 shadow-lg min-h-[160px] sm:min-h-[200px] md:min-h-[240px]">
              <div className="pr-[40%] sm:pr-[42%] md:pr-[45%]">
                <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                  <span className="text-gray-400 text-base sm:text-xl">#</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f62a2a]">1</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">
                  検索にもAIにも強い
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                  Google検索はもちろん、最近増えている「AIへの質問」からも、あなたのお店を見つけてもらえるようになります。
                </p>
              </div>
            </div>
            {/* 画像 */}
            <div className="absolute right-[2%] sm:right-[5%] top-1/2 -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[260px] lg:w-[340px]">
              <Image
                src="/魅力01.png"
                alt="検索にもAIにも強い"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* 魅力2 - 左から生える */}
        <div className="flex justify-start my-8">
          <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] relative">
            <div className="bg-white rounded-r-3xl py-6 sm:py-10 md:py-14 pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-6 shadow-lg min-h-[160px] sm:min-h-[200px] md:min-h-[240px]">
              <div className="pl-[40%] sm:pl-[42%] md:pl-[45%]">
                <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                  <span className="text-gray-400 text-base sm:text-xl">#</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f62a2a]">2</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">
                  広告費0円を目指せる
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                  AIが勝手に紹介してくれるので、毎月かかっていた高い広告代を節約できます。浮いたお金で設備投資も可能。
                </p>
              </div>
            </div>
            {/* 画像 */}
            <div className="absolute left-[2%] sm:left-[5%] top-1/2 -translate-y-1/2 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px]">
              <Image
                src="/魅力02.png"
                alt="広告費0円を目指せる"
                width={300}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* 魅力3 - 右から生える */}
        <div className="flex justify-end mt-8">
          <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] relative">
            <div className="bg-white rounded-l-3xl py-6 sm:py-10 md:py-14 pl-4 sm:pl-8 md:pl-12 pr-4 sm:pr-6 shadow-lg min-h-[160px] sm:min-h-[200px] md:min-h-[240px]">
              <div className="pr-[40%] sm:pr-[42%] md:pr-[45%]">
                <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                  <span className="text-gray-400 text-base sm:text-xl">#</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f62a2a]">3</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">
                  24時間365日顧客対応
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                  24時間365日、どんなときも対応できる会話形式のFAQチャットボットを、オプションではなく、全てのWebサイトに搭載。
                </p>
              </div>
            </div>
            {/* 画像 */}
            <div className="absolute right-[2%] sm:right-[5%] top-1/2 -translate-y-1/2 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px]">
              <Image
                src="/魅力03.png"
                alt="24時間365日顧客対応"
                width={300}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
