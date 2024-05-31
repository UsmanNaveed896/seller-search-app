import { useEffect } from 'react';
import Img from '../../assets/Vector2.png'
import './style.css'
const SplashScreen=()=>{
    useEffect(() => {
        // This useEffect will trigger the animations after the component is mounted
        const elements = document.querySelectorAll('.animate-splash');
        elements.forEach((el, index) => {
          el.style.setProperty('--index', index);
        });
      }, []);
    const background = "linear-gradient(180deg, #17778E 0.01%, #1B4371 76.1%, #103676 99.99%)";
    return(
        <>
       <div className="flex items-center justify-center h-screen"
       style={{background:background}}
       >
      <div className="text-center">
        <div className="head text-white text-[75px] font-bold">
          <span className="animate-splash">S</span>
          <span className="animate-splash">e</span>
          <span className="animate-splash">a</span>
          <span className="animate-splash">r</span>
          <img src={Img} alt="search" className="inline-block  " />
          <span className="animate-splash">h</span>
        </div>
      </div>
    </div>
        </>
    )
};

export default SplashScreen;