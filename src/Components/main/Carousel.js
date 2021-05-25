import React from "react";
import "./Carousel.css"
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


function Carousel (props) {
   
    const CarouselImage = styled.img `
        width: 100%; 
        max-height: 800px;
        height: 'auto';
    `
    function renderSlides(props) {
        const slides = props.map( (slide, index) => {
            return (<SwiperSlide key={index}>
                        <CarouselImage  src={slide.imageSource} fluid />
                        <div className="Title">
                            {slide.imageHeader}
                        </div>
                    </SwiperSlide>);
        })
    
        return slides;
    };

    return (
        <div>
            <Swiper
                navigation
                className = "carousel-swiper"
            >
                {/* <SwiperSlide style={{ backgroundImage: `url(${image01})` }}> Hello World</SwiperSlide> */}
                {renderSlides(props.carousel)}
            </Swiper>
        </div>
    )
   
}

export default Carousel;