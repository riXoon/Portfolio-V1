import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import Quote from '../../assets/blockquote.svg';
import Testi1 from '../../assets/testi-1.jpg';
import Testi2 from '../../assets/testi-2.png';
import Testi3 from '../../assets/testi-3.jpg';
import Testi4 from '../../assets/testi-4.png';

export const feedbacks = [
  {
    id: 1,
    image: Testi1,
    name: 'Janrell Quiaroro',
    label: 'Back-End Developer, Kuma Technologies',
    text: 'I had the pleasure of working with Erickson on a small project, and I can confidently say that he has exceptional talent in his field. His mastery of front-end development is evident in the quality of his work, and he consistently utilizes up-to-date technology stacks that enhance project efficiency. I highly recommend Erickson for any front-end project; his skill and professionalism are truly unmatched.',
  },

  {
    id: 2,
    image: Testi2,
    name: 'Adrian Frivaldo',
    label: 'Front-End Developer',
    text: "When we were in our first year of college, we worked together to create a website, and I have to say, he's truly an exceptional person. His passion for this field is unmatched. He's always eager to learn and even more willing to share his knowledge with everyone around him. In addition to being an outstanding front-end developer, he is also an inspiring and effective leader.",
  },

  {
    id: 3,
    image: Testi3,
    name: 'Christian Ancog',
    label: 'Back-End Developer',
    text: 'Through my senior high school experience, Erickson was a good front-end developer. His designing skill is complex when we develop a small system, he knows how to plan it using tools such as figma.',
  },

  {
    id: 4,
    image: Testi4,
    name: 'Meryl Alcantra',
    label: 'IT Student',
    text: 'I had the opportunity to collaborate with Erickson on a recent project, and I can confidently say that his skills in front-end development are exceptional. Even within a short period, we managed to complete our project successfully, largely due to his expertise and dedication. Erickson was one of the key programmers, and his attention to detail, problem-solving ability, and proficiency in using modern technologies really stood out.',
  },
];

const Testimonial = () => {
  const [expandedId, setExpandedId] = useState(null);
  const splideRef = useRef(null);

  // Handle toggling "See More / See Less"
  const handleToggle = (id) => {
    if (expandedId === id) {
      setExpandedId(null); // Collapse if already expanded
    } else {
      setExpandedId(id); // Expand the clicked testimonial
    }
  };

  // Handle slide change to collapse "See More"
  const handleSlideChange = () => {
    setExpandedId(null); // Reset expandedId to collapse "See More" on slide change
  };

  // Attach event listener for slide change and cleanup on unmount
  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      splide.on('moved', handleSlideChange); // Reset "See More" on slide change
    }
    return () => {
      const splide = splideRef.current?.splide;
      if (splide) {
        splide.off('moved', handleSlideChange); // Clean up event listener on unmount
      }
    };
  }, []);

  return (
    <div className="max-w-tXl mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-outfit font-bold mb-8">Testimonial</h1>
        <p className='text-lg font-outfit'>What people that I've worked with say about me.</p>
      </div>

      <div className="relative select-none px-4">
        <blockquote>
          <img src={Quote} className="absolute -z-10 -top-4 -left-4" />
          <img
            src={Quote}
            className="absolute -z-10 -bottom-12 -right-0.5 rotate-180"
          />
        </blockquote>

        <Splide
          ref={splideRef} // Set ref for Splide instance
          options={{
            perPage: 1,
            type: 'fade',
            speed: 1000,
            loop: true,
            rewind: true,
            autoplay: true, // Enable autoplay
            interval: 5000, // Set interval for autoplay (5 seconds)
          }}
        >
          {feedbacks.map((feedback) => (
            <SplideSlide key={feedback.id}>
              <img
                src={feedback.image}
                className="max-w-full block w-36 h-36 object-cover rounded-full"
              />
              <div>
                <p className="mb-4 text-lg">
                  <span>
                    {expandedId === feedback.id
                      ? feedback.text // Show full text if expanded
                      : feedback.text.length > 150
                      ? `${feedback.text.slice(0, 150)}...` // Show truncated text
                      : feedback.text} {/* Only add ellipsis if text is longer */}
                  </span>
                  <button
                    onClick={() => handleToggle(feedback.id)}
                    className="text-blue-500 inline ml-2"
                  >
                    {expandedId === feedback.id ? 'See Less' : 'See More'}
                  </button>
                </p>

                <div>
                  <p className="font-bold">{feedback.name},</p>
                  <p className="font-semibold">{feedback.label}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
