import React from 'react'

const Card = ({des,heading,id}) => {
  return (
    <div className=' card_main px-4 py-6 cursor-pointer rounded-lg border border-cyan'>
        <h2 className='card_heading text-3xl font-semibold'>{heading}</h2>
        <div className='mt-[2rem]'>
            <p>
                {des}
            </p>
        </div>
    </div>
  )
}

export default Card