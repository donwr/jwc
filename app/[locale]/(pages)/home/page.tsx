import { Wrapper } from '../(components)/wrapper'
import CTASection from './(components)/cta'
import ContactSection from './(components)/contact-section'
import FAQSection from './(components)/faq-section'
import ForWhomSection from './(components)/for-whom'
import HeroSection from './(components)/hero'
import HowItWorksSection from './(components)/health-matters'
import MarqueeSection from './(components)/marquee'
import OffersSection from './(components)/service'
import PersonalTrainerIntro from './(components)/personal-trainer'
import TestimonialsPlaceholder from './(components)/testimonials-placeholder'
import WhatMakesDifferentSection from './(components)/what-makes-different'
import styles from './home.module.scss'

export default async function Home() {
  return (
    <Wrapper theme="light" className={styles.page}>
      <HeroSection />
      <MarqueeSection />
      <div id="start">
        <PersonalTrainerIntro />
        <ForWhomSection />
        <WhatMakesDifferentSection />
        <HowItWorksSection />
        <OffersSection />
        <TestimonialsPlaceholder />
        <CTASection />
        <ContactSection />
        <FAQSection />
      </div>
    </Wrapper>
  )
}
