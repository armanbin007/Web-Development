<<<<<<< HEAD
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

=======
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

>>>>>>> f0642556dab4447175dff705a761ae5590385fa3
export default User