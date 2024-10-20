import React from 'react'

const Button = ({ text }) => {
  return (
    <div className='py-4 px-8 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer hover:scale-105 duration-500 font-outfit'>
        {text}
    </div>

  )
}

export default Button