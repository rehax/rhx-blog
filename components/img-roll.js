import Image from 'next/image'
import React from "react";
import Slider from "react-slick";

export default function VerticalMode () {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    focusOnSelect: true,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <Image

          src='/../public/images/1.png'
          height={108}
          width={108}
        />
      </div>
      <div>
      <Image

          src='/../public/images/2.png'
          height={108}
          width={108}
        />
      </div>
      <div>
      <Image

          src='/../public/images/3.png'
          height={108}
          width={108}
        />
      </div>
      <div>
      <Image

          src='/../public/images/4.png'
          height={108}
          width={108}
        />
      </div>
      <div>
      <Image

          src='/../public/images/5.png'
          height={108}
          width={108}
        />
      </div>
      <div>
        <Image
  
            src='/../public/images/6.png'
            height={108}
            width={108}
        />
      </div>
    </Slider>
  );
}