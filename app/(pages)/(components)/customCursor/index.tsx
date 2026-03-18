'use client'
import CustomCursorContext from 'context/custom-cursor-context'
import React, { useContext, useEffect } from 'react'
import styles from './cursor.module.scss' // Import SCSS module

const CustomCursor = () => {
  const { type, title, size } = useContext(CustomCursorContext)
  const mainCursor = React.useRef(null)
  const titleRef = React.useRef(null)
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })
  const isMounted = React.useRef(true) // Track if the component is mounted

  const getCursorClass = (type: string) => {
    switch (type) {
      case 'default':
        return ''
      case 'dynamic-content':
        return styles.noBlendMode
      case 'text-hover-image':
        return styles.noBlendMode
      default:
        return ''
    }
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event

      const mouseX = clientX
      const mouseY = clientY

      if (mainCursor.current) {
        const cursorElement = mainCursor.current as HTMLDivElement
        cursorElement.style.transform = `translate3d(${mouseX - cursorElement.clientWidth / 2}px, ${mouseY - cursorElement.clientHeight / 2}px, 0)`
        cursorElement.style.width = `${size}px` // Update cursor size
        cursorElement.style.height = `${size}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [size]) // Add size dependency to re-render on size change

  useEffect(() => {
    const followMouse = () => {
      if (!isMounted.current) return // Stop if the component is not mounted
      positionRef.current.key = requestAnimationFrame(followMouse)

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current

      if (!mainCursor.current) return

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
    }

    followMouse()
  }, [])

  return (
    <div className={`${styles.cursorWrapper} ${styles[type]}`}>
      <div
        className={`${styles.mainCursor} ${getCursorClass(type)}`}
        ref={mainCursor}
      >
        <div className={styles.mainCursorBackground}></div>

        {type === 'dynamic-content' && (
          <div className={styles.cursorTitle} ref={titleRef}>
            <p className={styles.cursorText}>{title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomCursor
