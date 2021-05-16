import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import image from './infobox.jpg'


class InfoBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
            cards: [
                {title: 'a', imgSrc: 'http://placehold.it/380?text=1'},
                {title: 'b', imgSrc: 'http://placehold.it/380?text=2'},
                {title: 'c', imgSrc: 'http://placehold.it/380?text=3'},
                {title: 'd', imgSrc: 'http://placehold.it/380?text=4'}
            ],
            cards2: [
                {title: 'e', imgSrc: 'http://placehold.it/380?text=4'},
                {title: 'f', imgSrc: 'http://placehold.it/380?text=4'},
                {title: 'g', imgSrc: 'http://placehold.it/380?text=4'},
                {title: 'h', imgSrc: 'http://placehold.it/380?text=4'}
            ]
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            slideIndex: selectedIndex
        })
        console.log(selectedIndex)
    };

    renderCard(item,index) {
        return (
            <Card style={{width: '16rem'}} key={1}>
                <Card.Img variant="top" src={image} />
                <Card.ImgOverlay><a href='/' className='btn btn-primary'>Quick view</a></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>Card {item.title}</Card.Title>
                    <Card.Text>
                        Living room group
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">5000 EUR</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    renderCards() {
        const cards = this.state.cards.map((item,index) => {
            return this.renderCard(item,index);
        })

        const cards2 = this.state.cards2.map((item,index) => {
            return this.renderCard(item,index);
        })

        return (<div className="carousel-inner" role="listbox">
                    <Carousel.Item active>
                        {cards}
                    </Carousel.Item>
                    <Carousel.Item>
                        {cards2}
                    </Carousel.Item>
                </div>)
            }

    render() {
        return (
            // <Container className="text-center my-3">
            //     <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
            //     <Carousel id="multi-item" className="carousel slide carousel-multi-item" data-ride="carousel">
            //         <div className="controls-top">
            //             <a className="btn-floating" href="#multi-item" data-slide="prev"><i className="fas fa-chevron-left"></i>Prev</a>
            //             <a className="btn-floating" href="#multi-item" data-slide="next">Next<i className="fas fa-chevron-right"></i></a>
            //         </div>
            //         <ol className="carousel-indicators">
            //             <li data-target="#multi-item" data-slide-to="0" className="active"></li>
            //             <li data-target="#multi-item" data-slide-to="1"></li>
            //         </ol>
            //         {this.renderCards()}
            //     </Carousel>
            // </Container>
            <Card style={{width: '16rem'}} key={1}>
                <Card.Img variant="top" src={image} />
                <Card.ImgOverlay><a href='/' className='btn btn-primary'>Quick view</a></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                        Living room group
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">5000 EUR</small>
                    </Card.Text>
                </Card.Body>
            </Card>

        );
    }
}

export default InfoBox;