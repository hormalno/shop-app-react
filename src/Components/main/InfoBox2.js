import React, {Component} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import InfoBox from './InfoBox.js';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


class InfoBox2 extends Component {

    render ()
    {
        return (
            <div className="container">
                <h4>FEATURED PRODUCTS</h4>
                <Swiper slidesPerView={4} 
                spaceBetween={50} 
                freeMode={true}
                navigation={true}
                pagination={{
                    "clickable": true,
                    "dynamicBullets": true
                }} 
                className="mySwiper">
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                    <SwiperSlide><InfoBox /></SwiperSlide>
                </Swiper>
            </div>
        )
    }
}

export default InfoBox2;