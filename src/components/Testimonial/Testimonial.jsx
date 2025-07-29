import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import Quote from '../../assets/blockquote.svg';
import Testi1 from '../../assets/testi-1.jpg';
import Testi2 from '../../assets/testi-2.png';
import Testi3 from '../../assets/testi-3.jpg';
import Testi4 from '../../assets/testi-4.png';
import Testi5 from '../../assets/testi-5.jpg';
import Testi6 from '../../assets/testi-6.jpg';

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
  {
    id: 5,
    image: Testi5,
    name: 'Cedric Paul Mendoza',
    label: 'Back-End Developer',
    text: "I had the pleasure of working closely with Erickson for the entire semester on the development of our website, 'Marites'. Erickson is an exceptional colleague who consistently demonstrates outstanding programming expertise and dedication. His meticulous attention to detail, strategic thinking, and problem-solving abilities have proven invaluable in achieving exceptional results.",
  },
  {
    id: 6,
    image: Testi6,
    name: 'Steffani Vienne Carcer',
    label: 'UI-UX Designer',
    text: "I worked with Erickson on a summer project as the UI designer. His dedication and superb programming skills really brought the designs to life. He is constantly learning and developing, and I can proudly say that Erickson is a reliable and talented collaborator. Working with him throughout the project was both fun and rewarding.",
  },
];

const Testimonial = () => {
  const [expandedId, setExpandedId] = useState(null);
  const splideRef = useRef(null);

  const handleToggle = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const handleSlideChange = () => {
    setExpandedId(null);
  };

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      splide.on('moved', handleSlideChange);
    }
    return () => {
      const splide = splideRef.current?.splide;
      if (splide) {
        splide.off('moved', handleSlideChange);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center mt-48 mb-60 " id='testimonial'>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-outfit font-bold mb-4">Testimonial</h1>
        <p className='text-lg font-outfit'>What people that I've worked with say about me.</p>
      </div>

      <div className="relative select-none w-full">
        <blockquote>
          <img src={Quote} className="absolute -z-10 -top-4 -left-4" alt="Quote Left" />
          <img
            src={Quote}
            className="absolute -z-10 -bottom-12 -right-0.5 rotate-180"
            alt="Quote Right"
          />
        </blockquote>

        <Splide
          ref={splideRef}
          options={{
            perPage: 1,
            type: 'fade',
            speed: 1000,
            loop: true,
            rewind: true,
            autoplay: true,
            interval: 5000,
          }}
        >
          {feedbacks.map((feedback) => (
            <SplideSlide key={feedback.id}>
              <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:">
                <img
                  src={feedback.image}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-0"
                  alt={feedback.name}
                />
                <div className="md:ml-4 text-left">
                  <p className="mb-2 text-base md:text-lg">
                    <span>
                      {expandedId === feedback.id
                        ? feedback.text
                        : feedback.text.length > 150
                        ? `${feedback.text.slice(0, 150)}...`
                        : feedback.text}
                    </span>
                    <button
                      onClick={() => handleToggle(feedback.id)}
                      className="text-blue-500 inline ml-2"
                    >
                      {expandedId === feedback.id ? 'See Less' : 'See More'}
                    </button>
                  </p>

                  <div>
                    <p className="font-bold text-base">{feedback.name},</p>
                    <p className="font-semibold text-sm">{feedback.label}</p>
                  </div>
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
