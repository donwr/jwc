'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styles from './shuffle-text.module.scss'

interface ShuffleTextProps {
  text: string
}

const generateShuffleText = (text: string): string => {
  return text
    .split('')
    .map((char) =>
      char === ' '
        ? ' '
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)],
    )
    .join('')
}

const ShuffleText: React.FC<ShuffleTextProps> = ({ text }) => {
  const words = text.split(' ')
  const [displayText, setDisplayText] = useState<string[]>(words.map(() => ''))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (mounted) {
      const intervals: NodeJS.Timeout[] = []

      words.forEach((_, wordIndex) => {
        const shuffleInterval = setInterval(() => {
          setDisplayText((prev) =>
            prev.map((word, i) =>
              i === wordIndex ? generateShuffleText(words[i]) : word,
            ),
          )
        }, 100)

        // Store the interval ID
        intervals.push(shuffleInterval)

        // Clear the interval for this word after a staggered delay
        setTimeout(
          () => {
            clearInterval(shuffleInterval)
            setDisplayText((prev) =>
              prev.map((word, i) => (i === wordIndex ? words[i] : word)),
            )
          },
          800 + wordIndex * 100,
        )
      })

      // Clean up intervals on component unmount
      return () => intervals.forEach(clearInterval)
    }
  }, [mounted, words])

  return (
    <motion.p
      className={styles.shuffleText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayText.map((word, index) => (
        <span key={index} className={styles.word}>
          {word}{' '}
        </span>
      ))}
    </motion.p>
  )
}

export default ShuffleText
