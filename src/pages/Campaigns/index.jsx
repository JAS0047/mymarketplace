// import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Campaigns() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <div className="max-w-4x">

      {/* Header at the center top */}
      <h1 className="text-xl font-semibold text-center">COLLECTION 17</h1>

      {/* Sliders */}
      <div>
        {/* Sliders */}
        <Slider {...settings}>
          <div>
            <img src="/src/assets/images/Image1.png" alt="Image 1" />
          </div>
          <div>
            <img src="/src/assets/images/Image2.png" alt="Image 2" />
          </div>
          <div>
            <img src="/src/assets/images/Image4.png" alt="Image 3" />
          </div>
          {/* Add as many images as you want */}
        </Slider>

      </div>

    </div>
  )
}

export default Campaigns