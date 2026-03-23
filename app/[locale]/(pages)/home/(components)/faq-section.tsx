'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import styles from '../home.module.scss'

interface FaqItem {
  question: string
  answer: string
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations('home.faq')
  const faqs = Object.values(t.raw('items')) as FaqItem[]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <p className={styles.faqLabel}>{t('label')}</p>
        <h2 className={styles.faqHeading}>{t('heading')}</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.faqOpen : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
