import React from 'react'

const Resizer = ({ children, style, onLayout }) => {
  const divRef = React.useRef(null)

  React.useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current != null) {
        const height = divRef.current.offsetHeight
        const width = divRef.current.offsetWidth
        onLayout({ width, height })
      }
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [onLayout])

  return (
    React.createElement(
      'div',
      { ref: divRef, style: { ...style, position: 'relative' } },
      children
    )
  )
}

export default Resizer
