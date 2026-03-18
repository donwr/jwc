import { createContext } from 'react'

export type CursorLookType = 'dynamic-content' | 'default' | 'text-hover-image'
export type CustomCursorType = {
  type: CursorLookType
  title: string
  size: number
  setType: (type: CursorLookType, title?: string) => void
}

const CustomCursorContext = createContext<CustomCursorType>({
  type: 'default',
  title: '',
  size: 16,
  setType: () => {},
})

export default CustomCursorContext
