import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
// import image from './infobox.jpg'


class InfoCard extends Component {

    render() {
        return (
            <Card style={{width: '16rem'}}>
                <Card.Img variant="top" src={this.props.card.imgSrc} />
                <Card.ImgOverlay><a href='/' className='btn btn-primary'>Quick view</a></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{this.props.card.title}</Card.Title>
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

export default InfoCard;