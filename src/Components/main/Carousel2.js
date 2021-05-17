import React from "react";
import Image from 'react-bootstrap/Image'
import "./Carousel2.css"
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image01 from './../../../src/Assets/image001.jpg'
import image02 from './../../../src/Assets/image002.jpg'
import image03 from './../../../src/Assets/image003.jpg'

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


function Carousel2 () {

    const props = [        
        {
            imageSource: {image01},
            imageAlt: 'first slide',
            imageHeader: 'First Slide',
            imageText: 'asd'
        },
        {
            imageSource: image02,
            imageAlt: 'second slide',
            imageHeader: 'Second Slide',
            imageText: 'zxc'
        },
        {
            imageSource: image03,
            imageAlt: 'third slide',
            imageHeader: 'Third Slide',
            imageText: 'zxc'
        }
    ]
   
    const CarouselImage = styled.img `
        width: 100%; 
        max-height: 800px;
        height: 'auto';
    `
    function renderSlides(props) {
        const slides = props.map( (slide, index) => {
            return (<SwiperSlide key={index}>
                        <CarouselImage  src={image01} fluid />
                        <div className="Title">
                            Title 1
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
                <SwiperSlide><div className="title center-text">Title 1</div> </SwiperSlide>
            </Swiper>
        </div>
    )
   
}

export default Carousel2;