import React, { useContext } from 'react'
import CustomCursorContext from 'context/custom-cursor-context'

// Define the props interface
interface HoverableTextProps {
  text: string
  className?: string
}

const HoverableText: React.FC<HoverableTextProps> = ({
  text,

  className,
}) => {
  const { setType } = useContext(CustomCursorContext)

  return (
    <span
      className={`${className}`}
      onMouseEnter={() => setType('text-hover-image', text)}
      onMouseLeave={() => setType('default')}
      style={{ cursor: 'pointer', display: 'inline' }}
    >
      {' '}
      {text}{' '}
    </span>
  )
}

export default HoverableText
