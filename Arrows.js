import React from 'react'

const containerStyle = {
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'opacity 0.1s ease-in-out'
}

const arrowSideStyle = {
  position: 'absolute',
  width: 20,
  height: 5,
  backgroundColor: 'white',
  borderRadius: 2,
  transformOrigin: 2
}

const Arrow = ({ direction, onClick }) => {
  const [hover, setHover] = React.useState(false)
  return (
    React.createElement(
      'div',
      { onClick, style: { ...containerStyle, transform: `rotate(${direction === 'left' ? 0 : 180}deg)`, opacity: hover ? 0.7 : 0.3 }, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
      React.createElement('div', { style: { ...arrowSideStyle, transform: 'rotate(45deg)' } }),
      React.createElement('div', { style: { ...arrowSideStyle, transform: 'rotate(-45deg)' } })
    )
  )
}

const Arrows = ({ style, onClick }) => {
  return (
    React.createElement(
      'div',
      { style: { ...style, display: 'flex' } },
      React.createElement(Arrow, { direction: 'left', onClick: () => onClick('left') }),
      React.createElement(Arrow, { direction: 'right', onClick: () => onClick('right') })
    )

  )
}

export default Arrows
