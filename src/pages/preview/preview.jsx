import React, { useEffect } from "react";
import Img from "../../assets/Vector (4).png";
import Img1 from "../../assets/a.png";
import Img2 from "../../assets/Group 25.png";
import Img3 from "../../assets/Rectangle 12.png";
import Img4 from "../../assets/Rectangle 14.png";
import Img5 from "../../assets/Rectangle 468.png";
import Img6 from "../../assets/Rectangle 469.png";
import Img7 from "../../assets/Rectangle 22.png";
import Img8 from "../../assets/Group 48095826.png";
import Img9 from "../../assets/Group.png";
import Img10 from "../../assets/Layout.png";
// import LiveStream from "../../components/livestream/livestream";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientLiveStream from "../../components/livestream/livestreamwebsocket";
import { useGetStoriesHook } from "../hooks/useGetStoriesHook";
const Preview = () => {
  const getStorybyId=useGetStoriesHook()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsiveB = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";

    useEffect(()=>{
      getStorybyId.handleGetStorybyId()
    },[])
    console.log(getStorybyId.story,"story")
  return (
    <>
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <div className="flex gap-4 flex-wrap">
            <img src={Img4} alt="abc" />
            <img src={Img5} alt="abc" />
            <img src={Img6} alt="abc" />
            <img src={Img4} alt="abc" />
            <img src={Img5} alt="abc" />
            <img src={Img6} alt="abc" />
          </div>
          {/* Multi Carousel */}
          <div className="img  mt-16 mb-6">
            <MultiCarousel
              responsive={responsive}
              showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
              <div className="relative">
                <div className="absolute">
                  <div className="head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                    <h1 className="text-[12px] ">Limited Time</h1>
                  </div>
                  <h1 className="font-semibold text-[14px] mt-1 ml-1">
                    Get Special Offer <br></br> up to
                    <span className="text-[16px] font-bold font-semibold ">
                      40 %
                    </span>{" "}
                  </h1>
                  <h1 className="text-[12px] mt-6  font-semibold ml-1">
                    All washing services available
                  </h1>
                  <div className="bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]">
                    <span className="pt-[-6px] font-bold">+</span>
                  </div>
                </div>
                <img src={Img7} alt="abc" />
              </div>
              <div className="relative">
                <div className="absolute">
                  <div className="head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                    <h1 className="text-[12px] ">Limited Time</h1>
                  </div>
                  <h1 className="font-semibold text-[14px] mt-1 ml-1">
                    Get Special Offer <br></br> up to
                    <span className="text-[16px] font-bold font-semibold ">
                      40 %
                    </span>{" "}
                  </h1>
                  <h1 className="text-[12px] mt-6  font-semibold ml-1">
                    All washing services available
                  </h1>
                  <div className="bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]">
                    <span className="pt-[-6px] font-bold">+</span>
                  </div>
                </div>
                <img src={Img7} alt="abc" />
              </div>
              <div className="relative">
                <div className="absolute">
                  <div className="head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                    <h1 className="text-[12px] ">Limited Time</h1>
                  </div>
                  <h1 className="font-semibold text-[14px] mt-1 ml-1">
                    Get Special Offer <br></br> up to
                    <span className="text-[16px] font-bold font-semibold ">
                      40 %
                    </span>{" "}
                  </h1>
                  <h1 className="text-[12px] mt-6  font-semibold ml-1">
                    All washing services available
                  </h1>
                  <div className="bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]">
                    <span className="pt-[-6px] font-bold">+</span>
                  </div>
                </div>
                <img src={Img7} alt="abc" />
              </div>
              <div className="relative">
                <div className="absolute">
                  <div className="head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                    <h1 className="text-[12px] ">Limited Time</h1>
                  </div>
                  <h1 className="font-semibold text-[14px] mt-1 ml-1">
                    Get Special Offer <br></br> up to
                    <span className="text-[16px] font-bold font-semibold ">
                      40 %
                    </span>{" "}
                  </h1>
                  <h1 className="text-[12px] mt-6  font-semibold ml-1">
                    All washing services available
                  </h1>
                  <div className="bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]">
                    <span className="pt-[-6px] font-bold">+</span>
                  </div>
                </div>
                <img src={Img7} alt="abc" />
              </div>

              <div className="relative">
                <div className="absolute">
                  <div className="head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1">
                    <h1 className="text-[12px] ">Limited Time</h1>
                  </div>
                  <h1 className="font-semibold text-[14px] mt-1 ml-1">
                    Get Special Offer <br></br> up to
                    <span className="text-[16px] font-bold font-semibold ">
                      40 %
                    </span>{" "}
                  </h1>
                  <h1 className="text-[12px] mt-6  font-semibold ml-1">
                    All washing services available
                  </h1>
                  <div className="bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]">
                    <span className="pt-[-6px] font-bold">+</span>
                  </div>
                </div>
                <img src={Img7} alt="abc" />
              </div>
            </MultiCarousel>
          </div>

          {/* Live Streaming */}
          <div
            className="mt-16 px-12 rounded-xl py-4"
            style={{ boxShadow: shadow }}
          >
            <div className="flex justify-between  mb-3">
              <p className="font-bold text-[12px]">Live</p>
          
            </div>
            <div className="flex justify-center">
              {/* <img src={Img8} alt="abc" /> */}
              {/* <LiveStream/> */}
              {/* <ClientLiveStream/> */}
            </div>

            <div className="">
              <p className="text-center font-semibold text-[13px]">
                Your Live Streaming Only For 5 Minutes
              </p>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <i className="fa fa-rss mr-2"></i>
                  Live
                </button>
              </div>
            </div>
          </div>
          <div className="button mt-16">
            <div className="max-w-[345px]">
              <div class="text-sm font-medium text-center ">
                <ul class="flex flex-wrap gap-2 -mb-px">
                  <li class="me-2">
                    <a
                      href="#"
                      class="rounded py-2 px-5 bg-[#1F5E7C] text-[14px] font-semibold text-white "
                    >
                      House
                    </a>
                  </li>
                  <li class="me-2">
                    <a
                      href="#"
                      class="rounded py-2 px-5 bg-[white] border text-[14px] font-semibold"
                      aria-current="page"
                    >
                      Appartment
                    </a>
                  </li>
                  <li class="me-2">
                    <a
                      href="#"
                      class="rounded py-2 px-5 bg-[white] border text-[14px] font-semibold"
                    >
                      Housing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center mt-5 px-2 text-[12px]">
                <p className="text-[#1F5E7C] font-semibold">59 Properties</p>
                <div className="flex gap-2">
                  <button className="rounded border py-1 px-2 ">
                    {" "}
                    <i
                      class="fa fa-bookmark mr-2 text-[#1F5E7C]"
                      aria-hidden="true"
                    ></i>
                    Save
                  </button>
                  <button className="rounded border py-1 px-2 ">
                    {" "}
                    <i
                      class="fa fa-sort mr-2 text-[#1F5E7C]"
                      aria-hidden="true"
                    ></i>
                    Sort
                  </button>
                </div>
              </div>
              {/* Card */}
              <div className="flex gap-6">
                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="px-2 py-2">
                    <MultiCarousel
                      responsive={responsiveB}
                      showDots={true}
                      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                    </MultiCarousel>
                  </div>
                  <div class="px-2">
                    <h5 class="mb-1 text-[12px] font-semibold tracking-tight">
                      Appartment
                    </h5>
                    <h5 class="mb-1 text-[14px] font-bold tracking-tight">
                      1200$
                    </h5>
                    <h5 class=" text-[14px] font-bold tracking-tight text-[#B6B6B6]">
                      1269 Lake Forest Drive
                    </h5>
                  </div>
                  <div className="flex gap-2 px-2 mt-2">
                    <div>
                      <img src={Img} alt="abc" />
                    </div>
                    <p>1</p>
                    <div>
                      <img src={Img1} alt="abc" />
                    </div>
                    <p>2</p>
                    <div>
                      <img src={Img2} alt="abc" />
                    </div>
                    <p>60 m2</p>
                  </div>
                </div>

                <div
                  class="max-w-sm mt-4 rounded-xl"
                  style={{ boxShadow: shadow }}
                >
                  <div className="px-2 py-2">
                    <MultiCarousel
                      responsive={responsiveB}
                      showDots={true}
                      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                      <div >
                        <img className="w-full" src={Img3} />
                      </div>
                    </MultiCarousel>
                  </div>
                  <div class="px-2">
                    <h5 class="mb-1 text-[12px] font-semibold tracking-tight">
                      Appartment
                    </h5>
                    <h5 class="mb-1 text-[14px] font-bold tracking-tight">
                      1200$
                    </h5>
                    <h5 class=" text-[14px] font-bold tracking-tight text-[#B6B6B6]">
                      1269 Lake Forest Drive
                    </h5>
                  </div>
                  <div className="flex gap-2 px-2 mt-2">
                    <div>
                      <img src={Img} alt="abc" />
                    </div>
                    <p>1</p>
                    <div>
                      <img src={Img1} alt="abc" />
                    </div>
                    <p>2</p>
                    <div>
                      <img src={Img2} alt="abc" />
                    </div>
                    <p>60 m2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="location mt-12">
            <div className="column2 px-2 py-2">
              <h1 className="text-[#252B5C] font-semibold ">Location</h1>
              <div className="flex gap-2 mt-6 items-center">
                <img src={Img9} alt="abc" />
                <p className="text-[12px] text-[#53587A]">
                  Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa
                  Tengah 50277
                </p>
              </div>

              <img className="mt-6" src={Img10} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
