import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import student from './teacherdepartment'
function App() {
  const [count, setCount] = useState(0)
  const name = "divya"
  const age = 20

  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <student/>
    </>
  )
}

export default App
