import { useState } from 'react'

import gsap from 'gsap'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
    </>
  )
}

export default App
