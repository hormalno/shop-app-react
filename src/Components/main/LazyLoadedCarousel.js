import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image01 from './image001.jpg'


class LazyLoadedCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: this.props.slides
        };

    }

    renderSlide(item) {
        return (
            <Carousel.Item>
                <img
                src={image01}
                alt={item.imageAlt}
                />
                <Carousel.Caption>
                    <h3>{item.imageHeader}</h3>
                    <p>{item.imageText}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }

    loadSlides() {
        const slides = this.state.slides.map((item,index) => {
            return this.renderSlide(item);
        });

        return slides;
    }

    render() {
        return (
                <Carousel fade>
                    {this.loadSlides()}
                </Carousel>
        );
    }
}

export default LazyLoadedCarousel;