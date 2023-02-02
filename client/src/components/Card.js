import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-primary-gray rounded-md w-1/2 p-8'>
        <div className='font-bold text-2xl py-4'>{props.heading}</div>
        <div>{props.description}</div>
    </div>
  )
}

export default Card