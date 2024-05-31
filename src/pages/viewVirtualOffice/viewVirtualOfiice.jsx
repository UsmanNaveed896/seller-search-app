import React from 'react'
import Img from '../../assets/download (4) 1.png'
const ViewVirtualOfiice = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <p className='font-semibold text-center'>Virtual Office</p>
                    <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className=''>
                                    <img src={Img} alt='rect' />
                                </div>
                                <div className=''>
                                    <p className='text-[14px]'>Company Name</p>
                                    <span class="text-[14px] text-[#FCE837]">
                                        ★<span className='text-[#0C356AA3] font-bold text-[12px]'> 4.5 (415 reviews)</span>
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='bg-[#F2F2F3] py-2 px-4 text-[12px] font-bold'>Actived</h1>
                            </div>
                        </div>
                    </div>
                    <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-3'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className=''>
                                    <img src={Img} alt='rect' />
                                </div>
                                <div className=''>
                                    <p className='text-[14px]'>Company Name</p>
                                    <span class="text-[14px] text-[#FCE837]">
                                        ★<span className='text-[#0C356AA3] font-bold text-[12px]'> 4.5 (415 reviews)</span>
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='bg-[#F2F2F3] py-2 px-4 text-[12px] font-bold'>Actived</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewVirtualOfiice