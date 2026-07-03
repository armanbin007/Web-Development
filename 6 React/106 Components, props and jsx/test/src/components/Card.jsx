import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <p className='content'>{props.content}</p>
    </div>
  )
}

export default Card