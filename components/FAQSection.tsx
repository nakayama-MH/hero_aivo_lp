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
              <strong>【診断プラン】</strong>
              <ul className="list-disc list-inside mt-1 ml-4">
                <li>LLMO診断サービス：5万円（税別）</li>
                <li>AI検索表示状況の分析、詳細レポート提出</li>
              </ul>
            </div>
            <div>
              <strong>【導入プラン】共通初期費用：15万円（税別）</strong>
              <p className="text-sm text-gray-600 mt-1 ml-4">※LLMO診断、AI最適化LP制作、初期セットアップ含む</p>
            </div>
            <div>
              <strong>A. 年間契約プラン（推奨）</strong>
              <p className="text-sm text-gray-600 mt-1 ml-4">※2025/12/3〜2026/12/2のキャンペーン価格</p>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>1〜6ヶ月目：月額10万円</li>
                <li>7〜12ヶ月目：月額20万円</li>
                <li>年間運用費合計：180万円</li>
                <li>★一括払い特典：10万円割引（運用費170万円）</li>
              </ul>
              <p className="text-sm text-gray-600 mt-1 ml-4">契約更新：12ヶ月ごとに更新・解約の判断が可能</p>
            </div>
            <div>
              <strong>B. 半年契約プラン（トライアル）</strong>
              <p className="text-sm text-gray-600 mt-1 ml-4">※2025/12/3〜2026/12/2のキャンペーン価格</p>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>1〜3ヶ月目：月額10万円</li>
                <li>4〜6ヶ月目：月額20万円</li>
                <li>半年運用費合計：90万円</li>
              </ul>
              <p className="text-sm text-gray-600 mt-1 ml-4">契約更新：6ヶ月ごとに更新・解約の判断が可能</p>
            </div>
            <div>
              <strong>2年目以降：</strong>月額20万円（税別）・年間契約のみ
            </div>
            <div>
              <strong>月次運用に含まれる内容：</strong>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>アルゴリズム追従：AI仕様変更に合わせたコード修正</li>
                <li>情報の鮮度維持：Q&Aの追加・リライト</li>
                <li>外部信頼性向上：被リンク・サイテーション獲得</li>
                <li>レポーティング：毎月の簡易レポート＋年4回の詳細診断</li>
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
          <strong>A:</strong> 「ググる」から「AIに聞く」時代への変化に対応する施策です。
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left">項目</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">SEO（従来）</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">LLMO（HERO AIVO）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">ターゲット</td>
                  <td className="border border-gray-300 px-3 py-2">人間（検索ユーザー）</td>
                  <td className="border border-gray-300 px-3 py-2">AI（大規模言語モデル）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">目的</td>
                  <td className="border border-gray-300 px-3 py-2">検索順位の上昇</td>
                  <td className="border border-gray-300 px-3 py-2">回答内での引用・推奨</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">施策</td>
                  <td className="border border-gray-300 px-3 py-2">キーワード含有率、被リンク</td>
                  <td className="border border-gray-300 px-3 py-2">構造化データ、信頼性証明</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            HERO AIVOは<strong>SEOとLLMO両方に対応</strong>。ChatGPT、Gemini、Perplexityなどの主要AIエンジンで「正確」かつ「優先的」に引用される最適化を行います。
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
              <strong>A. 現状分析：LLMO診断</strong>
              <p className="ml-4">貴社サイトのAI検索対応状況を詳細に分析・レポート</p>
            </div>
            <div>
              <strong>B. 基盤構築：AI最適化LP制作</strong>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>構造化データ実装：AIが理解しやすいタグ付け（JSON-LD等）</li>
                <li>Q&A最適化：ユーザーの質問意図に合致するコンテンツ設計</li>
                <li>ソースコード最適化：AIのクローリングを促進する軽量・論理的なコード</li>
                <li>チャットボット標準実装</li>
              </ul>
            </div>
            <div>
              <strong>C. 月次運用：継続的な最適化と監視</strong>
              <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                <li>アルゴリズム追従：Google SGEやOpenAIの仕様変更に合わせた修正</li>
                <li>情報の鮮度維持：Q&Aの追加・リライトによる「生きた情報」の演出</li>
                <li>外部信頼性向上：被リンク・サイテーション（言及）の獲得</li>
                <li>レポーティング：毎月の簡易レポート＋年4回の詳細診断</li>
              </ul>
            </div>
            <p className="mt-2">
              「作って終わり」では、AIから忘れ去られます。私たちは「番犬」として常に監視し、「成長」させる運用で貴社の表示を守ります。
            </p>
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
