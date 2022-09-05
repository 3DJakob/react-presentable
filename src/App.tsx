import Presentation from './components/Presentation'
import Slide from './components/Slide'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Presentation style={{ width: '100vw', height: '100vh' }}>
        <Slide>
          <h1>Slide 1</h1>
        </Slide>
        <Slide>
          <h1>Slide 2</h1>
        </Slide>
      </Presentation>
    </div>
  )
}

export default App
