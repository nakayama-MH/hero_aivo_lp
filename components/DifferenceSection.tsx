export default function DifferenceSection() {
  const comparisons = [
    {
      category: '集客の方法',
      general: '高い広告費を払い続ける',
      heroAivo: 'AIと検索から自動で集まる',
    },
    {
      category: '作ったあと',
      general: '放置されて古くなる',
      heroAivo: '毎月改善して育っていく',
    },
    {
      category: 'AI対応',
      general: '対応していない',
      heroAivo: '最新のAIに対応済み',
    },
    {
      category: 'コスト',
      general: '制作費＋広告費',
      heroAivo: '制作費のみ（広告費0円へ）',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* セクションタイトル */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          これまでのWebサイト制作との違い
        </h2>

        {/* モバイル用カードレイアウト */}
        <div className="md:hidden space-y-6">
          {comparisons.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              {/* カテゴリヘッダー */}
              <div className="bg-gray-500 text-white py-3 px-4 text-center font-bold text-lg">
                {item.category}
              </div>
              {/* 比較コンテンツ */}
              <div className="flex">
                {/* 一般的な制作会社 */}
                <div className="w-1/2 bg-gray-50 py-6 px-4 flex flex-col items-center text-center">
                  <span className="text-gray-400 text-3xl font-bold mb-2">×</span>
                  <span className="text-gray-500 text-xs mb-2">一般的な制作会社</span>
                  <span className="text-gray-700 text-sm font-medium">{item.general}</span>
                </div>
                {/* HERO AIVO */}
                <div className="w-1/2 bg-red-50 py-6 px-4 flex flex-col items-center text-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#f62a2a] text-[#f62a2a] text-lg mb-2">✓</span>
                  <span className="text-[#f62a2a] text-xs mb-2">HERO AIVO</span>
                  <span className="text-[#f62a2a] text-sm font-bold">{item.heroAivo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PC用テーブルレイアウト */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            {/* ヘッダー */}
            <thead>
              <tr>
                <th className="w-1/4"></th>
                <th className="w-[37.5%] bg-gray-500 text-white py-4 px-4 text-lg font-bold">
                  一般的な制作会社
                </th>
                <th className="w-[37.5%] bg-[#f62a2a] text-white py-4 px-4 text-lg font-bold">
                  HERO AIVO
                </th>
              </tr>
            </thead>
            {/* ボディ */}
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index}>
                  {/* カテゴリ列 */}
                  <td className="bg-gray-200 py-6 px-4 text-center font-bold text-lg text-gray-700 border-b border-gray-300">
                    {item.category}
                  </td>
                  {/* 一般的な制作会社列 */}
                  <td className="bg-white py-6 px-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-2xl font-bold">×</span>
                      <span className="text-gray-600 text-base">{item.general}</span>
                    </div>
                  </td>
                  {/* HERO AIVO列 */}
                  <td className="bg-red-50 py-6 px-4 border-b border-red-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f62a2a] text-white text-sm">✓</span>
                      <span className="text-[#f62a2a] font-bold text-base">{item.heroAivo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
