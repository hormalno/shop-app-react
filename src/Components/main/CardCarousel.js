import React, {Component} from "react";
import InfoCard from './InfoCard.js'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination} from 'swiper/core';
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"


// install Swiper modules
SwiperCore.use([Pagination]);


class CardCarousel extends Component {

    renderCards(cards) {
        return cards.map((card,index)=> {
            return (<SwiperSlide key={index}><InfoCard card={card} /></SwiperSlide>);
        });
    }

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
                    {this.renderCards(this.props.cards)}
                </Swiper>
            </div>
        )
    }
}

export default CardCarousel;