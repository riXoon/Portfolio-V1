import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons
import rixlogo from '../../assets/rixlogo.svg';
import newLogo from '../../assets/newLogo.png'
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle menu visibility
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after clicking
    }
  };


  return (
    <nav className={`fixed w-full z-20 ${isOpen ? 'bg-deepPurple' : 'bg-transparent'} md:bg-transparent transition-colors duration-300 ease-in-out`}>
      <div className='flex items-center justify-between mx-4 sm:mx-10 md:mx-20 py-4'>
        <img src={newLogo} alt="Logo" className='size-28 md:size-32' />

        {/* Centered Navigation for Desktop */}
        <div className='flex-1 flex justify-center'>
          <ul className='hidden md:flex space-x-8'>
            <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
            <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</li>
            <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('testimonial')}>Testimonial</li>
            <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>

        {/* Mobile Menu Button on the Right */}
        <div className='md:hidden z-30'>
          <button
            onClick={toggleMenu}
            className={`text-gray-200 transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Button for desktop view */}
        <div className='hidden md:block'>
          <Button text="Get in touch" />
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-deepPurple z-10 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <ul className='flex flex-col items-center justify-center h-screen space-y-8 text-lg'>
          <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
          <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</li>
          <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('testimonial')}>Testimonial</li>
          <li className='hover:text-fuchsia-500 cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
          <li>
            <Button text="Get in touch" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
