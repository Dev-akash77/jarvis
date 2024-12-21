import React from 'react'

const Heading = ({text,highlight,lastText}) => {
  return (
    <div className='text-[3.2rem] font-semibold'>{text} <span className='text-cyan'>{highlight}</span> {lastText}</div>
  )
}

export default Heading