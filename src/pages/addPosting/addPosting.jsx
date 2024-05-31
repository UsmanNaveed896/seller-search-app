import Img from '../../assets/House.png'
import Img1 from '../../assets/Group.png'
import Img2 from '../../assets/Layout.png'
import Img3 from '../../assets/Shape0.png'
import Img4 from '../../assets/Shape1.png'
import Img5 from '../../assets/Shape2.png'
import Img6 from '../../assets/photo.png'
// import ReactPannellum, { getConfig } from "react-pannellum";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleMaps from '../../components/googleMap/googleMap'
const AddPosting = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show360, setShow360] = useState(false)
    const [selectImage, setSelectImage] = useState({
        walls: null,
        ceiling: null,
        floor: null
    });

    const handleChangeImage = (e) => {
        setSelectImage((st) => ({
            ...st,
            [e.target.name]: e.target.files[0]
        }))
    }
    const config = {
        autoRotate: -2
    };
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className="grid grid-cols-3  rounded-xl gap-4 mt-6 pb-4"
                        style={{ boxShadow: shadow }}
                    >
                        <div className="column1 px-6 py-2">
                            <h1 className='text-[#252B5C] font-semibold '>Ad Post Title</h1>
                            <div className="mt-4 rounded-xl flex justify-between px-6 py-6 bg-[#F5F4F8]">
                                <p>Schoolview House</p>
                                <div>
                                    <img src={Img} alt='abc' />
                                </div>
                            </div>
                        </div>
                        <div className="column2  px-6 py-2">
                            <h1 className='text-[#252B5C] font-semibold '>Property Category</h1>
                            <div className="mt-4 rounded-xl flex gap-6  py-3 ">
                                <button className='bg-[#1A4F6F] py-3 px-4 rounded-full text-white text-[12px]'>House</button>
                                <button className='bg-[#F5F4F8] py-3 px-6 rounded-full '>+</button>
                            </div>
                        </div>
                        <div className="column3  px-6 py-2">
                            <h1 className='text-[#252B5C] font-semibold '>Listing Type</h1>
                            <div className="mt-4 rounded-xl flex gap-6  py-3 ">
                                <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Rent</button>
                                <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Sell</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3  rounded-xl gap-4 mt-6 px-4 py-4 "
                        style={{ boxShadow: shadow }}
                    >
                        <div className='column1 px-2 py-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-[#252B5C] font-semibold '>Ad Description</h1>
                                <button className='bg-[#1A4F6F] py-2 px-4 rounded text-white text-[12px]'>Auto Generate</button>
                            </div>
                            <div className='p-2 mt-6 bg-[#f5f4f8] rounded text-[gray]'>
                                <p className='text-[12px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    " "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                            </div>
                        </div>
                        <div className='column2 px-2 py-2'>
                            <h1 className='text-[#252B5C] font-semibold '>Location</h1>
                            <div className='flex gap-2 mt-6 items-center'>
                                <img src={Img1} alt='abc' />
                                <p className='text-[12px] text-[#53587A]'>Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277</p>
                            </div>
                            <GoogleMaps />
                            {/* <img className='mt-6' src={Img2} alt='abc' /> */}
                        </div>
                        <div className='column3 px-2 py-2'>
                            <h1 className='text-[#252B5C] font-semibold '>Listing Photos</h1>
                            <div className='flex flex-wrap gap-1 mt-6'>
                                <div className='relative '>
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img3} alt='abc' />
                                    <p className='text-[8px] font-bold text-center'>1/21</p>
                                </div>
                                <div className='relative '>
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img4} alt='abc' />
                                    <p className='text-[8px] font-bold text-center'>2/21</p>
                                </div>
                                <div className='relative '>
                                    {/* <Clients/> */}
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img5} alt='abc' />
                                    <p className='text-[8px] font-bold text-center'>3/21</p>
                                </div>

                                <div>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full '>+</button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={() => setShow(true)}
                                >
                                    Add 360
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                        show &&
                        <div className='mt-6 photos rounded-xl'
                            style={{ boxShadow: shadow }}
                        >
                            <div className='icon text-end p-3 cursor-pointer'>
                                <i className='fa fa-close'
                                    onClick={() => setShow(false)}
                                />
                            </div>
                            <div className='flex gap-2 px-6 py-6 items-center'>

                                <div className='frst flex flex-col items-center'>
                                    <p className='text-[12px] font-semibold'>Upload Panorama Image</p>

                                    <label htmlFor="fileInput" className='cursor-pointer'>
                                        {selectImage?.walls ? (
                                            <img className='h-32 w-32 mt-4' src={URL.createObjectURL(selectImage.walls)} alt="Selected" />
                                        ) : (
                                            <img className='h-16 w-16 mt-4' src={Img6} alt='abc' />
                                        )}
                                    </label>

                                    <input
                                        id="fileInput"
                                        accept="image/*"
                                        className='hidden'
                                        name='walls'
                                        type='file'
                                        onChange={handleChangeImage}
                                    />
                                </div>

                                <div className=''>
                                    <button
                                        className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={() => setShow360(!show360)}
                                    >
                                        {show360 ? "Cancel" : "View 360 "}
                                    </button>
                                </div>
                                {show360 &&
                                    <div className='flex justify-center'>
                                        {/* <div>
                                            <ReactPannellum
                                                id="1"
                                                sceneId="firstScene"
                                                imageSource={URL.createObjectURL(selectImage?.walls)}
                                                config={config}
                                            />
                                        </div> */}
                                    </div>
                                }

                            </div>
                        </div>
                    }
                    <div className='grid grid-cols-2 gap-4 pb-6'>
                        <div className='column1 px-6 py-2 mt-6 rounded-xl'
                            style={{ boxShadow: shadow }}
                        >
                            <h1 className='text-[#252B5C] font-semibold '>Rent Price</h1>
                            <div className="mt-4 rounded-xl flex justify-between px-6 py-6 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                                <p className='text-[12px] font-bold'>$320 <span className='font-normal'>/month</span></p>
                                <p className='font-bold'>$</p>
                            </div>
                            <div className="mt-4 rounded-xl flex gap-6  py-3 ">
                                <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Monthly</button>
                                <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Yearly</button>
                            </div>

                            <div className='mt-2'>
                                <div className='flex justify-between max-w-[70%]'>
                                    <h1 className='text-[#252B5C] font-semibold '>Discount Rent Price</h1>
                                    <i class="fa fa-sort-desc text-[#1F5E7C]" aria-hidden="true"></i>
                                </div>
                                <div className="mt-4 rounded-xl flex justify-between px-6 py-6 bg-[#F5F4F8] text-[#252B5C] max-w-[70%]">
                                    <p className='text-[12px] font-bold'>$320 <span className='font-normal'>/month</span></p>
                                    <p className='font-bold'>$</p>
                                </div>
                                <div className="mt-4 rounded-xl flex gap-6  py-3 ">
                                    <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Monthly</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Yearly</button>
                                </div>
                                <div className=''>
                                    <h1 className='text-[#252B5C] font-semibold '>Total Rooms</h1>
                                    <div className='flex gap-3 mt-2'>
                                        <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                            <h1>&lt; 4</h1>
                                        </div>
                                        <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                            <h1> 4</h1>
                                        </div>
                                        <div className='bg-[#1A4F6F] py-3 px-6 rounded-full text-[12px] text-white'>
                                            <h1> 6</h1>
                                        </div>
                                        <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                            <h1>&gt; 6</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4  max-w-[70%]'>
                                    <h1 className='text-[#252B5C] font-semibold '>Property Features</h1>
                                    <div className='flex justify-between  mt-2  px-6 py-4 bg-[#F5F4F8] text-[#252B5C] rounded-xl'>
                                        <div className='rounded-full text-[12px]'>
                                            <p className='text-[12px] text-[#252B5C] font-semibold'>Bedroom</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>-</h1>
                                            </div>
                                            <div className='h-6 w-6 text-black'>
                                                <h1 className='text-center text-[12px] font-semibold'>2</h1>
                                            </div>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>+</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between  mt-2  px-6 py-4 pb-6 bg-[#F5F4F8] text-[#252B5C] rounded-xl'>
                                        <div className='rounded-full text-[12px]'>
                                            <p className='text-[12px] text-[#252B5C] font-semibold'>Bathroom</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>-</h1>
                                            </div>
                                            <div className='h-6 w-6 text-black'>
                                                <h1 className='text-center text-[12px] font-semibold'>2</h1>
                                            </div>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>+</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between  mt-2  px-6 py-4 bg-[#F5F4F8] text-[#252B5C] rounded-xl'>
                                        <div className='rounded-full text-[12px]'>
                                            <p className='text-[12px] text-[#252B5C] font-semibold'>Balcony</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>-</h1>
                                            </div>
                                            <div className='h-6 w-6 text-black'>
                                                <h1 className='text-center text-[12px] font-semibold'>2</h1>
                                            </div>
                                            <div className='h-6 w-6 bg-[#A1A5C1] rounded text-white'>
                                                <h1 className='text-center text-[14px]'>+</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column-2  px-6 py-2 mt-6 rounded-xl'
                            style={{ boxShadow: shadow }}
                        >
                            <div className=''>
                                <h1 className='text-[#252B5C] font-semibold '>Total Rooms</h1>
                                <div className='flex justify-between mt-2'>
                                    <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                        <h1>&lt; 4</h1>
                                    </div>
                                    <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                        <h1> 4</h1>
                                    </div>
                                    <div className='bg-[#1A4F6F] py-3 px-6 rounded-full text-[12px] text-white'>
                                        <h1> 6</h1>
                                    </div>
                                    <div className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>
                                        <h1>&gt; 6</h1>
                                    </div>
                                </div>
                                <h1 className='text-[#252B5C] font-semibold '>Nearby Facilities </h1>
                                <div className="mt-4 rounded-xl flex flex-wrap gap-6  py-3 max-w-[70%] ">
                                    <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Parking Lot</button>
                                    <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Pet Allowed</button>
                                    <button className='bg-[#1A4F6F] py-3 px-5 rounded-full text-white text-[12px]'>Garden</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Gym</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Park</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Home Theatre</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>Kid's Friendly</button>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full text-[12px]'>+</button>
                                </div>
                                <h1 className='text-[#252B5C] font-semibold '>Neighborhood </h1>
                                <div className='flex items-center'>
                                    <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Noise </h1>
                                    <div class="flex items-center mt-3">
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Noise </h1>
                                    <div class="flex items-center mt-3">
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                        <span class="text-[14px] text-[#1A4F6F]">
                                            ★
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-3 max-w-[70%]'>
                                    <h1 className='text-[#252B5C] font-semibold '>How soon are you looking to sell? </h1>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Right away </h1>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>1-3 Months </h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>4+ Months </h1>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Already Listed </h1>
                                    </div>
                                </div>
                                <div className='mt-3 max-w-[70%]'>
                                    <h1 className='text-[#252B5C] font-semibold '>What kind of home are you looking to
                                        sell in New york? </h1>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Single Family </h1>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Condominium </h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Townhouse </h1>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Multi-Family </h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Vacant Lot/Other </h1>
                                        <h1 className='text-[#252B5C] text-[12px] font-semibold mt-3 '>Commercial </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default AddPosting;