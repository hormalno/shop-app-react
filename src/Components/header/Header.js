import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import './Header.css';
import NavBtn from './NavBtn';
import { Container } from "react-bootstrap";

function Header(props) {
    const items = {
        items: [
                    [
                        {
                            label: 'Column 1',
                            items: [{label: 'Video 1.1'},{separator:true},{label: 'Video 1.2'}]
                        },
                        {
                            label: 'Column 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        },
                        {
                            label: 'Column 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Column 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Column 1',
                            items: [{label: 'Video 1.1'},{separator:true},{label: 'Video 1.2'}]
                        },
                        {
                            label: 'Column 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        },
                        {
                            label: 'Column 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Column 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Column 1',
                            items: [{label: 'Video 1.1'},{separator:true},{label: 'Video 1.2'}]
                        },
                        {
                            label: 'Column 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        },
                        {
                            label: 'Column 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Column 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Column 1',
                            items: [{label: 'Video 1.1'},{separator:true},{label: 'Video 1.2'}]
                        },
                        {
                            label: 'Column 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        },
                        {
                            label: 'Column 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Column 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ]
                
                ]
    };

    return <div>
                <div className="promo-bar">
                    <p>Save 10% storewide using coupon code SAVE</p>
                </div>
                <div id="header">
                    <div className="header_top">
                        <Container>
                            <div className="top_menu hidden-ms hidden-xs">
                                <a className="navbar-brand" href="/">
                                    <img src="//cdn.shopify.com/s/files/1/0787/9973/files/logo_550x.png?v=1487270357" alt="FurnishTime" className="img-responsive" />
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
                        </Container>
                    </div>
                    <div className="header_bot ">
                        <nav className="navbar">
                            <div className="container">
                            <ul className="menu-menu">
                                <NavBtn><Link to="/">Home</Link></NavBtn>
                                {/* <li className="mega_menu_container"><span className="wsmenu-click"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                                <Link to="/" className="twin" aria-controls={props.children} aria-haspopup="true" aria-expanded="false">Furniture<span className="arrow"></span></Link> */}
                                <MegaMenu model={items} label="Shop"/>
                                <NavBtn><Link to="/">About</Link></NavBtn>
                                <NavBtn><Link to="/">Contact</Link></NavBtn>
                            </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>;
  }

export default Header;