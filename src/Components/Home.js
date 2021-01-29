import React, { Component } from 'react';
import Header from './header/Header.js';

class Home extends Component {
    render() {
        return (
        <div className="wsmenucontainer clearfix">
            <div className="overlapblackbg"></div>
            <Header />
        </div>
        );
    }
}

export default Home;