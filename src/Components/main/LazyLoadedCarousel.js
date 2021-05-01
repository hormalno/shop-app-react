import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


class LazyLoadedCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: null,
        };

        this.loadSlides = this.loadSlides.bind(this);
    }

    loadSlides() {
        this.setState({
            slides: this.props.children,
        });
    }

    render() {
        return (
                <Carousel fade>
                    <Carousel.Item>
                        {this.state.slides}
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default LazyLoadedCarousel;