import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';
import project3 from '../../assets/project-3.png';
import project4 from '../../assets/project-4.png';
import project5 from '../../assets/project-5.png';
import project6 from '../../assets/project-6.png';
import project7 from '../../assets/project-7.png';
import project8 from '../../assets/project-8.png';
import project9 from '../../assets/project-9.png';
import project10 from '../../assets/project-10.png';
import project11 from '../../assets/project-11.png';
import project12 from '../../assets/project-12.png';
import project13 from '../../assets/project-13.png'

export const items = [ 
  {
    title: "Marites (Reddit Inspired)",
    description: "Marites is an online forum/blog posting website where you can post, discuss, and interact with other users! (not open for public use). I applied a parallax effect on its landing page.",
    image: project1,
    tools: ["PHP", "JavaScript", "MySQL"],
    category: "highlight",
    demo: "https://www.facebook.com/erickson.guhilde.50/videos/743079757150092", // Update with actual demo link
    source: "https://github.com/your-repo/marites", // Update with actual source link

  },
  {
    title: "Zentry Clone",
    description: "This was my first project this 2025 and I created this website for the sake of learning how animation works in a React environment with the help of tutorials ofc.",
    image: project12,
    tools: ["React", "Tailwind"],
    category: "highlight",
    demo: "https://zentry-clone-web.netlify.app", 
    source: "https://github.com/riXoon/zetry-clone",
  },

  {
    title: "FriseUp: CRM for CarrotFriezz",
    description: "FriseUp is our proposed Customer Relationship Management (CRM) system, built using the React framework. Designed to empower Carrot Friezz. (Not open for public use).",
    image: project11,
    tools: ["PHP", "React", "MySQL", "Tailwind"],
    category: "highlight",
    demo: "https://www.facebook.com/erickson.guhilde.50/videos/1594694208085887", 
    source: "https://github.com/riXoon/CarrotFriezz-CRM",
  },

  {
    title: "Entriq",
    description: "Entriq blablabla",
    image: project13,
    tools: ["HTML", "CSS", "Javascript"],
    category: "highlight",
    demo: "https://entriq.netlify.app", 
    source: "https://github.com/riXoon/EntriqV4",
  },


  {
    title: "Furniro",
    description: "Furniro is a furniture shop website that I built when I was trying to review my knowledge on creating a website after a long hiatus. (This website is not responsive but still one of my favorite works).",
    image: project2,
    tools: ["HTML", "CSS", "JavaScript"],
    category: "highlight",
    demo: "https://furnir0.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/furniro", // Update with actual source link

  },

  {
    title: "FoodNinja",
    description: "I created this simple website when I was studying TailwindCSS and trying to implement it into my projects.",
    image: project3,
    tools: ["JavaScript", "Tailwind"],
    category: "other",
    demo: "https://ninjafoood.netlify.app", // Update with actual demo link
    source: " ", // Update with actual source link

  },
  {
    title: "Travlog",
    description: "Travlog is a travel website landing page that I made when I was studying responsive design.",
    image: project4,
    tools: ["HTML", "CSS", "JavaScript"],
    category: "highlight",
    demo: "https://trav-vlog.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/travlog", // Update with actual source link
  },
  {
    title: "To-Do List",
    description: "This is a simple To-Do List that I created as part of the ReactJS course that I took.",
    image: project5,
    tools: ["React"],
    category: "other",
    demo: "https://tudulis.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/todolist-React", // Update with actual source link

  },
  {
    title: "NASA APOD Project",
    description: "NASA APOD Project is a website that generates space photos uploaded by NASA with the help of the NASA APOD API that I implemented in this project.",
    image: project6,
    tools: ["JavaScript"],
    category: "other",
    demo: "https://nasa-apod-pr0ject.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/APOD-Project", // Update with actual source link

  },
  {
    title: "Monito: Pet Store",
    description: "Monito is a Pet Store where you can buy a pet. It was fun making this website since I always see cute photos of dogs.",
    image: project7,
    tools: ["HTML", "CSS", "JavaScript"],
    category: "highlight",
    demo: "https://moonito.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/monito", // Update with actual source link

  },
  {
    title: "STI Landing Page",
    description: "This website was commissioned by my first client, a student from STI Sta. Mesa, for their project: Creating a website to promote the STI Sta. Mesa branch. (This project is not yet responsive)",
    image: project8,
    tools: ["HTML", "CSS", "JavaScript"],
    category: "other",
    demo: "https://sti-sta-mesa.netlify.app", // Update with actual demo link
    source: " ", // Update with actual source link

  },
  {
    title: "Earth Project",
    description: "I created this project roughly 4 years ago for a homework assignment in programming during senior high school. This was the first time I used JavaScript in a project.",
    image: project9,
    tools: ["HTML", "CSS", "JavaScript"],
    category: "other",
    demo: "https://space-earth-project.netlify.app", // Update with actual demo link
    source: " ", // Update with actual source link

  },
  {
    title: "GothamGains: Workout Generator",
    description: "GothamGains is a gym website project that can generate personalized workout plans based on your chosen workout split and target muscles.",
    image: project10,
    tools: ["React", "Tailwind"],
    category: "highlight",
    demo: "https://gothamgains.netlify.app", // Update with actual demo link
    source: "https://github.com/riXoon/GothamGains", // Update with actual source link

  },
];

const Card = ({ title, description, image, tools, demo, source, isImageFirst }) => {
  return (
    <div className="mb-20 flex flex-col items-center w-full">
      {/* Project section */}
      <div
        className={`flex flex-col md:flex-row gap-10 w-full justify-center items-center ${
          isImageFirst ? "" : "md:flex-row-reverse"
        }`}
      >
        <img
          src={image}
          className="h-72 w-auto max-w-full object-contain"
          alt={title}
        />
        <div className="flex flex-col gap-4 w-full md:w-2/5">
          <h1 className="text-2xl md:text-4xl text-center md:text-left">
            {title}
          </h1>
          <p className="text-base md:text-lg text-center md:text-left">
            {description}
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {/* Display the tools array */}
            {tools &&
              tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-deepPurple px-4 py-2 text-sm text-white rounded-md"
                >
                  {tool}
                </div>
              ))}
          </div>
          <div className="flex md:flex-row md:gap-4 justify-center items-center md:justify-start">
            {/* Responsive Demo and Source buttons */}
            <a
              href={demo}
              className="px-4 py-2 text-sm text-center text-white underline hover:text-gray-500 transition duration-200  rounded-lg w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={source}
              className="px-4 py-2 text-sm text-center text-white underline hover:text-gray-500 transition duration-200 rounded-lg w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const [filter, setFilter] = useState('highlight');
  const [showAll, setShowAll] = useState(false);

  // Filter the items
  const filteredItems = items.filter(item => item.category === filter);

  // Show less, show more logic
  const itemsToDisplay = showAll ? filteredItems : filteredItems.slice(0, 2);

  return (
    <div className='flex flex-col justify-center items-center mt-52' id='projects'>
      <h1 className='text-3xl font-bold'>Projects</h1>
      <div className='flex gap-10 mt-12'>
        <button
          className={`py-4 px-8 border-2 rounded-3xl font-semibold cursor-pointer duration-500 font-outfit
            ${filter === 'highlight' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'hover:border-fuchsia-500'}`}
          onClick={() => setFilter('highlight')}
        >
          Highlight
        </button>
        <button
          className={`py-4 px-10 border-2 rounded-3xl font-semibold cursor-pointer duration-500 font-outfit
            ${filter === 'other' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'hover:border-fuchsia-500'}`}
          onClick={() => setFilter('other')}
        >
          Other
        </button>
      </div>

      {/* Project section */}
      <div className='flex flex-col justify-center items-center mt-32'>
        <TransitionGroup className="project-container">
          {itemsToDisplay.map((item, index) => (
            <CSSTransition
              key={`${filter}-${item.title}`} // Unique key for each filter change
              timeout={500} // Duration of the fade effect
              classNames="fade" // Add the fade class for animation
            >
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                tools={item.tools}
                demo={item.demo}
                source={item.source}
                isImageFirst={index % 2 === 0}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      {/* "See More" / "See Less" Button */}
      <button
        className='mt-8 py-3 px-6 border-2 rounded-3xl font-semibold cursor-pointer hover:border-fuchsia-500 duration-500'
        onClick={() => setShowAll(prev => !prev)}
      >
        {showAll ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default Projects;
