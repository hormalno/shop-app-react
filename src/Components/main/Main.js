import React, { Component } from 'react';
// import styled from 'styled-components';
import InfoBox from './InfoBox.js';
import LazyLoadedCarousel from "./LazyLoadedCarousel.js";
import './Main.css';

const imageCarousel = {
     images: [        
        {
            imageSource: '',
            imageAlt: 'first slide',
            imageHeader: 'First Slide',
            imageText: 'asd'
        },
        {
            imageSource: '',
            imageAlt: 'second slide',
            imageHeader: 'Second Slide',
            imageText: 'zxc'
        }
    ]
};

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
    <div id="content" >
        <div id="shopify-section-slideshow" class="shopify-section">
            <LazyLoadedCarousel slides={imageCarousel.images}/>
        </div>
        <div id="shopify-section-featured-collections" class="shopify-section">
            <div class="container" data-section-id="featured-collections" data-section-type="featured-collections-section">
                <div class="h_row_content home_collection section-featured-collections">
                    <div class="clearfix">
                        <h3>Collection list</h3>
                    </div>
                    <div class="catalog_c mt30">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="product_c">
                                    <div class="row collection-grid view-grid fadeInUp">
                                        <InfoBox />
                                        <InfoBox />
                                        <InfoBox />
                                        <InfoBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div id="shopify-section-video" class="shopify-section home-video-section">
            <div data-section-id="video" data-section-type="video-section" class="mb30  video-section-video" data-videotype="youtube" data-videodisplay="autoplay_banner">
                <div class=" hero-video-wrapper home-video section-video hero--medium" id="hero-video-video">
                    <div class="vidcover"></div> 
                    <iframe class="fullvid" id="video-iframe-mobile-video" data-video-id="_9VUPq3SxOc"  frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="1280" height="720" src="https:www.youtube.com/embed/_9VUPq3SxOc?autohide=0&amp;branding=0&amp;cc_load_policy=0&amp;controls=0&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;wmode=opaque&amp;videoId=_9VUPq3SxOc&amp;type=youtube&amp;mute=1&amp;autoplay=1&amp;attemptedToPlay=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fhormalno.myshopify.com&amp;widgetid=1"></iframe>
                    <div class="text-center hero-video-caption hero-video-caption-video container">
                        <h3 class="mb30 video-title video-title-video ">Featured video</h3>
                    </div>
                </div>
            </div>
        </div>
        <div id="shopify-section-1611833871fbd2bc70" class="shopify-section">
            <div class="container" data-section-id="1611833871fbd2bc70" data-section-type="featured-collections-section">
                <div class="h_row_content home_collection section-1611833871fbd2bc70">
                    <div class="clearfix">
                        <h3>Collection list</h3>
                    </div>
                    <div class="catalog_c mt30">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="product_c">
                                    <div class="row collection-grid view-grid fadeInUp">
                                        <InfoBox />
                                        <InfoBox />
                                        <InfoBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="shopify-section-16118342097bc43a8a" class="shopify-section">
            <div class="home-cta-bg mt-30   mb30 section-16118342097bc43a8a" data-section-id="16118342097bc43a8a" data-section-type="text-section">
                <div class="cta-overlay">
                    <div class="container">
                        <div class="h_row_content h_row_3">
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