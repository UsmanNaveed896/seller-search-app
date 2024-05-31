import ProgressBar from "./progressBar";
import Img from '../../assets/Group 48095862.png'
import Img2 from '../../assets/Group 48095788.png'
import Img3 from '../../assets/Group 48095863.png'
import Img4 from '../../assets/check.png'

const Wallet = () => {
    const currentProgress = 75;
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className="grid grid-cols-2 gap-4 mt-6 pb-4">
                        <div className="column1 rounded-xl px-6 py-2"
                            style={{ boxShadow: shadow }}
                        >
                            <div className="flex justify-center border-b ">
                                <ProgressBar progress={currentProgress} />
                            </div>
                            <div className="head flex justify-between py-4 pb-12">
                                <div>
                                    <p className="mb-4 font-semibold">Summary</p>
                                    <p className="mb-4 font-semibold">Lorem ipsum</p>
                                    <p className="mb-4 font-semibold">Lorem ipsum</p>
                                    <p className="mb-4 font-semibold">Lorem ipsum</p>
                                </div>
                                <div>
                                    <p className="mb-4 text-[#1F5E7C] text-[12px] font-semibold">Last 7days</p>
                                    <p className="mb-4 text-[#1F5E7C] text-[12px] font-semibold">$12335</p>
                                    <p className="mb-4 text-[#1F5E7C] text-[12px] font-semibold">$:344535</p>
                                    <p className="mb-4 text-[#1F5E7C] text-[12px] font-semibold">$:5457</p>
                                </div>
                            </div>
                            <div className='flex justify-center pb-6 mt-12'>
                                <button className='rounded-full px-12 text-white py-2 bg-[#1F5E7C]'>Save</button>
                            </div>
                        </div>
                        <div className="column2  px-6 py-2">
                            <div className=" py-3 px-4  rounded-xl "
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img} alt="abc" />
                                </div>
                            </div>
                            <div className=" py-3 px-4  rounded-xl mt-5"
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img2} alt="abc" />
                                </div>
                            </div>
                            <div className=" py-3 px-4  rounded-xl mt-5"
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img3} alt="abc" />
                                </div>
                            </div>

                            <div className="head flex justify-between py-4 pb-4 mt-6">
                                <div>
                                    <p className="mb-4 font-bold">Your Current Plan</p>
                                </div>
                                <div>
                                    <p className=" text-[#1F5E7C] text-[12px] font-semibold">show all</p>
                                </div>
                            </div>
                            <div className=" py-3 px-4 bg-[#F5F5F5] rounded-xl"
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <div className="text-center">
                                        <p className="mb-2 text-[#4D4D4D] font-bold">Basic</p>
                                        <p className="mb-2 text-[#4D4D4D]">$12.99</p>
                                        <hr className="mb-2"></hr>
                                        <p className="text-[12px] text-[#AEAEAE] mb-2"><i class="fa fa-check" aria-hidden="true"></i>Lorem Ipsum is simply dummy text</p>
                                        <p className="text-[12px] text-[#AEAEAE] mb-2"><i class="fa fa-check" aria-hidden="true"></i>Lorem Ipsum is simply dummy text</p>
                                        <p className="text-[12px] text-[#000] mb-2"><i class="fa fa-check" aria-hidden="true"></i>Lorem Ipsum is simply dummy text</p>

                                        <button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-bold text-[10px] py-2 px-3">
                                            Choose this plan <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Wallet;