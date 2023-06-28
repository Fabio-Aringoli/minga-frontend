import { useState } from 'react'
import Main from './layout/main'
import NavBar from './components/NavBar'
import Index from './pages/Index'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main>
        <Index/>
    </Main>
  )
}

export default App