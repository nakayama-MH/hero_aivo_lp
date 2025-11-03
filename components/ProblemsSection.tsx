import Image from 'next/image'

export default function ProblemsSection() {
  const problems = [
    {
      title: (
        <>
          Webサイトから
          <br />
          集客に繋がりにくい
        </>
      ),
      altText: 'Webサイトから集客に繋がりにくい',
      icon: '/問題1.png',
      bullets: [
        'Webサイトが作って終わりになっている。',
        'Webサイトへのアクセスが伸び悩んでいる。',
        '集客効果が頭打ちになっている',
      ],
    },
    {
      title: (
        <>
          AIに関する
          <br />
          知見が足りない
        </>
      ),
      altText: 'AIに関する知見が足りない',
      icon: '/問題2.png',
      bullets: [
        'AIで具体的に何をすればいいか分からない。',
        '自社の情報をAIに誤って引用されることを防ぎ、正確に伝えてほしい。',
      ],
    },
    {
      title: (
        <>
          顧客対応に
          <br />
          時間とコストがかかる
        </>
      ),
      altText: '顧客対応に時間とコストがかかる',
      icon: '/問題3.png',
      bullets: [
        '営業やカスタマーサポートの負担が増加している。',
        'Webサイトの情報が整理されておらず、顧客を逃している可能性がある。',
      ],
    },
  ]

  return (
    <section className="mt-0 py-12 sm:py-16 md:py-24 pb-24 sm:pb-32 md:pb-48 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          <span className="whitespace-nowrap">こんな<span className="text-red-500">課題</span>は</span>
          <span className="whitespace-nowrap">ありませんか？</span>
        </h2>

        {/* 問題カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* タイトル */}
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-b from-red-400 to-red-600 bg-clip-text text-transparent">
                {problem.title}
              </h3>

              {/* アイコン */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-6">
                <Image
                  src={problem.icon}
                  alt={problem.altText}
                  fill
                  className="object-contain"
                />
              </div>

              {/* 説明文 - 箇条書き */}
              <ul className="text-left space-y-2 w-full">
                {problem.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-base text-black">
                    <span className="text-red-500 mr-2 flex-shrink-0">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
