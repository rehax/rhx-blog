import Image from 'next/image'
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
<div>
    <Image
    src='/../public/images/1.png'
    height={250}
    width={250}
    />
</div>,
<div>
    <Image
    src='/../public/images/2.png'
    height={250}
    width={250}
    />
</div>,
<div>
    <Image
    src='/../public/images/3.png'
    height={250}
    width={250}
    />
</div>,
<div>
    <Image
    src='/../public/images/4.png'
    height={250}
    width={250}
    />
</div>,
<div>
    <Image
    src='/../public/images/5.png'
    height={250}
    width={250}
    />
</div>,
<div>
    <Image
    src='/../public/images/6.png'
    height={250}
    width={250}
    />
</div>,
];



export default function Gallery(){
  return (

    <AliceCarousel
        items={items}
        responsive={    {
            0: {
                items: 4,
            },
            1024: {
                items: 2
            }
          }}
        activeIndex={0}
        autoPlayInterval={10}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={false}
        infinite={true}
        animationDuration={1200}
        animationEasingFunction='linear'
        animationType='slide'
    />
  );
}
