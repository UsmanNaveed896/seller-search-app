import React from 'react'
import Img from '../../assets/Rectangle 774.png'
const Notifications = () => {
    return (
        <div className="flex justify-center">
            <div className="container max-w-[1000px]">
                <p className='font-semibold'>Notifications</p>
                <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12'>
                    <div className='flex gap-2 items-center'>
                        <div className=''>
                            <img src={Img} alt='rect' />
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>Ellie joined team developers</p>
                            <p className='text-[#708099] text-[12px]'>04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-3'>
                    <div className='flex gap-2 items-center'>
                        <div className=''>
                            <img src={Img} alt='rect' />
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>Ellie joined team developers</p>
                            <p className='text-[#708099] text-[12px]'>04 April, 2021 | 04:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications