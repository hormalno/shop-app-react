import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="colophon" class="site-footer">
                    <div class="site-info">
                        <a href="https://wordpress.com/?ref=footer_website" rel="nofollow">Create a free website or blog at WordPress.com.</a>
                    </div>
                    <div class="contact-info-area ">
                        <div class="contact-info-wrapper">
                            <span class="contact-info-address">
                                <a href="http://maps.google.com/maps?q=dfsdffsdfsdfdsfsdfdsfs+ddf+sfsd" target="_blank">
                                    <svg class="icon icon-location" aria-labelledby="title-60097bc4d2d7f" role="img">
                                        <title id="title-60097bc4d2d7f">Location</title>
                                    </svg>					
                                    <span class="contact-info-label">dfsdffsdfsdfdsfsdfdsfs ddf sfsd</span>
                                </a>
                            </span>
                            <span class="contact-info-phone">
                                <a href="tel:4543545345345">
                                    <svg class="icon icon-phone" aria-labelledby="title-60097bc4d2d8f" role="img">
                                        <title id="title-60097bc4d2d8f">Phone</title>
                                    </svg>					
                                    <span class="contact-info-label">4543545345345</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
