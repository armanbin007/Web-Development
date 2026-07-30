import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  return (
    <div>
      Login
      <form className='' action={`user/${username}`}>
        <input className='px-2 rounded-md border-2' type="text" placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)} />
        <button className='px-1 py-0 rounded-md border-2 m-2' type="submit">Go</button>
      </form>
    </div>
  )
}

export default Login