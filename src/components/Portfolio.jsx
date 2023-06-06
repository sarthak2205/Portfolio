import React from 'react';
import CityTour from '../assets/Portfolio/CityTour.png'
import FeedbackUI from '../assets/Portfolio/FeedbackUI.png'
import QuizzBee from '../assets/Portfolio/QuizzBee.png'

const Portfolio = () => {
    
    const portfolios = [
        {
            id: 1,
            Title: "Feedback",
            src: FeedbackUI,
            href: "https://regal-sunflower-4a2f1b.netlify.app/",
            code: "https://github.com/sarthak2205/Feedback-",
            shadow: "shadow-blue-600"
        },
        {
            id: 2,
            Title: "City Tour",
            src: CityTour,
            href: "/",
            code: "https://github.com/sarthak2205/City-tour",
            shadow: "shadow-red-600"
        },
        {
            id: 3,
            Title: "Quizz Bee",
            src: QuizzBee,
            href: "/",
            code: "https://github.com/sarthak2205/quizzbee",
            shadow: "shadow-green-600"
        }
    ]


  return (
    <div
        name="Portfolio"
        className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white'
    >
        <div
            className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        >
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</h1>
                <p className='py-6'>Check out some of m work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {portfolios.map(({ id, Title, src, code, shadow }) => (
                    <div key={id} className={`shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 hover:${shadow}`}>
                        <div className='flex justify-center text-4xl font-projectsTitle'>
                            <h1>{Title}</h1>
                        </div>
                        <img 
                            src={src}
                            alt=""
                            className='rounded-md duration-200 hover:scale-105 md:h-72'
                        />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Demo    
                            </button>
                            <button 
                                className='px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105'
                            >
                                <a 
                                    href={code ? code : "/"}
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    Code
                                </a>    
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio