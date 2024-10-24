import React, { useState, useEffect, useRef } from 'react';
import '../Hero/Hero.css';
import profile_img from '../../assets/profile_img.svg';
import tech_1 from '../../assets/tech_1.svg';
import tech_2 from '../../assets/tech_2.svg';
import tech_3 from '../../assets/tech_3.svg';
import tech_4 from '../../assets/tech_4.svg';
import tech_5 from '../../assets/tech_5.svg';
import tech_7 from '../../assets/tech_7.svg';
import tech_8 from '../../assets/tech_8.svg';
import tech_9 from '../../assets/tech_9.svg';
import tech_10 from '../../assets/tech_10.svg';
import Button from '../Button/Button';

const Hero = () => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const typingSpeed = 200;
  const deletingSpeed = 70;
  const phrases = ["Hello there! ", "I'm Erickson Guhilde, "];

  const typingIndex = useRef(0);
  const deletingIndex = useRef(0);
  const currentText = useRef("");

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingInterval;
    let deletingInterval;

    const typeAndDelete = () => {
      if (phase === 0) {
        typingInterval = setInterval(() => {
          if (typingIndex.current < phrases[phraseIndex].length) {
            currentText.current += phrases[phraseIndex][typingIndex.current];
            setText(currentText.current);
            typingIndex.current += 1;
          } else {
            clearInterval(typingInterval);
            setPhase(1);
          }
        }, typingSpeed);
      } else if (phase === 1) {
        deletingInterval = setInterval(() => {
          if (currentText.current.length > 0) {
            currentText.current = currentText.current.slice(0, -1);
            setText(currentText.current);
          } else {
            clearInterval(deletingInterval);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setPhase(0);
            typingIndex.current = 0;
          }
        }, deletingSpeed);
      }
    };

    typeAndDelete();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [text, phase, phraseIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (phase === 0) {
        setShowCursor((prev) => !prev);
      } else {
        setShowCursor(false);
      }
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [phase]);

  return (
    <div className='hero flex flex-col items-center gap-8 p-4 top-14 relative' id='home'>
      <img src={profile_img} alt="Profile" className='h-48 mt-10 sm:mt-20' />
      <div className="text-container flex flex-col justify-center items-center w-full text-center gap-8">
        <h1 className="text-3xl sm:text-5xl font-semibold font-outfit flex flex-wrap items-center justify-center w-full leading-tight">
          <span className="typed-text">{text}</span>
          {showCursor && <span className="cursor">|</span>}
        </h1>
        <h1 className='text-3xl sm:text-5xl font-semibold font-outfit'>Front-End Developer based in the Philippines.</h1>
        <p className='w-full sm:w-8/12 text-lg font-normal leading-8 text-center font-outfit'>
          I'm a 2nd year Bachelor of Science in Information Technology (BSIT) in Quezon City University.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-16'>
        <Button text="Get in touch" />
        <div className='py-4 px-8 border-2 rounded-3xl cursor-pointer hover:border-fuchsia-500 duration-500 font-outfit'>
          My Resume
        </div>
      </div>

      <h1 className='text-3xl font-bold mt-20'>Tech Stacks</h1>
      <div className='flex flex-wrap justify-center gap-5'>
        <img src={tech_1} className='h-16 sm:h-20' alt="Tech Stack 1" />
        <img src={tech_2} className='h-16 sm:h-20' alt="Tech Stack 2" />
        <img src={tech_3} className='h-16 sm:h-20' alt="Tech Stack 3" />
        <img src={tech_4} className='h-16 sm:h-20' alt="Tech Stack 4" />
        <img src={tech_5} className='h-16 sm:h-20' alt="Tech Stack 5" />
        <img src={tech_7} className='h-16 sm:h-20' alt="Tech Stack 7" />
        <img src={tech_8} className='h-16 sm:h-20' alt="Tech Stack 8" />
        <img src={tech_9} className='h-16 sm:h-20' alt="Tech Stack 9" />
        <img src={tech_10} className='h-16 sm:h-20' alt="Tech Stack 10" />
      </div>
    </div>
  );
};

export default Hero;
