'use client'

import { useState } from 'react'
import styles from '../home.module.scss'

const faqs = [
  {
    question:
      'Ich habe schon so oft angefangen und wieder aufgehört. Warum sollte es diesmal anders sein?',
    answer:
      'Weil du diesmal nicht allein bist. Mein Coaching ist so aufgebaut, dass es den Moment abfängt, in dem die meisten aufhören: Woche drei, wenn der Alltag zuschlägt. Dafür gibt es den Plan, die Anpassungen und mich als Ansprechpartner.',
  },
  {
    question: 'Ich bin total unfit. Ist das peinlich?',
    answer:
      'Nein. Die meisten meiner Klienten starten genau so. Ich passe alles an dein aktuelles Level an — du musst nichts können, um anzufangen.',
  },
  {
    question: 'Wie läuft der individuelle Trainingsplan ab?',
    answer:
      'Du buchst, füllst einen kurzen Fragebogen aus, und wir führen ein Erstgespräch. Danach erstelle ich deinen Plan — zugeschnitten auf dein Ziel, dein Level, dein Equipment und deinen Alltag.',
  },
  {
    question: 'Was, wenn ich zwischendurch nicht trainieren kann?',
    answer:
      'Das passiert. Und es ist kein Grund, alles hinzuwerfen. Wir passen den Plan an, wenn nötig. Das ist genau der Unterschied zu einem Standardplan aus dem Internet.',
  },
  {
    question: 'Ist die Online-Betreuung wirklich persönlich?',
    answer:
      'Alles kommt direkt von mir. Kein Bot, kein Chatbot, keine automatisierten Messages. Wenn du mir schreibst, antworte ich — in der Regel innerhalb von 10 Stunden.',
  },
  {
    question: 'Kann ich vom Trainingsplan ins Personal Training wechseln?',
    answer:
      'Ja, jederzeit. Wenn du merkst, dass du mehr direkte Betreuung willst, steigen wir einfach um.',
  },
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <p className={styles.faqLabel}>FAQ</p>
        <h2 className={styles.faqHeading}>HÄUFIGE FRAGEN</h2>
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
