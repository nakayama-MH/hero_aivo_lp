import HeroSection from '@/components/HeroSection'
import PromoBanner from '@/components/PromoBanner'
import ProblemsSection from '@/components/ProblemsSection'
import GoalSection from '@/components/GoalSection'
import ComparisonSection from '@/components/ComparisonSection'
import StrengthsSection from '@/components/StrengthsSection'
import DifferenceSection from '@/components/DifferenceSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import OpeningAnimation from '@/components/OpeningAnimation'
import ArticleModal from '@/components/ArticleModal'

// Triggered via GitHub API for Verified Commit
export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <main className="flex-1">
        <HeroSection />
        <PromoBanner />
        <ProblemsSection />
        <GoalSection />
        <ComparisonSection />
        <StrengthsSection />
        <DifferenceSection />
        <FAQSection />
        <CTASection />
      </main>
      <ArticleModal />
    </>
  )
}
