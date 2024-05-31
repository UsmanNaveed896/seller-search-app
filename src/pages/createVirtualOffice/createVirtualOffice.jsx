import React from 'react'
import Img from '../../assets/Button.png'
import Img1 from '../../assets/Group 48095764.png'
const CreateVirtualOffice = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    return (

        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className='rounded-xl flex justify-center' style={{ boxShadow: shadow }}>
                        <div className='abc py-6'>
                        <p className='mb-6 text-center text-[#616161] font-bold'>Select Type</p>
                            <button
                                className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Company
                            </button>
                            <p className='mt-6 mb-6 text-center text-[#616161] font-bold'>OR</p>
                            <button
                                className=" className='mt-6' bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Individual
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="column1 rounded-xl  px-6 py-2"
                            style={{ boxShadow: shadow }}
                        >
                            <div className="flex justify-center">
                                <div className="h-[190px] w-[190px] rounded-full bg-[#C4C4C4]">
                                    <p className="text-[18px] text-black pt-16 text-center font-demibold">Upload Your logo</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <img className='mt-[-2rem]' src={Img} alt='abc' />
                            </div>
                            <p className='text-center font-semibold'>My Profile</p>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    style={{ boxShadow: shadow }}
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email (Optional)"
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button className='rounded-full px-8 text-white py-2 bg-[#1F5E7C]'>Choose Category</button>
                            </div>
                        </div>
                        <div className="column2 rounded-xl  px-6 py-2"
                            style={{ boxShadow: shadow }}
                        >
                            <h1 className='text-center text-[#616161] text-[25px] mb-4 font-semibold'>Virtual Office</h1>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="fullName">
                                    Company Name
                                </label>
                                <input
                                    style={{ boxShadow: shadow }}
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="Bussiness Email">
                                    Bussiness Email
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="Bussiness Email"
                                    type="email"
                                    placeholder="Bussiness Email"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    License
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="License"
                                    type="text"
                                    placeholder="License"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    Company Address
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="Company Address"
                                    type="text"
                                    placeholder="Company Address"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    Government I'D
                                </label>
                                <div className='flex justify-between '>
                                    <input
                                        className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                        id="Government I'D"
                                        type="text"
                                        placeholder="Government I'D"
                                    />
                                    <div className='ml-[-25px] mt-2'>
                                        <img className='pl-[-5px] ' src={Img1} alt='abc' />
                                    </div>

                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    I'D Card
                                </label>
                                <div className='flex justify-between '>
                                    <input
                                        className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-2 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                        id="I'D Card"
                                        type="text"
                                        placeholder="I'D Card"
                                    />
                                    <div className='ml-[-25px] mt-2'>
                                        <img className='pl-[-5px] ' src={Img1} alt='abc' />
                                    </div>

                                </div>

                            </div>
                            <div className='flex justify-center mb-4'>
                                <button className='rounded-full px-8 text-white py-2 bg-[#1F5E7C]'>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-[200px] rounded-xl shadow-xl mt-6 mb-4'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateVirtualOffice