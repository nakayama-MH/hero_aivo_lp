'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    company: '',
    name: '',
    email: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // モーダルが開いたときにbodyのスクロールを防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ESCキーで閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeModal])

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      company: '',
      name: '',
      email: '',
      message: '',
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

    if (!formData.message.trim()) {
      newErrors.message = 'ご相談内容を入力してください'
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

    // mailto:リンクを構築
    const subject = `【HERO AIVO】無料相談のお問い合わせ`
    const body = `
会社名: ${formData.company}
お名前: ${formData.name}
メールアドレス: ${formData.email}

ご相談内容:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@meta-heroes.co.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // メーラーを開く
    window.location.href = mailtoLink

    // フォームをリセット
    setFormData({
      company: '',
      name: '',
      email: '',
      message: '',
    })
    setErrors({
      company: '',
      name: '',
      email: '',
      message: '',
    })

    // モーダルを閉じる
    closeModal()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // エラーをクリア
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="relative bg-gradient-to-br from-[#f62a2a] via-[#f83d3d] to-[#d91a1a] px-6 py-5 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            無料相談フォーム
          </h2>
          <p className="text-white/90 text-sm mt-0.5">お気軽にご相談ください</p>

          {/* 閉じるボタン */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 text-xl leading-none"
            aria-label="閉じる"
          >
            ×
          </button>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gradient-to-b from-white to-gray-50/30">
          {/* 会社名 */}
          <div className="relative">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => setFocusedField('company')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-[#f62a2a]/20 focus:border-[#f62a2a] transition-all duration-200 ${
                errors.company ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder=" "
            />
            <label
              htmlFor="company"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                formData.company || focusedField === 'company'
                  ? '-top-2.5 text-xs bg-white px-2 text-[#f62a2a] font-semibold'
                  : 'top-3 text-gray-400'
              }`}
            >
              会社名<span className="text-red-500 ml-1">*</span>
            </label>
            {errors.company && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.company}
              </p>
            )}
          </div>

          {/* お名前 */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-[#f62a2a]/20 focus:border-[#f62a2a] transition-all duration-200 ${
                errors.name ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder=" "
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                formData.name || focusedField === 'name'
                  ? '-top-2.5 text-xs bg-white px-2 text-[#f62a2a] font-semibold'
                  : 'top-3 text-gray-400'
              }`}
            >
              お名前<span className="text-red-500 ml-1">*</span>
            </label>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.name}
              </p>
            )}
          </div>

          {/* メールアドレス */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-[#f62a2a]/20 focus:border-[#f62a2a] transition-all duration-200 ${
                errors.email ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                formData.email || focusedField === 'email'
                  ? '-top-2.5 text-xs bg-white px-2 text-[#f62a2a] font-semibold'
                  : 'top-3 text-gray-400'
              }`}
            >
              メールアドレス<span className="text-red-500 ml-1">*</span>
            </label>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.email}
              </p>
            )}
          </div>

          {/* ご相談内容 */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-[#f62a2a]/20 focus:border-[#f62a2a] resize-none transition-all duration-200 ${
                errors.message ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder=" "
            />
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                formData.message || focusedField === 'message'
                  ? '-top-2.5 text-xs bg-white px-2 text-[#f62a2a] font-semibold'
                  : 'top-3 text-gray-400'
              }`}
            >
              ご相談内容<span className="text-red-500 ml-1">*</span>
            </label>
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.message}
              </p>
            )}
          </div>

          {/* 送信ボタン */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-5 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="flex-1 px-5 py-3 bg-gradient-to-r from-[#f62a2a] to-[#d91a1a] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              送信する
            </button>
          </div>

          {/* フッター補足 */}
          <div className="text-center pt-1">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
              <span>📧</span>
              <span>送信ボタンを押すと、メールアプリが起動します</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
