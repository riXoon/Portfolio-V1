import React from 'react'
import rixlogo from '../../assets/rixlogo.svg'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-20 my-6 fixed gap-80'>
        <img src={rixlogo} alt="" className='h-10' />
        <ul className='flex items-center gap-14'>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <Button text="Get in touch" />
    </div>
  )
}

export default Navbar