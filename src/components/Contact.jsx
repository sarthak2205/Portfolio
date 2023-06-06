import React from 'react'

const Contact = () => {
  return (
    <div 
        name="Contact"
        className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'
    >
        <div className='flex flex-col p-4 justify-center mx-auto max-w-screen-lg h-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</h1>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form className='flex flex-col w-full md:w-1/2'>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Enter your Email ID'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea 
                        name='message'
                        placeholder='Enter your message'
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '
                    />
                    <button 
                        className='w-full text white bg-gradient-to-r from-cyan-500 to-blue-500 p-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-300 text-2xl font-bold hover:from-blue-700 hover:via-blue-800 hover:to-gray-900 hover:duration-300 hover:font-bold hover:text-3xl'
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact