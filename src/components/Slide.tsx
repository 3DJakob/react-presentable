export interface SlideProps {
  children: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Slide
