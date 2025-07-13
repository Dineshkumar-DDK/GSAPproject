import { useState } from 'react'

import gsap from 'gsap'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
    </>
  )
}

export default App
