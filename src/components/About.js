import React from 'react'
import about from '../asset/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 mt-20' id='about'>
        
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>

                    <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent bg-clip-text inline-block'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                    I'am a computer science from University of Indonesian. ever since high school, I’ve been captivated by the world of web development. It all started when I created my first simple website. The thrill of seeing my code come to life on the screen was exhilarating. Over the years, this passion has only grown stronger. I’ve dedicated to improve my web developing skill with learning new technologies and experimenting with different frameworks 
                    </p>

                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} width={300} height={300}/>
        </div>
    </div>
  )
}

export default About