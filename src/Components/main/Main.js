import React, { Component } from 'react';
// import styled from 'styled-components';
import InfoBox from './InfoBox.js';
import InfoBox2 from './InfoBox2.js';
// import LazyLoadedCarousel from "./LazyLoadedCarousel.js";
import Carousel2 from "./Carousel2.js";
import './Main.css';

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
        <Carousel2 />

        {/* <div className="container text-center my-3">
            <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
            <div className="row mx-auto my-auto">
                <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                <a className="carousel-control-prev w-auto"  role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next w-auto" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> 
                    <div className="carousel-inner w-100" role="listbox">
                        <div className="carousel-item active">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <img className="img-fluid" src="http://placehold.it/380?text=1" alt='text1'/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <img className="img-fluid" src="http://placehold.it/380?text=2" alt='text2' />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <img className="img-fluid" src="http://placehold.it/380?text=3" alt='text3' />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card card-body">
                                    <img className="img-fluid" src="http://placehold.it/380?text=4" alt='text4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <InfoBox2 />
       
        
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
            <InfoBox />
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