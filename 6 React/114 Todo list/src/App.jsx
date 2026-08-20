import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      return JSON.parse(todoString); // If data exists, use it as the starting state
    } else {
      return []; // If no data exists, start with an empty array
    }
  });
  const [editID, setEditID] = useState(null)
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log("Updated Local Storage:", todos);
  }, [todos]) // Saving every update
  
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    let idToUse = editID ? editID : uuidv4();
    console.log(`Task ID: ${idToUse}`);
    setTodos([...todos, { id: idToUse, todo, isCompleted: false }])
    setTodo("")
    setEditID(null)
  }
  const handleEdit = (id) => {
    let targetTodo = todos.find(item => item.id === id);
    console.log(targetTodo)
    setTodo(targetTodo.todo); // pops back the text into the input field
    setEditID(id);

    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }
  const handleDelete = (id) => {
    let targetTodo = todos.find(item => item.id === id);
    console.log(targetTodo)
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
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
  }

  return (
    <>
      <Navbar />
      <div className="mt-5 bg-fuchsia-100 rounded-md p-2 mx-3 text-center font-bold shadow-2xl">
        To-Do List
      </div>
      <div className="container mx-auto justify-center items-center flex flex-col">

        <div className="Todos bg-violet-100 mt-5 rounded-t-md mx-3  w-full md:min-w-[65vw] md:max-w-[65vw] justify-center items-center flex flex-col">
          <h2 className='p-3'>Add To-Do</h2>
          <form onSubmit={handleAdd} className='flex gap-2 w-full max-w-md items-center'>
            <input onChange={handleChange} value={todo} className='border rounded-xl p-3 m-2 bg-white min-w-1/2 grow' type="text" placeholder='Add task' />

            <button type='submit' className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white shrink-0 h-8'><IoIosAdd/></button>
          </form>
          <div className="toggle m-1 p-2">
            <input className='' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
          </div>
          <h2 className='p-3 font-bold underline text-2xl'>Tasks</h2>
        </div>
        <div className="Todos bg-violet-100 rounded-b-md mx-3 min-h-[30vh] w-full md:min-w-[65vw] md:max-w-[65vw] items-center flex flex-col">


          <div className="todos flex px-15 flex-col gap-2.5 w-full">
            {todos.map(item => {
              //if the show finished is toggled on then it would render every items but if it's toggled off and task is not completed then it renders the task otherwise it just doesn't render that task
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between items-center bg-white rounded-md p-2">
                <input className='m-2' name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />

                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

                <div className="buttons flex gap-2">
                  <button name={item.id} onClick={() => handleEdit(item.id)} className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white mx-1'><CiEdit /></button>

                  <button name={item.id} onClick={() => handleDelete(item.id)} className='py-1 cursor-pointer border-black rounded-sm p-2 bg-violet-800 hover:bg-violet-950 text-white mx-1'><MdDeleteForever /></button>
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
