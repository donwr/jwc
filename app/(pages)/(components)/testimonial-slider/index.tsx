'use client'
import { testimonials } from 'app/(pages)/(data)/data'
import React, { useEffect, useState } from 'react'
import styles from './testimonial-slider.module.scss'

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const delay = 5000 // time in milliseconds (5 seconds)

  // Automatically move to the next slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, delay)

    return () => clearInterval(intervalId) // cleanup on component unmount
  }, [])

  // Handle dot click to manually switch testimonials
  const handleDotClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <section className={styles.slider}>
      <h2 className={styles.heading}>Customer Reviews</h2>
      <div className={styles.testimonial}>
        <p className={styles.text}>{testimonials[current].text}</p>
        <p className={styles.author}>{testimonials[current].author}</p>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${current === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSlider
