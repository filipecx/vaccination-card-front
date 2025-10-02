import { useState } from 'react'
import './App.css'
import Home from './Components/PageComponents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-5 flex justify-center'>
      <Home />
    </div>
  )
}

export default App
