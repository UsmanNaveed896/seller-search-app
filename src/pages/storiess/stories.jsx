import React from 'react'
import Img from '../../assets/Rectangle 468.png'
import Img1 from '../../assets/Rectangle 469.png'
import Img2 from '../../assets/Rectangle 14.png'
import Img3 from '../../assets/Group 48095826.png'

const Stories = () => {
    return (
        <div className="flex justify-center">
            <div className="container max-w-[1000px]">
                <div className='images flex gap-6 mt-12'>
                    <div className='img relative'>
                        <img src={Img} alt='rectangle' />
                        <div className='bg-[#1FA1FF] rounded-full h-6 w-6 text-white text-center absolute bottom-3 left-3'>
                            <span className='pt-[-6px] font-bold'>+</span>
                        </div>
                    </div>
                    <div className='img relative'>
                        <img src={Img1} alt='rectangle' />
                        <div className='bg-[#1FA1FF] rounded-full h-6 w-6 text-white text-center absolute bottom-3 left-3'>
                            <span className='pt-[-6px] font-bold'>+</span>
                        </div>
                    </div>
                    <div className='img relative'>
                        <img src={Img2} alt='rectangle' />
                        <div className='bg-[#1FA1FF] rounded-full h-6 w-6 text-white text-center absolute bottom-3 left-3'>
                            <span className='pt-[-6px] font-bold'>+</span>
                        </div>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='flex justify-between w-[35%] mb-3'>
                        <p className='font-bold text-[12px]'>Live</p>
                        <p className='text-[#1B8693] text-[12px] font-semibold'>View All</p>
                    </div>
                    <img src={Img3} alt='abc' />
                    <div className='w-[35%]'>
                        <p className='text-center font-semibold text-[13px]'>Your Live Streaming Only For 5 Minutes</p>
                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                <i className='fa fa-rss mr-2'></i>
                               Live
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories