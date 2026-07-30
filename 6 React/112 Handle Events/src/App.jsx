import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Hala Madrid!")
  const[form, setForm] = useState({})

  const handleClick = () => {
    alert("I was poked!!!")
  }
  const handleMouseOver = () => {
    alert("I am a mouse over")
  }
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="container">
        <div className="button">
          <button onClick={handleClick}>Click Me</button>
        </div>

        <div className="red">
          <button onMouseOver={handleMouseOver}>Click Me</button>
        </div>
        {/* <input type="text" value={name} onChange={handleChange}/> */}

        <input placeholder='E-mail' type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
        <input placeholder='Contact Number' type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
      </div>

    </>
  )
}

export default App