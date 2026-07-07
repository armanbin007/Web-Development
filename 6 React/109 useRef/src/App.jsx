import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const a = useRef(0) // useRef used to persist the value

  // another use case
  const ref = useRef()

  // useEffect(() => {
  //   a.current = a.current + 1;
  //   console.log(`Rerendering.....\nValue of a is ${a.current}..`)
  // })

  useEffect(() => {
    ref.current.style.backgroundColor = "teal"
    ref.current.style.color = "white"
    console.log(`First render, Color: ${ref.current.style.color}, backgroundColor: ${ref.current.style.backgroundColor}`)
  }, []);

  useEffect(() => {
    if (count>9) {
      ref.current.style.backgroundColor = "Red" 
    } if(count > 15){
      ref.current.style.backgroundColor = "Green" 
    }
    console.log("Rerendering")
  }, [count])
  
  
   
  return (
    <>
      <section id="center">
        <button ref = {ref}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button type="button"
          className="counter"
          onClick = {()=>{ref.current.style.display = "none"}}> Change Me </button>
        <button type="button"
          className="counter"
          onClick = {()=>{ref.current.style.display = "flex"}}> Undo </button>
      </section>
    </>
  )
}

export default App
