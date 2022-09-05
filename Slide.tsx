import React from 'react'

export interface SlideProps {
  children: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    React.createElement(
      'div',
      {},
      children
    )
  )
}

export default Slide
