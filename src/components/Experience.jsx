import React from 'react'
//Photos of the necessary technologies 
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import css from '../assets/css.png';
import node from '../assets/node.png';
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


export const Experience = () => {
    const technologies = [
        {
            id: 1,
            title: "HTML",
            src: html,
            style: "shadow-orange-500"
        },
        {
            id: 2,
            title: "CSS",
            src: css,
            style: "shadow-blue-500"
        },
        {
            id: 3,
            title: "JavaScript",
            src: javascript,
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            title: "NodeJS",
            src: node,
            style: "shadow-green-500"
        },
        {
            id: 5,
            title: "React",
            src: react,
            style: "shadow-blue-600"
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
          },
    ]
  
    return (
    <div 
        name="Experience"
        className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black pb-12 pt-36'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</h1>
                <p className='pt-4'>
                    These are the technologies I am familiar with
                </p>
            </div>
            <div className='w-full grid sm:grid-cols-3 grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>
                {technologies.map(({id, title, src, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration--500 py-2 rounded-lg ${style}`}>
                        <img
                            src={src}
                            alt=""
                            className='w-36 mx-auto'
                        />
                        <h1 className='mt-4 font-projectsTitle text-xl md:text-4xl '>{title}</h1>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}
