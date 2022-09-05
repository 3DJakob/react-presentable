import React from 'react'

export interface ResizerProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onLayout: (size: {height: number, width: number}) => void
}

const Resizer: React.FC<ResizerProps> = ({ children, style, onLayout }) => {
  const divRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const updateDimensions = (): void => {
      if (divRef.current != null) {
        const height = divRef.current.offsetHeight
        const width = divRef.current.offsetWidth
        onLayout({ width, height })
      }
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)

    return (): void => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [onLayout])

  return (
    React.createElement(
      'div',
      { ref: divRef, style },
      children
    )
  )
}

export default Resizer
