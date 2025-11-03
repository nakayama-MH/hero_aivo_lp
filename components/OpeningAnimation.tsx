'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Particle = {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
  color: string
}

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // クライアント側でマウント後に光の粒を生成
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 60, // 画面中央付近から開始
        delay: Math.random() * 0.8, // 遅延を短く
        duration: 2 + Math.random() * 1, // 2-3秒のランダム
        size: 3 + Math.random() * 3, // 3-6pxのサイズ
        // 赤系の色をランダムに選択
        color: ['#FF0000', '#FF4500', '#FF69B4', '#FF1493', '#FF6347'][Math.floor(Math.random() * 5)]
      }))
    )

    // アニメーション終了後にコンポーネントを非表示
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2300) // 2.3秒でフェードアウト開始

    return () => clearTimeout(timer)
  }, [])

  // アニメーション非表示後はレンダリングしない
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 animate-opening-fadeOut">
      {/* 光の粒 */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle-float opacity-0"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* AIVoアイコン */}
      <div className="relative z-10 animate-icon-entry">
        <Image
          src="/icon.png"
          alt="AIVo"
          width={120}
          height={120}
          className="drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
