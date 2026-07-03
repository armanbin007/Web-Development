import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer'

function App() {
  const[value, setValue] = useState(0)

  return (
    <div className="App">
      <NavBar logoText = "Ki Koros???"/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click Me</button>
      <Footer/>
    </div>
  );
}

export default App;
