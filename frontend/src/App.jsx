import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import {Head, Header, IndexMain} from './Components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <body>
        <div id="container">
          <Header />
          <IndexMain />
        </div>
      </body>
    </>
  )
}

export default App
