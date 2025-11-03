import Header from '@/components/Header'
import ArticleBanner from '@/components/ArticleBanner'
import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import GoalSection from '@/components/GoalSection'
import ComparisonSection from '@/components/ComparisonSection'
import StrengthsSection from '@/components/StrengthsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FutureTimelineSection from '@/components/FutureTimelineSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import OpeningAnimation from '@/components/OpeningAnimation'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <OpeningAnimation />
      <Header />
      <ArticleBanner />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <GoalSection />
        <ComparisonSection />
        <StrengthsSection />
        <FeaturesSection />
        <FutureTimelineSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
