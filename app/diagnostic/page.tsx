'use client'

import { useState, FormEvent, useEffect } from 'react'

// Metadata is handled in layout.tsx

export default function DiagnosticPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      company: '',
    }
    let isValid = true

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

    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください'
      isValid = false
    }

    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitError('')
      
      try {
        const response = await fetch('/api/diagnostic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setIsSubmitted(true)
          window.scrollTo(0, 0)
        } else {
          setSubmitError('エラーが発生しました。もう一度お試しください。')
        }
      } catch (error) {
        setSubmitError('通信エラーが発生しました。ネットワーク状況を確認してください。')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      const script = document.createElement('script')
      script.src = 'https://llmo-report.onrender.com/widget.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [isSubmitted])

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              無料診断
            </h1>
            <p className="text-gray-600">
              あなたのWebサイトのAI検索対応状況を診断します。
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                診断を開始する前に情報を入力してください
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    会社名<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                      errors.company ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="株式会社○○"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    役職
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent"
                    placeholder="役職をご記入ください"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                      errors.name ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="山田 太郎"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                      errors.email ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="example@company.co.jp"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話番号<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f62a2a] focus:border-transparent ${
                      errors.phone ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="03-1234-5678"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-red-500 text-center">{submitError}</p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#f62a2a] hover:bg-[#d92424] text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </>
                    ) : (
                      '診断を開始する'
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 min-h-[600px] w-full">
              <div id="llmo-diagnostic-widget"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
