import React, { useRef, useState } from 'react'
import Img1 from '../../assets/images-black-1/civic-1.jpg'
import Img2 from '../../assets/images-black-1/civic-2.jpg'
import Img3 from '../../assets/images-black-1/civic-3.jpg'
import Img4 from '../../assets/images-black-1/civic-4.jpg'
import Img5 from '../../assets/images-black-1/civic-5.jpg'
import Img6 from '../../assets/images-black-1/civic-6.jpg'
import Img7 from '../../assets/images-black-1/civic-7.jpg'
import Img8 from '../../assets/images-black-1/civic-8.jpg'
import Productview from '../../components/productview/productview'
const CarSelling = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    const [selectImage, setSelectImage] = useState([
        null, // img1
        null, // img2
        null, // img3
        null, // img4
        null, // img5
        null, // img6
        null, // img7
        null, // img8
    ]);
    const images = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
    ];

    const [view360, setView360] = useState(false)

    const handleChangeImage = (e, imageKey) => {
        const files = e.target.files;
        if (files.length > 0) {
            setSelectImage((prevImages) => ({
                ...prevImages,
                [imageKey]: files[0],
            }));
        }
    };
    const handleViewButton = () => {
        if (Object.values(selectImage).every((image) => image !== null)) {
            setView360(true)
        }
    }
    console.log(selectImage, "selected")
    console.log(view360,"view")
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className='usedCars rounded-lg px-3 py-6 mt-12'
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-center">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Title</h1>
                                <input className='pr-12 pl-2  py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Title' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Condition</h1>
                                <label className="inline-flex items-center ">
                                    <input
                                        type="radio"
                                        value="new"
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span className="mr-2 ml-2 text-gray-700 text-[12px] font-semibold ">New</span>
                                </label>
                                <label className="inline-flex items-center ">
                                    <input
                                        type="radio"
                                        value="used"
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700 text-[12px] font-semibold">Used</span>
                                </label>
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Year</h1>
                                <input className='pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Year' />
                            </div>
                        </div>
                    </div>
                    <div className='usedCars rounded-lg px-3 py-6 mt-6'
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-start">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Brand</h1>
                                <select className='px-6 py-3 rounded-xl bg-[#F5F4F8] text-[14px] text-[#8C9199]'>
                                    <option>Select Brand</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-[#252B5C] font-bold mb-2'>Model</h1>
                                    <select className='px-6 py-3 rounded-xl bg-[#F5F4F8] text-[12px] text-[#8C9199]'>
                                        <option>Select Model</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Features</h1>
                                <input className='pr-12 pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Search' />
                                <div className="flex flex-col space-y-4 text-[12px] mt-6">
                                    <div className="flex space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Alarm</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Cruise Control</span>
                                        </label>
                                    </div>
                                    <div className="flex space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Bluetooth</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Front Parking Sensor</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='usedCars rounded-lg px-3 py-6 mt-12 '
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-start">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Location</h1>
                                <input className='px-3 py-3 rounded-xl bg-[#F5F4F8] text-[12px] ' placeholder='Search Location' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Price</h1>
                                <input className='px-3 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Price' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Description</h1>
                                <textarea className='px-3 w-64 h-32 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Year' />
                            </div>
                        </div>
                    </div>

                    <div className='usedCars rounded-lg px-3 py-6 mt-12 '
                        style={{ boxShadow: shadow }}
                    >
                        <h1 className='text-[#252B5C] font-bold mb-2'>Upload Photos w.r.t to Images Below</h1>
                        <div className='flex items-end justify-between mt-4'>
                            <div className='flex flex-wrap items-center gap-3  mt-6'>
                                {Object.keys(selectImage).map((imageKey, index) => (
                                    <div key={imageKey}>
                                        <label htmlFor={imageKey} className='cursor-pointer'>
                                            {selectImage[imageKey] ? (
                                                <img className='h-32 w-32 mt-4' src={URL.createObjectURL(selectImage[imageKey])} alt={`Selected ${imageKey}`} />
                                            ) : (
                                                <img className='h-32 w-32 mt-4'
                                                    src={images[index]}
                                                    alt={`abc ${imageKey}`} />
                                            )}
                                        </label>

                                        <input
                                            id={imageKey}
                                            accept="image/*"
                                            className='hidden'
                                            name={imageKey}
                                            type='file'
                                            onChange={(e) => handleChangeImage(e, imageKey)}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <button
                                        className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={handleViewButton}
                                    >
                                        View 360
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button
                                    className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white text-[14px] font-semibold py-4 px-12 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Sell Your Car
                                </button>
                            </div>
                        </div>
                        {view360 &&
                            <div className='mt-8'>
                                <Productview selectImage={selectImage} />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CarSelling