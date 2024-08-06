import React from 'react'

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'


function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className=''>Monitor your data analytics,Monitor your data analytics,Monitor your data analytics</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare className='mr-4' size={30} />
                    <FaInstagramSquare className='mr-4' size={30} />
                    <FaTwitterSquare className='mr-4' size={30} />
                    <FaGithubSquare className='mr-4' size={30} />
                    <FaDribbbleSquare className='mr-4' size={30} />
                </div>
            </div>


            <div className='lg:col-span-2 justify-between grid grid-cols-2 md:grid-cols-4 text-center gap-y-4 lg:text-left'>
                <div>
                    <h6 className='font-bold text-gray-200 text-xl'>Solutions</h6>
                    <ul className='text-gray-400'>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-200  text-xl'>Solutions</h6>
                    <ul className='text-gray-400'>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-200  text-xl'>Solutions</h6>
                    <ul className='text-gray-400'>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-200  text-xl'>Solutions</h6>
                    <ul className='text-gray-400'>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer