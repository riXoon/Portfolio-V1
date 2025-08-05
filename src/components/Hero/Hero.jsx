import React, { useState, useEffect, useRef } from 'react';
import '../Hero/Hero.css';
import profile_img from '../../assets/profile_img.svg';
import { techStack } from '../Data/TechStack';
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
        <h1 className='text-xl sm:text-4xl font-semibold font-outfit'>Aspiring Fullstack Developer | Cybersecurity Enthusiast</h1>
        <p className='w-full sm:w-8/12 text-lg font-normal leading-8 text-center font-outfit'>
          I'm a 3rd year Bachelor of Science in Information Technology (BSIT) in Quezon City University.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-16'>
        <Button text="Get in touch" />
        <div className='py-4 px-8 border-2 rounded-3xl cursor-pointer hover:border-fuchsia-500 duration-500 font-outfit'>
          My Resume
        </div>
      </div>

      <h1 className='text-3xl font-bold mt-32'>Technologies & Tools</h1>
   <div className="w-full max-w-6xl mx-auto mt-8 px-4 flex flex-wrap justify-center gap-14">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            <img
              src={tech}
              alt={`Tech Stack ${index + 1}`}
              className="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
          </div>
        ))}
      </div>



    </div>
  );
};

export default Hero;
