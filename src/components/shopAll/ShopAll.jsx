import { sliderItems} from '../../constants/data';

import './ShopAll.css'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ShopAll = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='SliderContainer'>
    <h2>Shop By Categories...</h2><button>View All</button>
  <Slider {...settings}>
         {sliderItems.map((item)=>(
          <div className='Card' key={item.id}>
          <img src={item.img}/>
          </div>
          ))}
         
        </Slider>
      
    </div>
  )
}

export default ShopAll