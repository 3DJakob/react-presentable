import React from 'react'
import Resizer from './Resizer'
import Slide from './Slide'

const Presentation = ({ children, style, theme }) => {
  const sliderRef = React.createRef()
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const numberOfSlides = React.Children.count(children)

  const currentSlideRef = React.useRef(currentSlide)

  const updateCurrentSlide = (data) => {
    currentSlideRef.current = data
    setCurrentSlide(data)
  }

  React.useEffect(() => {
    const incrementSlide = () => {
      if (currentSlideRef.current < numberOfSlides - 1) {
        updateCurrentSlide(currentSlideRef.current + 1)
      }
    }

    const decrementSlide = () => {
      if (currentSlideRef.current > 0) {
        updateCurrentSlide(currentSlideRef.current - 1)
      }
    }

    const handleArrow = (e) => {
      if (e.key === 'ArrowRight') {
        incrementSlide()
      }
      if (e.key === 'ArrowLeft') {
        decrementSlide()
      }
    }
    window.addEventListener('keydown', handleArrow)
    window.addEventListener('mouseClick', incrementSlide)

    return () => {
      window.removeEventListener('keydown', handleArrow)
      window.removeEventListener('mouseClick', incrementSlide)
    }
  }, [numberOfSlides])

  const SlideStyle = {
    color: theme?.textColor,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const Slides = React.Children.map(children, (child) => React.createElement('div', { style: { ...dimensions, ...SlideStyle } }, child))

  return (
    React.createElement(
      Resizer,
      {
        onLayout: (size) => setDimensions(size),
        style: { ...style, overflow: 'hidden', backgroundColor: theme?.backgroundColor }
      },
      React.createElement(
        'div',
        {
          ref: sliderRef,
          style: {
            display: 'flex',
            flexDirection: 'row',
            width: numberOfSlides * dimensions.width,
            transition: '200ms transform',
            transform: `translateX(-${currentSlide * dimensions.width}px)`
          }
        },
        Slides
      )
    )
  )
}

export { Slide }
export default Presentation
