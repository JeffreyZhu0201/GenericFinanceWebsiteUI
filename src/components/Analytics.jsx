import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
                <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centraly</h1>
                    <p className='text-gray-600'>Follow along and build this React JS & Tailwind CSS 100% mobile responsive website from scratch. Follow along and build this React JS & Tailwind CSS 100% mobile responsive website from scratch. Follow along and build this React JS & Tailwind CSS 100% mobile responsive website from scratch. We will install and use Tailwind CSS in a “Create-React-App” application. Use a really cool react package “React-Typed” for some text animation in the Hero component. UseState hook to toggle the mobile side drawer menu. Import “React-Icons” dependency for social icons.  Incorporate both flexbox and grid layouts. Thanks for watching - Enjoy!</p>
                    <button className='w-[200px] bg-[#000000] px-4 py-3 rounded-md hover:bg-[#00c381] hover:text-[#000000] mx-auto my-6 text-[#00df9a] md:mx-0 font-bold'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics