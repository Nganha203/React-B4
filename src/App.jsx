import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TicKet from './Components/BT/dat-ve'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicKet/>
    </>
  )
}

export default App
