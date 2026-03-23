import cn from 'clsx'
import styles from './button.module.scss'

interface ButtonProps {
  className?: string
  text?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  [x: string]: any // Allow additional props
}

export function Button({
  className,
  text = 'Click Me',
  onClick,
  size = 'medium',
  disabled = false,
  ...props // Accept additional props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles.button, styles[size], {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  )
}
