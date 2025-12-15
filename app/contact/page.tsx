'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: '',
    department: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    inquiryType: '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState({
    company: '',
    name: '',
    email: '',
    inquiryType: '',
    message: '',
    agreed: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      company: '',
      name: '',
      email: '',
      inquiryType: '',
      message: '',
      agreed: '',
    }
    let isValid = true

    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください'
      isValid = false
    }

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
      isValid = false
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'お問い合わせ種別を選択してください'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'ご相談内容を入力してください'
      isValid = false
    }

    if (!agreed) {
      newErrors.agreed = '同意が必要です'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const subject = `【HERO AIVO】${formData.inquiryType}のお問い合わせ`
    const body = `
会社名: ${formData.company}
部署名: ${formData.department || '未入力'}
お名前: ${formData.name}
メールアドレス: ${formData.email}
電話番号: ${formData.phone || '未入力'}
WebサイトURL: ${formData.website || '未入力'}
お問い合わせ種別: ${formData.inquiryType}

ご相談内容:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@meta-heroes.co.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink

    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              無料相談フォーム
            </h1>
            <p className="text-gray-600">
              AI検索最適化について、お気軽にご相談ください。
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                メールアプリが起動しました
              </h2>
              <p className="text-gray-600 mb-6">
                メールアプリでそのまま送信してください。<br />
                通常1営業日以内にご返信いたします。
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#f62a2a] hover:text-[#d92424] font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                ホームに戻る
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-gray-500 mb-6">
                <span className="text-red-500">*</span> は必須項目です
              </p>

              {/* 会社名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                    errors.company ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="株式会社○○"
                />
                {errors.company && (
                  <p className="mt-2 text-sm text-red-500">{errors.company}</p>
                )}
              </div>

              {/* 部署名 */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  部署名・役職
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent"
                  placeholder="マーケティング部 部長"
                />
              </div>

              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                    errors.name ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="山田 太郎"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="example@company.co.jp"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent"
                  placeholder="03-1234-5678"
                />
              </div>

              {/* WebサイトURL */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  WebサイトURL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent"
                  placeholder="https://example.co.jp"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別<span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                    errors.inquiryType ? 'border-red-400' : 'border-gray-300'
                  }`}
                >
                  <option value="">選択してください</option>
                  <option value="サービスについて">サービスについて</option>
                  <option value="料金・プランについて">料金・プランについて</option>
                  <option value="導入のご相談">導入のご相談</option>
                  <option value="資料請求">資料請求</option>
                  <option value="その他">その他</option>
                </select>
                {errors.inquiryType && (
                  <p className="mt-2 text-sm text-red-500">{errors.inquiryType}</p>
                )}
              </div>

              {/* ご相談内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  ご相談内容<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent resize-none ${
                    errors.message ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="ご相談内容をご記入ください"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* 同意チェックボックス */}
              <div className="pt-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked)
                      if (errors.agreed) {
                        setErrors((prev) => ({ ...prev, agreed: '' }))
                      }
                    }}
                    className="mt-1 w-4 h-4 text-[#f62a2a] border-gray-300 rounded focus:ring-[#f62a2a]"
                  />
                  <label htmlFor="agreed" className="text-sm text-gray-700">
                    <a
                      href="https://meta-heroes.co.jp/privacypolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f62a2a] hover:underline"
                    >
                      プライバシーポリシー
                    </a>
                    および
                    <a
                      href="https://meta-heroes.co.jp/contact-privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f62a2a] hover:underline"
                    >
                      個人情報の取り扱い
                    </a>
                    に同意する<span className="text-red-500 ml-1">*</span>
                  </label>
                </div>
                {errors.agreed && (
                  <p className="mt-2 text-sm text-red-500">{errors.agreed}</p>
                )}
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#f62a2a] hover:bg-[#d92424] text-white font-bold py-4 px-6 rounded transition-colors"
                >
                  送信する
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                送信ボタンを押すと、メールアプリが起動します
              </p>
            </form>
          )}

          {/* 信頼性表示 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                SSL暗号化通信
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                通常1営業日以内に返信
              </div>
              <a
                href="https://meta-heroes.co.jp/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                プライバシーポリシー
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
