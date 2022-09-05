# React Slides

React Slides is a module to create slideshows inside React.

## Installation

```sh
npm install --save react-presentable
```

## Usage

```js
import Presentation, { Slide } from 'react-presentable'

// ...

return (
  <Presentation
    style={{ width: '100vw', height: '100vh' }}
    theme={{ backgroundColor: 'violet', textColor: '#fff' }}
  >
    <Slide>
      <h1>Slide 1</h1>
    </Slide>
    <Slide>
      <h1>Slide 2</h1>
    </Slide>
  </Presentation>
)
```

## Props

