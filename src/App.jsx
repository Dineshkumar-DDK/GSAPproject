import { useState } from 'react'

import gsap from 'gsap'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl text-indigo-300">
        MOJITO.....
       </h1>
    </>
  )
}

export default App
