import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {

  return (
    <>
    <NavBar/>
    <div className='cont'>
      <Card
      title="card 1" des = "corruption in bd" content = "lorem10"/>
      {/* here title and des these are props */}
      <Card
      title="goat" des = "Ronaldo CR7" content = "Cristiano Ronaldo"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
