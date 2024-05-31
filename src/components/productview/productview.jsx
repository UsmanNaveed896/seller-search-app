import React, { useState } from 'react'
// import { AppRegistry, View, asset } from 'react-360';
import { ReactImageTurntable } from 'react-image-turntable';
import Img from '../../assets/Shape.png'
import Img1 from '../../assets/images-black-1/civic-1.jpg'
import Img2 from '../../assets/images-black-1/civic-2.jpg'
import Img3 from '../../assets/images-black-1/civic-3.jpg'
import Img4 from '../../assets/images-black-1/civic-4.jpg'
import Img5 from '../../assets/images-black-1/civic-5.jpg'
import Img6 from '../../assets/images-black-1/civic-6.jpg'
import Img7 from '../../assets/images-black-1/civic-7.jpg'
import Img8 from '../../assets/images-black-1/civic-8.jpg'
const Productview = ({ selectImage }) => {

  const carList = [
    {
      id: 1,
      srcImg: Img1,
    },
    {
      id: 2,
      srcImg: Img2,
    },
    {
      id: 3,
      srcImg: Img3,
    },
    {
      id: 4,
      srcImg: Img4,
    },
    {
      id: 5,
      srcImg: Img5,
    },
    {
      id: 6,
      srcImg: Img6,
    },
    {
      id: 7,
      srcImg: Img7,
    },
    {
      id: 8,
      srcImg: Img8,
    },
  ]
  const imageUrls = Object.values(selectImage).map((file) =>
    URL.createObjectURL(file)
  );
  const [rotationDisabled, setRotationDisabled] = useState(true);
  return (
    <>
      <div className='flex justify-center'>
        <ReactImageTurntable
          movementSensitivity={1}
          images={imageUrls}
          //  images={images}
          autoRotate={{ disabled: rotationDisabled, interval: 500 }}
          onPointerDown={() => setRotationDisabled(true)}
          onPointerUp={() => setRotationDisabled(false)}
        />
      </div>
    </>



  )
}

export default Productview