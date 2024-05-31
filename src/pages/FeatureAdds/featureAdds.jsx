import React from 'react'
import Img from '../../assets/Rectangle 22.png'
import Img2 from '../../assets/22.png'
import Img3 from '../../assets/Group 48095764.png'

const FeatureAdds = () => {
  const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
  return (
    <>
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <div className='grid grid-cols-3 gap-3'>
            <div className='col-span-2 rounded-xl py-2 px-6 pb-8'
              style={{ boxShadow: shadow }}
            >
              <h1 className='font-bold'>Feature Ad</h1>
              <div className='img  mt-6 flex gap-6'>
                <div className='relative'>
                  <div className='absolute'>
                    <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                      <h1 className='text-[12px] '>Limited Time</h1>
                    </div>
                    <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                      <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                    <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                    <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                      <span className='pt-[-6px] font-bold'>+</span>
                    </div>
                  </div>
                  <img src={Img} alt='abc' />
                </div>
                <div className='relative'>
                  <div className='absolute'>
                    <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                      <h1 className='text-[12px] '>Limited Time</h1>
                    </div>
                    <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                      <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                    <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                    <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                      <span className='pt-[-6px] font-bold'>+</span>
                    </div>
                  </div>
                  <img src={Img} alt='abc' />
                </div>
              </div>
            </div>
            <div className='coloumn2 rounded-xl py-2 px-6 pb-8'
              style={{ boxShadow: shadow }}
            >
              <div className='relative'>
                <div className='absolute w-[98%]' >
                  <div className='px-2 flex justify-between mt-2'>
                    <h1 className='text-[12px] font-bold text-white'>Post feature Ad</h1>
                    <select className='text-[10px] text-white bg-transparent'>
                      <option>show all</option>
                    </select>
                  </div>
                  <div className='inputs max-w-md mx-auto mt-1 p-6 rounded-lg '>
                    <div className="">
                      <label className="block text-white text-[12px] font-bold mb-2" htmlFor="email">
                        Ad Title
                      </label>
                      <input
                        className="appearance-none text-[12px] border bg-[#ECF0F3]  rounded-full w-full py-1 px-2 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                        placeholder="Ad Title"
                      />
                    </div>
                    <div className="mb-6 mt-2">
                      <label className="block text-white text-[12px] font-bold mb-2" htmlFor="email">
                        Link
                      </label>
                      <input
                        className="appearance-none border text-[12px] bg-[#ECF0F3]  rounded-full w-full py-1 px-2 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="link"
                      />
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                      <p className='text-[12px] text-white'>Upload Image or Gif</p>
                      <div>
                        <img src={Img3} alt='abc' />
                      </div>
                    </div>
                  </div>
                </div>
                <img src={Img2} alt='abc' />
                <div className='flex justify-center'>
                  <button
                    className="bg-gradient-to-b from-blue-500 to-indigo-600 text-[12px] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureAdds;