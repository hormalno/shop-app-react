import React, { Component } from 'react';
import ReactMegaMenu from 'react-mega-menu';

class MegaMenu extends Component {

  
    render() {
      
      const styleConfig = {
          // containerProps?: React.HTMLAttributes<HTMLDivElement>;
          // contentProps?: React.HTMLAttributes<HTMLDivElement>;
          // menuItemProps?: React.HTMLAttributes<HTMLLIElement>;
          // menuItemSelectedProps?: React.HTMLAttributes<HTMLLIElement>;
          // menuProps?: React.HTMLAttributes<HTMLUListElement>;
      }
      
      const menuData = {
          label: "asd",           // label to be shown on for each menuItem
          key: 1     // a key id
          // items: React.ReactNode;   // a react node to be presented as content
      }
        return (
            <div id="nav">
              <nav className="navbar" role="navigation">
                {/* <div className="navbar-header">
                   <a href="#" className="visible-ms visible-xs pull-right navbar-cart" id="wsnavtoggle">
                    <div className="cart-icon"><i className="fa fa-bars"></i></div>
                  </a>
                  <li className="dropdown-grid no-open-arrow visible-ms visible-xs account-icon-mobile navbar-cart">
                    <a data-toggle="dropdown" href="javascript:;" className="dropdown-toggle navbar-cart" aria-expanded="true"><span className="icons"><i className="fa fa-user"></i></span></a>
                    <div className="dropdown-grid-wrapper mobile-grid-wrapper">
                      <div className="dropdown-menu no-padding col-xs-12 col-sm-5" role="menu">
                        <div className="menu_c acc_menu">
                          <div className="menu_title clearfix">
                            <h4>My Account</h4> 
                          </div>
                          <div className="login_frm">
                            <p className="text-center">Welcome to FurnishTime!</p>
                            <div className="remember">
                                <a href="/account/login" className="signin_btn btn_c">Login</a>
                                <a href="/account/register" className="signin_btn btn_c">Create Account</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <a href="javascript:void(0);" data-href="/cart" className="visible-ms visible-xs pull-right navbar-cart cart-popup">
                    <div className="cart-icon"><span className="count hidden">0</span><i className="fa fa-shopping-cart"></i></div>
                  </a>   
                  <a href="/search" className="visible-ms visible-xs pull-right navbar-cart">
                    <div className="cart-icon"><i className="fa fa-search"></i></div>
                  </a>
                  <div className="visible-ms visible-xs">
                    <h1>  
                      <a className="navbar-brand" href="/" itemprop="url">
                        <img src="//cdn.shopify.com/s/files/1/0787/9973/files/logo_550x.png?v=1487270357" alt="FurnishTime" itemprop="logo"/>
                      </a>
                    </h1>
                  </div>
                </div> 
                <nav className="wsmenu inline" role="navigation">
                  <ul className="mobile-sub mega_menu wsmenu-list">
                    <li>
                      <a href="/">Home</a>
                    </li>  
                   <li className="mega_menu_container"><span className="wsmenu-click"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                    <a href="/collections/all" className="twin" aria-controls="megamenu_items-furniture" aria-haspopup="true" aria-expanded="false">Furniture<span className="arrow"></span></a>
                      <div className="megamenu clearfix">
                        <ul className="wsmenu-sub-list" id="megamenu_items-furniture">
                          <li className="col-lg-3 col-md-3 col-sm-3 mb20d link-list"><span className="wsmenu-click02"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                            <h5><a href="#" aria-controls="megamenu_items-by-room" aria-haspopup="true" aria-expanded="false">By Room</a></h5>
                            <ul id="megamenu_items-by-room">
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/living-room">Living Room</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/bedroom">Bedroom</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/dining-room">Dining Room</a>
                              </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-md-3 col-sm-3 mb20d link-list"><span className="wsmenu-click02"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                            <h5><a href="#" aria-controls="megamenu_items-by-brand" aria-haspopup="true" aria-expanded="false">By Brand</a></h5>
                            <ul id="megamenu_items-by-brand">
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/asfalio">Asfalio</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/flenefor">Flenefor</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/garbini">Garbini</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/opaquio">Opaquio</a>
                              </li>
                              <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                              <a href="/collections/varadini">Varadini</a>
                              </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-md-3 col-sm-3 mb20d link-list"><span className="wsmenu-click02"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                            <h5><a href="#" aria-controls="megamenu_items-by-style" aria-haspopup="true" aria-expanded="false">By Style</a></h5>
                            <ul id="megamenu_items-by-style" >
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/style_classNameic">classNameic</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/style_contemporary">Contemporary</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/style_new-age">New Age</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/style_rustic">Rustic</a>
                                </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-md-3 col-sm-3 mb20d link-list"><span className="wsmenu-click02"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                            <h5><a href="#" aria-controls="megamenu_items-by-material" aria-haspopup="true" aria-expanded="false">By Material</a></h5>
                            <ul id="megamenu_items-by-material">
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/material_leather">Leather</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/material_microfiber">Microfiber</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/material_microsuede">Microsuede</a>
                                </li>
                                <li className="col-lg-12 col-md-12 col-sm-12 link-list">
                                <a href="http://showtime-furniture.myshopify.com/collections/all/material_vinyl">Vinyl</a>
                                </li>
                            </ul>
                          </li>  
                        </ul>
                      </div>
                    </li>
                    <li className="mega_menu_simple_container has-submenu"><span className="wsmenu-click"><i className="wsmenu-arrow fa fa-angle-down"></i></span>
                      <a href="/pages/features" aria-controls="megamenu_items-features" aria-haspopup="true" aria-expanded="false">Features<span className="arrow"></span></a>
                      <ul id="megamenu_items-features" className="wsmenu-submenu">
                        <li>
                          <a href="/pages/features">All Theme Features</a>
                        </li>
                        <li>
                          <a href="/pages/faqs">FAQ</a>
                        </li>
                      </ul>  
                    </li>
                    <li>
                      <a href="/blogs/news">Blog</a>
                    </li>
                    <li>
                      <a href="/pages/about">About</a>
                    </li>
                    <li>
                      <a href="/pages/contact">Contact</a>
                    </li>
                  </ul> 
                </nav> */}
                <ul className="hidden-xs nav navbar-nav navbar-right">
                  <li className="dropdown-grid no-open-arrow ">
                    <a data-toggle="dropdown" data-href="/cart" href="javascript:void(0);" className="dropdown-toggle cart-popup" aria-expanded="true">
                      <div className="cart-icon">
                        <span className="count hidden">0</span><i className="fa fa-shopping-cart"></i>
                      </div>
                    </a>
                    <div className="dropdown-grid-wrapper hidden">
                      <div className="dropdown-menu no-padding col-xs-12 col-sm-9 col-md-7" role="menu">
                        <div className="menu_c cart_menu">
                          <div className="menu_title clearfix">
                            <h4>Shopping Cart</h4>
                          </div>
                          <div className="cart_row">
                            <div className="empty-cart">Your cart is currently empty.</div>
                            <p><a href="javascript:void(0)" className="btn_c btn_close">Continue Shopping</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-grid no-open-arrow">
                    <a data-toggle="dropdown" href="javascript:;" className="dropdown-toggle" aria-expanded="true"><span className="icons"><i className="fa fa-user"></i></span></a>
                    <div className="dropdown-grid-wrapper">
                      <div className="dropdown-menu no-padding col-xs-12 col-sm-5 col-md-4 col-lg-3" role="menu">
                        <div className="menu_c acc_menu">
                          <div className="menu_title clearfix">
                            <h4>My Account</h4>
                          </div>
                          <div className="login_frm">
                            <p className="text-center">Welcome to FurnishTime!</p>
                            <div className="remember">
                              <a href="/account/login" className="signin_btn btn_c">Login</a>
                              <a href="/account/register" className="signin_btn btn_c">Create Account</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="dropdown-grid no-open-arrow">
                    <a data-toggle="dropdown" href="javascript:;" className="dropdown-toggle" aria-expanded="false"><span className="icons"><i className="fa fa-search"></i></span></a>
                    <div className="dropdown-grid-wrapper" role="menu">
                      <div className="dropdown-menu fixed_menu col-sm-4 col-lg-3 pl-pr-15">
                        <form action="/search" method="get" role="search">
                          <div className="menu_c search_menu">
                            <div className="search_box">
                              
                              <input type="hidden" name="type" value="product"/>
                              
                              <input type="search" name="q" value="" className="txtbox" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-link" type="submit" value="Search"><span className="fa fa-search"></span></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul> 
              </nav>
            </div>
        );
    }
}

export default MegaMenu;  