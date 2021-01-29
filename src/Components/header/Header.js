import React, { Component } from 'react';
import MegaMenu from './MegaMenu';
import './Header.css';

class Header extends Component {
    render() {
        return (
        <div id="shopify-section-header" className="shopify-section">
          <div className="promo-bar">
              <p>Save 10% storewide using coupon code SAVE</p>
          </div>
          <div id="header" data-section-id="header" data-section-type="header-section">
            <div className="header_top">
              <div className="top_menu hidden-ms hidden-xs">
                <a className="navbar-brand" href="/" itemprop="url">
                  <img src="//cdn.shopify.com/s/files/1/0787/9973/files/logo_550x.png?v=1487270357" alt="FurnishTime" className="img-responsive" itemprop="logo"/>
                </a>
              </div>
              <div className="hed_right">
                <ul>       
                  <li><a href="/account">My Account</a></li>  
                  <li><a href="/pages/faqs">Help</a></li>
                  <li><a href="/pages/contact">Contact</a></li>
                </ul>    
                <div className="header-contact">
                  <ul>
                    <li><a href="tel:800.555.5555"><span className="fa fa-phone"></span>800.555.5555</a></li>
                    <li><a href="mailto:email@example.com"><span className="fa fa-envelope"></span>email@example.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header_bot ">
              <div className="header_content">
                <div className="container">
                  <MegaMenu />
                </div>
              </div>  
            </div>
          </div>
        </div>
        );
    }
}

export default Header;  