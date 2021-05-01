import React, { Component } from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';

class Home extends Component {
    render() {
        return (
        <div className="wsmenucontainer clearfix">
            <Header />
            <Main />
        </div>
        );
    }
}

export default Home;