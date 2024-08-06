import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-mono'>
                        <p className='py-2 mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 mx-8'>1 Granted User</p>
                        <p className='py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] bg-[#00df9a] px-4 py-3 rounded-md hover:bg-[#00c381] mx-auto my-6 text-black font-bold'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                    <img src={Double} alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center text-4xl font-bold'>$249</p>
                    <div className='text-center font-mono'>
                        <p className='py-2 mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 mx-8'>1 Granted User</p>
                        <p className='py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] bg-[#000000] px-4 py-3 rounded-md hover:bg-[#00c381] hover:text-[#000000] mx-auto my-6 text-[#00df9a] font-bold'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center text-4xl font-bold'>$349</p>
                    <div className='text-center font-mono'>
                        <p className='py-2 mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 mx-8'>1 Granted User</p>
                        <p className='py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[200px] bg-[#00df9a] px-4 py-3 rounded-md hover:bg-[#00c381] mx-auto my-6 text-black font-bold'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards