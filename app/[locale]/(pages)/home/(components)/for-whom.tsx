'use client'

import { useTranslations } from 'next-intl'
import styles from '../home.module.scss'

interface Goal {
  tag: string
  title: string
  text: string
  items: string[]
}

const ForWhomSection: React.FC = () => {
  const t = useTranslations('home.forWhom')
  const goals = t.raw('goals') as Goal[]

  return (
    <section className={styles.forWhomSection}>
      <div className={styles.forWhomContainer}>
        <h2 className={styles.forWhomHeading}>{t('heading')}</h2>
        <div className={styles.forWhomGoals}>
          {goals.map((goal) => (
            <div key={goal.tag} className={styles.forWhomGoal}>
              <p className={styles.forWhomTag}>{goal.tag}</p>
              <h3 className={styles.forWhomGoalTitle}>{goal.title}</h3>
              <p className={styles.forWhomText}>{goal.text}</p>
              <ul className={styles.forWhomList}>
                {goal.items.map((item) => (
                  <li key={item} className={styles.forWhomItem}>
                    <span className={styles.forWhomCheck}>&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.forWhomNot}>
          <h3 className={styles.forWhomGoalTitle}>{t('notFor.heading')}</h3>
          <p className={styles.forWhomText}>{t('notFor.text')}</p>
        </div>
      </div>
    </section>
  )
}

export default ForWhomSection
