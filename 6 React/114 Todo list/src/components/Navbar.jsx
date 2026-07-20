import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-700 text-white mx-auto">
        <div className="logo p-2 hover:text-red-400 duration-300 cursor-pointer">
            <span className='text-2xl font-bold'>iTask</span>
        </div>
      <ul className='flex gap-5 justify-center items-center p-3'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About Us</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
