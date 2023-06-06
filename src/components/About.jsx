import React from 'react'

const About = () => {
  return (
    <div
        name="About"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12 md:py-0'
    >
        <div className='max-w-screen-lg flex flex-col justify-center  h-full w-full p-4 mx-auto'>
            <div className='pb-8'>
                <h1 className='text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500 text-opacity-0'>About</h1>
            </div>
            <div className='text-xl'>
                <p className='md:mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam ab natus consequatur perferendis mollitia quasi! Cum nemo nobis modi quae laboriosam culpa ducimus ipsa excepturi commodi molestiae eaque quam natus provident, est maiores, tenetur, officiis ex esse odit quasi temporibus nostrum vero. Ab totam itaque architecto eius, magni porro.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat excepturi, placeat a maxime tenetur autem itaque rerum deserunt libero necessitatibus et, accusamus velit quasi veniam praesentium quos corrupti esse? Ullam minus sapiente nemo, saepe tempora id voluptate odit dolorum voluptatibus. Sunt atque eius quam ex facere magnam consectetur perspiciatis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About