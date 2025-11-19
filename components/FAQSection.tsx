'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: 'LLMOって何ですか？本当に必要なんでしょうか？',
      answer: (
        <>
          <strong>A:</strong> LLMO（Large Language Model
          Optimization）とは、ChatGPTやPerplexityなどのAI検索で自社が表示されやすくする対策のことです。今、若年層を中心にGoogleよりAIで検索する人が急増しています。従来のSEO対策だけでは、AI検索には対応できません。5年後を見据えた集客には必須の施策です。
        </>
      ),
    },
    {
      question: '効果が出るまでどれくらいかかりますか？',
      answer: (
        <>
          <strong>A:</strong>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>3ヶ月以内</strong>
              ：サイトの課題が数値化され、定期的なコンテンツ更新が始まります
            </li>
            <li>
              <strong>6ヶ月〜1年</strong>
              ：AI検索での露出が向上し、問い合わせが増加し始めます
            </li>
            <li>
              <strong>2年以降</strong>
              ：持続的な集客基盤が確立し、顧客獲得コストが大幅に削減されます
            </li>
          </ul>
          <p className="mt-2">時間とともに価値が増していく「資産型」の施策です。</p>
        </>
      ),
    },
    {
      question: '従来のHP制作サービスとの違いは何ですか？',
      answer: (
        <>
          <strong>A:</strong>{' '}
          一般的なHP制作は「作って終わり」ですが、HERO AIVOは違います。
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>LLMO・SEO完全対応</strong>の構造設計
            </li>
            <li>
              自社開発ツールによる<strong>継続的なコンテンツ運用</strong>
            </li>
            <li>
              <strong>広告費ゼロでも集客できる</strong>自走型サイト
            </li>
            <li>
              <strong>月次診断</strong>で改善状況を数値で追える
            </li>
          </ul>
          <p className="mt-2">
            作るだけでなく、育て続けることで資産価値が高まります。
          </p>
        </>
      ),
    },
    {
      question: '料金体系について教えてください',
      answer: (
        <>
          <strong>A:</strong>
          <div className="mt-2 space-y-3">
            <div>
              <strong>【LLMO診断のみ】</strong>
              <ul className="list-disc list-inside mt-1 ml-4">
                <li>単品価格：5万円</li>
                <li>AI検索における現状分析と改善提案</li>
              </ul>
            </div>
            <div>
              <strong>【フルパッケージ】</strong>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>初期費用：15万円（LP制作含む）</li>
                <li>
                  <strong>初年度キャンペーン価格：</strong>
                  <br />
                  <span className="ml-4">前半6ヶ月 月額10万円、後半6ヶ月 月額20万円</span>
                  <br />
                  <span className="ml-4">年間合計180万円（初期費用別）</span>
                  <br />
                  <span className="ml-4 text-sm">※一括払いの場合180万円</span>
                </li>
                <li>
                  <strong>2年目以降：</strong>月額20万円
                </li>
                <li>
                  <strong>半年契約：</strong>総額110万円（初期費用込み）
                </li>
              </ul>
            </div>
            <div>
              <strong>月次運用に含まれる内容：</strong>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>定期的なコンテンツ作成・入稿</li>
                <li>月次LLMO診断とスコアリング</li>
                <li>サイトの改善提案と実装</li>
                <li>被リンク戦略の実行</li>
                <li>年4回の詳細診断レポート</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      question: '途中で解約できますか？契約期間の縛りはありますか？',
      answer: (
        <>
          <strong>A:</strong>{' '}
          基本的に契約期間の縛りはありません。ただし、LLMO対策は継続的な運用で効果が積み上がる性質上、最低6ヶ月〜1年の継続をお勧めしています。短期間での解約も可能ですが、資産価値を十分に実感いただくためには中長期での運用が効果的です。
        </>
      ),
    },
    {
      question: '広告費は別途必要ですか？',
      answer: (
        <>
          <strong>A:</strong> <strong>広告費は一切不要です。</strong>
          これが最大の特徴です。従来のLPは広告運用前提ですが、HERO
          AIVOのサイトは広告ゼロでもAI検索・自然検索から集客できる設計。「広告をかけ続けないと集客できない」状態から脱却できます。
        </>
      ),
    },
    {
      question: 'どんな業種でも効果はありますか？',
      answer: (
        <>
          <strong>A:</strong>{' '}
          はい。BtoB、BtoC問わず、ほぼ全ての業種で効果があります。特に以下のような企業に適しています：
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>デジタル施策に力を入れたい中小企業</li>
            <li>広告費を削減したい企業</li>
            <li>若年層からの問い合わせを増やしたい企業</li>
            <li>AI時代に乗り遅れたくない企業</li>
          </ul>
          <p className="mt-2">
            まずは5万円のLLMO診断で、御社の現状と可能性を確認できます。
          </p>
        </>
      ),
    },
    {
      question: '既存のホームページはどうなりますか？',
      answer: (
        <>
          <strong>A:</strong>
          <div className="mt-2 space-y-3">
            <div>
              <strong>パターン1：LP制作の場合</strong>
              <br />
              既存HPはそのままで、新しいLPを追加します。集客の入口を増やすイメージです。
            </div>
            <div>
              <strong>パターン2：HPリニューアルの場合</strong>
              <br />
              既存HPを全面的にLLMO対応へリニューアルします。データや実績は引き継げます。
            </div>
            <p>御社の状況に応じて最適なプランをご提案します。</p>
          </div>
        </>
      ),
    },
    {
      question: 'SEO対策との違いは何ですか？',
      answer: (
        <>
          <strong>A:</strong> SEOはGoogle検索への対策、LLMOはAI検索への対策です。
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>SEO</strong>：Googleのアルゴリズムに最適化
            </li>
            <li>
              <strong>LLMO</strong>：ChatGPTなどのAIに理解されやすい構造化
            </li>
          </ul>
          <p className="mt-2">
            HERO AIVOは<strong>両方に対応</strong>
            しています。GoogleでもAIでも見つかる、次世代型のサイトをお届けします。
          </p>
        </>
      ),
    },
    {
      question: '具体的にどんな作業をしてくれるのですか？',
      answer: (
        <>
          <strong>A:</strong>
          <div className="mt-2 space-y-3">
            <div>
              <strong>初期制作時：</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-4">
                <li>LLMO完全対応のサイト設計・開発</li>
                <li>構造化データ・メタ情報の最適配置</li>
                <li>チャットボット標準実装</li>
                <li>初回コンテンツ作成</li>
              </ul>
            </div>
            <div>
              <strong>月次運用：</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-4">
                <li>定期的なコンテンツ作成・入稿（月2-4本）</li>
                <li>LLMO診断とスコアリング</li>
                <li>改善提案と実装</li>
                <li>AI検索トレンドの反映</li>
              </ul>
            </div>
            <p>全て自社完結型なので、品質も納期も安心です。</p>
          </div>
        </>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#fce7e7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-black">
          よくある質問
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 transition-colors hover:bg-gray-50"
              >
                <span className="text-lg sm:text-xl font-bold text-black flex-1">
                  Q {faq.question}
                </span>
                <span className="text-2xl sm:text-3xl text-[#f62a2a] font-bold flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-base sm:text-lg text-gray-800 leading-relaxed border-t border-gray-200">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
