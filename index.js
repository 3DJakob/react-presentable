import React from 'react'
import Resizer from './Resizer'
import Slide from './Slide'

const Presentation = ({ children, style, className, theme, showProgressBar = true }) => {
  const sliderRef = React.createRef()
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const numberOfSlides = React.Children.count(children)

  const currentSlideRef = React.useRef(currentSlide)

  const updateCurrentSlide = (data) => {
    currentSlideRef.current = data
    setCurrentSlide(data)
  }

  const updateDimensions = (data) => {
    if (data.width !== dimensions.width || data.height !== dimensions.height) {
      setDimensions(data)
    }
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
    alignItems: 'stretch',
    justifyContent: 'stretch',
    textAlign: 'center'
  }

  const ProgressStyle = {
    position: 'absolute',
    bottom: '0',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: `${(currentSlide / (numberOfSlides - 1)) * 100}%`,
    height: 10,
    transition: 'width 0.2s ease-in-out'
  }

  const Slides = React.Children.map(children, (child) => React.createElement('div', { style: { ...dimensions, ...SlideStyle } }, child))

  return (
    React.createElement(
      Resizer,
      {
        onLayout: (size) => updateDimensions(size),
        className,
        style: { ...style, overflow: 'hidden', backgroundColor: theme?.backgroundColor }
      },
      showProgressBar && React.createElement(
        'div',
        { style: ProgressStyle }
      ),
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
