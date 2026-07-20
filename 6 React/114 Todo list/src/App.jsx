import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editID, setEditID] = useState(null)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
      console.log(`Successfully loaded: ${todoString}`)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    let idToUse = editID ? editID : uuidv4();
    console.log(`Task ID: ${idToUse}`);
    setTodos([...todos, { id: idToUse, todo, isCompleted: false}])
    setTodo("")
    setEditID(null)
    saveToLS()
  }
  const handleEdit = (id) => {
    let targetTodo = todos.find(item => item.id === id);
    console.log(targetTodo)
    setTodo(targetTodo.todo); // pops back the text into the input field
    setEditID(id);

    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS()
  }
  const handleDelete = (id) => {
    let targetTodo = todos.find(item => item.id === id);
    console.log(targetTodo)
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      console.log(id);
      // console.log(index);
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 bg-violet-50 rounded-md p-2 mx-3">
          To-Do List
        </div>
        <div className="Todos bg-violet-100 rounded-md m-2 mx-3 min-h-[65vh]">
          <h2 className='p-3'>Add To-Do</h2>
          <form onSubmit={handleAdd}>
            <input onChange={handleChange} value={todo} className='border rounded-sm p-3 m-2 bg-white min-w-1/2' type="text" placeholder='Add task' />

            <button type='submit' className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white '>Add</button>
          </form>

          <h2 className='p-3'>Task</h2>

          <div className="todos flex p-2 flex-col gap-2.5 w-1/2">
            {todos.map(item => {
              return <div key={item.id} className="todo flex justify-between items-center">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />

                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

                <div className="buttons flex gap-2">
                  <button name={item.id} onClick={() => handleEdit(item.id)} className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white mx-1'>Edit</button>

                  <button name={item.id} onClick={() => handleDelete(item.id)} className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white mx-1'>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
