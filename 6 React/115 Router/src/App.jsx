import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar />
        <div className="content">
          <Home />
        </div>
      </>
    },
    {
      path: "/login",
      element: <><Navbar />
        <div className="content">
          <Login />
        </div>
      </>
    },
    {
      path: "/about",
      element: <><Navbar />
        <div className="content">
          <About />
        </div>
      </>
    },
    {
      path: "/user/:username",
      element: <><Navbar />
        <div className="content">
          <User />
        </div>
      </>
    },
  ])
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App