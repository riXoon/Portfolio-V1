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

  // Track typing index and text length in ref to persist value across renders
  const typingIndex = useRef(0);
  const deletingIndex = useRef(0);
  const currentText = useRef("");

  // Ref for cursor visibility
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingInterval;
    let deletingInterval;

    const typeAndDelete = () => {
      if (phase === 0) {
        // Typing phase
        typingInterval = setInterval(() => {
          if (typingIndex.current < phrases[phraseIndex].length) {
            currentText.current += phrases[phraseIndex][typingIndex.current];
            setText(currentText.current);
            typingIndex.current += 1;
          } else {
            clearInterval(typingInterval);
            setPhase(1); // Switch to deleting phase after typing is complete
          }
        }, typingSpeed);
      } else if (phase === 1) {
        // Deleting phase
        deletingInterval = setInterval(() => {
          if (currentText.current.length > 0) {
            currentText.current = currentText.current.slice(0, -1);
            setText(currentText.current);
          } else {
            clearInterval(deletingInterval);
            // Once deleted, move to next phrase
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase in the cycle
            setPhase(0); // Restart typing phase
            typingIndex.current = 0; // Reset typing index for the next phrase
          }
        }, deletingSpeed);
      }
    };

    typeAndDelete(); // Start the typing and deleting effect

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [text, phase, phraseIndex]); // Re-run the effect when `text`, `phase`, or `phraseIndex` changes

  useEffect(() => {
    // Control cursor visibility during typing and deleting phases
    const cursorInterval = setInterval(() => {
      if (phase === 0) {
        setShowCursor((prev) => !prev); // Toggle cursor visibility while typing
      } else {
        setShowCursor(false); // Hide cursor while deleting
      }
    }, 500); // Toggle cursor every 500ms

    return () => clearInterval(cursorInterval); // Cleanup cursor interval on unmount
  }, [phase]);

  return (
    <div className='hero flex flex-col items-center gap-8'>
      <img src={profile_img} alt="" className='h-48 mt-40'/>
      <div className="text-container flex flex-col flex-wrap justify-center items-center w-full text-center gap-8">
        {/* Both typed text and static text are in the same flex container */}
        <h1 className="text-5xl font-semibold font-outfit flex flex-wrap items-center justify-center w-2/5 leading-tight">
          <span className="typed-text">{text}</span>
          {showCursor && <span className="cursor">|</span>} {/* Add a cursor */}
        </h1>

        <h1 className='text-5xl font-semibold font-outfit'>Front-End Developer based in the Philippines.</h1>
        <p className='w-8/12 text-lg font-normal leading-8 text-center font-outfit'>
        I'm a 2nd year Bachelor of Science in Information Technology (BSIT) in Quezon City University.
      </p>
      </div>
      
      <div className='flex gap-16'>
        <Button text="Get in touch" />
        <div className='py-4 px-8 border-2 rounded-3xl cursor-pointer hover:border-fuchsia-500 duration-500 font-outfit'>My Resume</div>
      </div>

      <h1 className='text-3xl font-bold mt-32'>Tech Stacks</h1>
      <div className='flex gap-5'>

        
        <img src={tech_1} className='h-20'/>
        <img src={tech_2} className='h-20'/>
        <img src={tech_3} className='h-20'/>
        <img src={tech_4} className='h-20'/>
        <img src={tech_5} className='h-20'/>
        <img src={tech_7} className='h-20'/>
        <img src={tech_8} className='h-20'/>
        <img src={tech_9} className='h-20'/>
        <img src={tech_10} className='h-20'/>

      </div>
    </div>
  );
};

export default Hero;
