import React from 'react'
import Footer from './Footer'

const NavBar = (props) => {
  return (
    <div>
        <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <Footer/>
    </div>
  )
}
export default NavBar
