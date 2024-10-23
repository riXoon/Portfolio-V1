import React, { useState } from 'react';
import rixlogo from '../../assets/rixlogo.svg';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle menu visibility
  };

  return (
    <nav className='fixed w-full z-10'>
      <div className='flex items-center justify-between mx-4 sm:mx-10 md:mx-20 py-4'>
        <img src={rixlogo} alt="Logo" className='h-10' />

        {/* Centered Navigation */}
        <div className='flex-1 flex justify-center'>
          <ul className='hidden md:flex space-x-8'>
            <li className='hover:text-fuchsia-500 cursor-pointer'>Home</li>
            <li className='hover:text-fuchsia-500 cursor-pointer'>Projects</li>
            <li className='hover:text-fuchsia-500 cursor-pointer'>Testimonial</li>
            <li className='hover:text-fuchsia-500 cursor-pointer'>Contact</li>
          </ul>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Button text="Menu" onClick={toggleMenu} />
          </div>
        </div>

        <div className='hidden md:block'>
          <Button text="Get in touch" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg'>
          <ul className='flex flex-col items-center py-4'>
            <li className='py-2 hover:text-fuchsia-500 cursor-pointer'>Home</li>
            <li className='py-2 hover:text-fuchsia-500 cursor-pointer'>Projects</li>
            <li className='py-2 hover:text-fuchsia-500 cursor-pointer'>Testimonial</li>
            <li className='py-2 hover:text-fuchsia-500 cursor-pointer'>Contact</li>
            <li className='py-2'>
              <Button text="Get in touch" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
