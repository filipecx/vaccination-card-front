import { useState } from 'react'
import './App.css'
import Home from './Components/PageComponents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center bg-amber-50'>
      <Home />
    </div>
  )
}

export default App
