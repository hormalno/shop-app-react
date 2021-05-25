import React, { Component } from 'react';
// import styled from 'styled-components';
import CardCarousel from './CardCarousel.js';
import Carousel from "./Carousel.js";
import './Main.css';
import image01 from './../../../src/Assets/image001.jpg'
import image02 from './../../../src/Assets/image002.jpg'
import image03 from './../../../src/Assets/image003.jpg'

// const imageCarousel = {
//      images: [        
//         {
//             imageSource: '',
//             imageAlt: 'first slide',
//             imageHeader: 'First Slide',
//             imageText: 'asd'
//         },
//         {
//             imageSource: '',
//             imageAlt: 'second slide',
//             imageHeader: 'Second Slide',
//             imageText: 'zxc'
//         }
//     ]
// };

const cards = [
    {title: 'Card a', imgSrc: 'http://placehold.it/380?text=1'},
    {title: 'Card b', imgSrc: 'http://placehold.it/380?text=2'},
    {title: 'Card c', imgSrc: 'http://placehold.it/380?text=3'},
    {title: 'Card d', imgSrc: 'http://placehold.it/380?text=4'},
    {title: 'Card e', imgSrc: 'http://placehold.it/380?text=5'},
    {title: 'Card f', imgSrc: 'http://placehold.it/380?text=6'},
    {title: 'Card g', imgSrc: 'http://placehold.it/380?text=7'},
    {title: 'Card h', imgSrc: 'http://placehold.it/380?text=8'}
]

const carousel = [
    {
        imageSource: image01,
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


class Main extends Component {
    // style="padding-top: 30px;"
    // vidcover  style="height: 937px; width: 807px;"
    // iframe style="height: 937px; width: 1665.78px;"

    
   render() {

    // const LiMain = styled.li `
    //     width: 100%; 
    //     float: left; 
    //     margin-right: -100%; 
    //     position: relative; 
    //     opacity: 0; 
    //     display: block; 
    //     z-index: 1;
    // `

       return (
    <div>
        <Carousel carousel={carousel} />

        <CardCarousel cards={cards} />
        
        <div id="" className="container-fluid">
            <div data-section-id="video" data-section-type="video-section" className="mb30  video-section-video" data-videotype="youtube" data-videodisplay="autoplay_banner">
                <div className=" hero-video-wrapper home-video section-video hero--medium" id="hero-video-video">
                    <div className="vidcover"></div> 
                    <iframe className="fullvid" id="video-iframe-mobile-video" data-video-id="_9VUPq3SxOc"  frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="1280" height="720" src="https:www.youtube.com/embed/_9VUPq3SxOc?autohide=0&amp;branding=0&amp;cc_load_policy=0&amp;controls=0&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;wmode=opaque&amp;videoId=_9VUPq3SxOc&amp;type=youtube&amp;mute=1&amp;autoplay=1&amp;attemptedToPlay=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhormalno.myshopify.com&amp;widgetid=1"></iframe>
                    <div className="text-center hero-video-caption hero-video-caption-video container">
                        <h3 className="mb30 video-title video-title-video ">Featured video</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid">
            {/* <InfoBox /> */}
        </div>

        <div className="container-fluid">
            <div className="home-cta-bg mt-30   mb30 section-16118342097bc43a8a" data-section-id="16118342097bc43a8a" data-section-type="text-section">
                <div className="cta-overlay">
                    <div className="container">
                        <div className="h_row_content h_row_3">
                            <h2><p>Large Call to Action Area</p></h2>
                            <p>Add a background image or color to this section and create some keyword-rich text about your store here. Great for SEO! You can customize this section with any heading, text, link, and image you want in Theme Settings.</p>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
        );
   }
 }

 export default Main;