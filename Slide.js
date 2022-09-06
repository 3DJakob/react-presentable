import React from 'react'

const Slide = ({ children, style, className }) => {
  return (
    React.createElement(
      'div',
      { style, className },
      children
    )
  )
}

export default Slide
