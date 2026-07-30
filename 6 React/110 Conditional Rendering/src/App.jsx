import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "Complete this work"
    },
    {
      title: "Hey 2",
      desc: "Complete this work"
    },
    {
      title: "Hey 3",
      desc: "Complete this work"
    },
  ])
  
  // Component
  const Todo = ({todo})=> {
    return(
      <>
      <div  className="m-4 p-4 border">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
        </>
    )
  }


  return (
    <>
      <section id="center">
        <div>
        {todos.map(todo=>{
          return <Todo key={todo.title} todo={todo}/>
        })}
        </div>

        {showbtn?<button className='counter'>True</button>:<button className='counter'>False</button>}

        {/* {showbtn && <button>Show This button when 2nd btn clicked</button>}  */}
        {/* Works like ternary operation */}
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        
        <button className='counter' onClick={()=> setshowbtn(!showbtn)}>Reveal</button>

      </section>
    </>
  )
}

export default App
