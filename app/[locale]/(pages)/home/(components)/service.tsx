'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../home.module.scss'

const OffersSection: React.FC = () => {
  const t = useTranslations('home.offers')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="angebote" className={styles.offersSection}>
      <div className={styles.offersContainer}>
        <p className={styles.offersLabel}>{t('label')}</p>
        <h2 className={styles.offersHeading}>{t('heading')}</h2>

        <div className={styles.offersList}>
          {/* 1 — Personal Training */}
          <div className={`${styles.offerItem} ${openIndex === 0 ? styles.offerItemOpen : ''}`}>
            <button className={styles.offerItemHeader} onClick={() => toggle(0)} aria-expanded={openIndex === 0}>
              <div className={styles.offerItemMeta}>
                <span className={styles.offerItemNum}>01</span>
                <div>
                  <h3>{t('personalTraining.title')}</h3>
                  <p className={styles.offerItemSub}>{t('personalTraining.subtitle')}</p>
                </div>
              </div>
              <span className={styles.offerItemToggle}>{openIndex === 0 ? '−' : '+'}</span>
            </button>
            {openIndex === 0 && (
              <div className={styles.offerItemBody}>
                <div className={styles.offerItemContent}>
                  <div className={styles.offerItemLeft}>
                    <p>{t('personalTraining.description')}</p>
                    <p>{t('personalTraining.description2')}</p>
                    <ul>
                      {(Object.values(t.raw('personalTraining.features')) as string[]).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.offerItemRight}>
                    <div className={styles.pricingBox}>
                      <div className={styles.pricingRow}>
                        <span>{t('personalTraining.pricing.single.label')}</span>
                        <span>{t('personalTraining.pricing.single.price')}</span>
                      </div>
                      <div className={styles.pricingRow}>
                        <span>{t('personalTraining.pricing.pack5.label')}</span>
                        <span>{t('personalTraining.pricing.pack5.price')}</span>
                      </div>
                      <div className={styles.pricingRow}>
                        <span>{t('personalTraining.pricing.pack10.label')}</span>
                        <span>{t('personalTraining.pricing.pack10.price')}</span>
                      </div>
                      <div className={styles.pricingRow}>
                        <span>{t('personalTraining.pricing.monthly1x.label')}</span>
                        <span>{t('personalTraining.pricing.monthly1x.price')}</span>
                      </div>
                      <div className={styles.pricingRow}>
                        <span>{t('personalTraining.pricing.monthly2x.label')}</span>
                        <span>{t('personalTraining.pricing.monthly2x.price')}</span>
                      </div>
                    </div>
                    <Link href="#cta" className={styles.offerBtn}>
                      {t('personalTraining.button')} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2 — Trainingsplan */}
          <div className={`${styles.offerItem} ${openIndex === 1 ? styles.offerItemOpen : ''}`}>
            <button className={styles.offerItemHeader} onClick={() => toggle(1)} aria-expanded={openIndex === 1}>
              <div className={styles.offerItemMeta}>
                <span className={styles.offerItemNum}>02</span>
                <div>
                  <h3>{t('trainingPlan.title')}</h3>
                  <p className={styles.offerItemSub}>{t('trainingPlan.subtitle')}</p>
                </div>
              </div>
              <span className={styles.offerItemToggle}>{openIndex === 1 ? '−' : '+'}</span>
            </button>
            {openIndex === 1 && (
              <div className={styles.offerItemBody}>
                <div className={styles.offerItemContent}>
                  <div className={styles.offerItemLeft}>
                    <p>{t('trainingPlan.description')}</p>
                    <p>{t('trainingPlan.description2')}</p>
                    <ol className={styles.offerSteps}>
                      {(Object.values(t.raw('trainingPlan.steps')) as string[]).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                    <ul>
                      {(Object.values(t.raw('trainingPlan.features')) as string[]).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.offerItemRight}>
                    <p className={styles.offerDelivery}>{t('trainingPlan.delivery')}</p>
                    <div className={styles.offerPriceLarge}>{t('trainingPlan.price')}</div>
                    <Link href="#cta" className={styles.offerBtn}>
                      {t('trainingPlan.button')} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3 — Trainingsplan + Betreuung */}
          <div className={`${styles.offerItem} ${openIndex === 2 ? styles.offerItemOpen : ''}`}>
            <button className={styles.offerItemHeader} onClick={() => toggle(2)} aria-expanded={openIndex === 2}>
              <div className={styles.offerItemMeta}>
                <span className={styles.offerItemNum}>03</span>
                <div>
                  <h3>{t('coaching.title')}</h3>
                  <p className={styles.offerItemSub}>{t('coaching.subtitle')}</p>
                </div>
              </div>
              <span className={styles.offerItemToggle}>{openIndex === 2 ? '−' : '+'}</span>
            </button>
            {openIndex === 2 && (
              <div className={styles.offerItemBody}>
                <div className={styles.offerItemContent}>
                  <div className={styles.offerItemLeft}>
                    <p>{t('coaching.description')}</p>
                    <p>{t('coaching.description2')}</p>
                    <p>{t('coaching.description3')}</p>
                    <ul>
                      {(Object.values(t.raw('coaching.features')) as string[]).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.offerItemRight}>
                    <div className={styles.packagesList}>
                      <div className={styles.packageRow}>
                        <span>{t('coaching.packages.weeks4.title')}</span>
                        <span>{t('coaching.packages.weeks4.price')}</span>
                      </div>
                      <div className={styles.packageRow}>
                        <span>{t('coaching.packages.weeks8.title')}</span>
                        <span>{t('coaching.packages.weeks8.price')}</span>
                      </div>
                      <div className={styles.packageRow}>
                        <span>{t('coaching.packages.weeks12.title')}</span>
                        <span>{t('coaching.packages.weeks12.price')}</span>
                      </div>
                    </div>
                    <Link href="#cta" className={styles.offerBtn}>
                      {t('coaching.button')} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4 — VIP Coaching */}
          <div className={`${styles.offerItem} ${openIndex === 3 ? styles.offerItemOpen : ''}`}>
            <button className={styles.offerItemHeader} onClick={() => toggle(3)} aria-expanded={openIndex === 3}>
              <div className={styles.offerItemMeta}>
                <span className={styles.offerItemNum}>04</span>
                <div>
                  <h3>{t('vip.title')}</h3>
                  <p className={styles.offerItemSub}>{t('vip.subtitle')}</p>
                </div>
              </div>
              <span className={styles.offerItemToggle}>{openIndex === 3 ? '−' : '+'}</span>
            </button>
            {openIndex === 3 && (
              <div className={styles.offerItemBody}>
                <div className={styles.offerItemContent}>
                  <div className={styles.offerItemLeft}>
                    <p>{t('vip.description')}</p>
                    <p>{t('vip.description2')}</p>
                    <ul>
                      {(Object.values(t.raw('vip.features')) as string[]).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.offerItemRight}>
                    <div className={styles.offerPriceLarge}>{t('vip.price')}</div>
                    <Link href="#cta" className={styles.offerBtn}>
                      {t('vip.button')} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersSection
