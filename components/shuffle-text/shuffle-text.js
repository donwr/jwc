import { useEffect, useState } from 'react'

const generateShuffleTextByWord = (text) => {
  return text
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)])
        .join(''),
    )
    .join(' ')
}

export const useShuffleTextAnimation = (text, currentIndex) => {
  const [shuffledText, setShuffledText] = useState(text)

  useEffect(() => {
    let shuffles = 0
    const maxShuffles = 3
    let intervalId

    const shuffle = () => {
      if (shuffles < maxShuffles) {
        setShuffledText(generateShuffleTextByWord(text)) // Shuffle text by word
        shuffles++
      } else {
        setShuffledText(text) // Set final text after shuffling
        clearInterval(intervalId)
      }
    }

    // Trigger the shuffle effect every 100ms
    intervalId = window.setInterval(shuffle, 100)

    // Clear the interval on cleanup
    return () => {
      clearInterval(intervalId)
    }
  }, [text, currentIndex])

  return shuffledText
}
