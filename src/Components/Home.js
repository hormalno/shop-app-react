import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import Main from './Main';

class Home extends Component {
    render() {
        return (
        <div className="wsmenucontainer clearfix">
            <div className="overlapblackbg"></div>
            <div id="shopify-section-header" className="shopify-section">
                <div className="promo-bar">
                    <p>Save 10% storewide using coupon code SAVE</p>
                </div>
                <Header />
            </div>
        </div>
        );
    }
}

export default Home;