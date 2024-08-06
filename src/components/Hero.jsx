import React from 'react'

import { ReactTyped } from 'react-typed'

function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex justify-center flex-col'>
                <p className='text-[#00df9a] font-bold p-2'>GROW WITH DATA ANALYTIS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-6'>Grow with Data</h1>
                <div className='flex items-center justify-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexable financing for </p>
                    <ReactTyped strings={['BTB', 'B2C', 'btc']} typeSpeed={120} backSpeed={140} loop className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' />
                </div>

                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics,Monitor your data analytics,Monitor your data analytics</p>

                <button className='w-[200px] bg-[#00df9a] px-4 py-3 rounded-md hover:bg-[#00c381] font-medium mx-auto my-6 text-black'>Get Started</button>

            </div>

        </div>
    )
}

export default Hero