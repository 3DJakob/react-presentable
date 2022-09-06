import React from 'react'

const Slide = ({ children, style, className }) => {
  return (
    React.createElement(
      'div',
      {
        style: {
          ...style,
          flex: 1,
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        className
      },
      children
    )
  )
}

export default Slide
