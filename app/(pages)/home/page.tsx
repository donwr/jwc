import { Wrapper } from '../(components)/wrapper'
import CTASection from './(components)/cta'
import FAQSection from './(components)/faq-section'
import HeroSection from './(components)/hero'
import HowItWorksSection from './(components)/health-matters'
import ImageSplitSection from './(components)/image-split'
import MarqueeSection from './(components)/marquee'
import OffersSection from './(components)/service'
import PersonalTrainerIntro from './(components)/personal-trainer'
import ProblemSection from './(components)/problem-section'
import styles from './home.module.scss'

export default async function Home() {
  return (
    <Wrapper theme="light" className={styles.page}>
      <HeroSection />
      <MarqueeSection />
      <div id="start">
        <PersonalTrainerIntro />
        <ImageSplitSection />
        <ProblemSection />
        <HowItWorksSection />
        <OffersSection />
        <FAQSection />
        <CTASection />
      </div>
    </Wrapper>
  )
}
