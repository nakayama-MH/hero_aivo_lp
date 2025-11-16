import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import GoalSection from '@/components/GoalSection'
import ComparisonSection from '@/components/ComparisonSection'
import StrengthsSection from '@/components/StrengthsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FutureTimelineSection from '@/components/FutureTimelineSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import OpeningAnimation from '@/components/OpeningAnimation'
import ArticleModal from '@/components/ArticleModal'

export default function Home() {
  return (
    <>
      <OpeningAnimation />
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
      <ArticleModal />
    </>
  )
}
