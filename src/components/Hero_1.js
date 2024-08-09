import React from 'react'
import profile from '../asset/profilepic.png'
import { AiFillGithub, AiFillInstagram, } from 'react-icons/ai'

const Hero_1 = () => {
    return (
        <div className='my-7 md:my-0 max-w-[1300px] md:h-[100vh] mx-auto grid md:grid-cols-4 place-items-center'>

            <div className='max-w-[400px] flex flex-col md:flex-col '>
                <p className='md:text-5xl sm:text-3xl text-xl tracking-tighter text-gray-400'>
                    Hi, I am <br />
                    <span className='font-bold bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent bg-clip-text inline-block'>
                        Muhammad Haikal
                    </span> <br />
                </p>

                <div class=" bg-black flex items-center mt-5">

                    <div class="relative inline-flex  group">
                        <div
                            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="https://wa.me/083121923019" class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className='md:col-span-2 md:ml-28 '>
                <img src={profile} alt='profile oic' className='w-[300px] md:w-[500px] h-auto mx-auto' />
            </div>


            <div className='text-5xl flex flex-row md:flex-col gap-10 md:w-full place-items-end text-white'>
                <a href='https://github.com/susshikan'>
                    <AiFillGithub />
                    <div
                        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                </a>
                <a href='https://www.instagram.com/susshikan/'><AiFillInstagram /></a>
            </div>
        </div>
    )
}

export default Hero_1