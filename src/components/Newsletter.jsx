import React from 'react'

function Newsletter() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
                <div className='lg:col-span-2 '>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow?</h1>
                    <p>Follow along and build this React JS & Tailwind CSS 100% mobile responsive website from scratch. </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                        <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-2xl text-black' />
                        <button className='w-[200px] bg-[#00df9a]  rounded-full hover:bg-[#00c381] font-bold mx-auto ml-0 sm:ml-4 my-6 px-4 py-3 text-black'>Notify Me</button>

                    </div>
                    <p>Follow along and build this React JS & <span className='text-[#00df9a]'>Tailwind CSS</span>  100% mobile</p>
                </div>

            </div>

        </div>
    )
}

export default Newsletter