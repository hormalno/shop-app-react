import React from "react";
import "./Carousel2.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image01 from './image001.jpg'

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


function Carousel2 () {

    const params = { 
        navigation: true,   
        className:"CarouselSwiper"
    }


    return (
        <div>
            <Swiper {... params}>
                <SwiperSlide><p className="text-center">Slide 1</p></SwiperSlide>
                <SwiperSlide><p className="text-center">Slide 2</p></SwiperSlide>
                <SwiperSlide><p className="text-center">Slide 3</p></SwiperSlide>
                <SwiperSlide><p className="text-center">Slide 4</p></SwiperSlide>
            </Swiper>
        </div>
    )
   
}

export default Carousel2;