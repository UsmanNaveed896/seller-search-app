import React from "react";
import Img3 from "../../assets/Rectangle 12.png";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Cards = () => {
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
  const shadow =
    "4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)";
  return (
    <div class="max-w-sm mt-4 rounded-xl" style={{ boxShadow: shadow }}>
      <div className="px-2 py-2">
        <MultiCarousel
          responsive={responsiveB}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div>
            <img className="w-full" src={Img3} />
          </div>
          <div>
            <img className="w-full" src={Img3} />
          </div>
          <div>
            <img className="w-full" src={Img3} />
          </div>
        </MultiCarousel>
      </div>
      <div class="px-2">
        <h5 class="mb-1 text-[12px] font-semibold tracking-tight">
          Appartment
        </h5>
        <h5 class="mb-1 text-[14px] font-bold tracking-tight">1200$</h5>
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
  );
};

export default Cards;
