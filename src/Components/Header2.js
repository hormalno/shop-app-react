import React, { Component } from 'react';
import './Header2.css';

class Header2 extends Component {
    render() {
        return (
            <div id="shopify-section-header" className="shopify-section">

<div id="header" data-section-id="header" data-section-type="header-section">

        
        <div className="header_top">
  <div className="container">
    <div className="top_menu hidden-ms hidden-xs">
      
        <a className="navbar-brand text-logo" href="/">hormalno</a>
      
    </div>
    <div className="hed_right">
      
      <ul>
        
      </ul>
      
      
      <div className="header-contact">
        <ul>
          
          <li><a href="tel:800.555.5555"><span className="fa fa-phone"></span>800.555.5555</a></li>
          
          
          <li><a href="mailto:example@cooktime.com"><span className="fa fa-envelope"></span>example@cooktime.com</a></li>
          
        </ul>
      </div>
      
    </div>
  </div>
</div>
        

        <div className="header_bot  enabled-sticky-menu">
          <div className="header_content">
            <div className="container">

              
              <div id="nav">
  <nav className="navbar" role="navigation">
    <div className="navbar-header">
      <a href="#" className="visible-ms visible-xs pull-right navbar-cart" id="wsnavtoggle"><div className="cart-icon"><i className="fa fa-bars"></i></div></a>
      
      <a href="javascript:void(0);" data-href="/cart" className="visible-ms visible-xs pull-right navbar-cart cart-popup"><div className="cart-icon"><span className="count hidden">0</span><i className="fa fa-shopping-cart"></i></div></a>
      
      <a href="/search" className="visible-ms visible-xs pull-right navbar-cart"><div className="cart-icon"><i className="fa fa-search"></i></div></a>
      
      
      <div className="visible-ms visible-xs">
        
        
          
              <h1 className="h1_homepage">
          
         <a className="navbar-brand text-logo" href="/">hormalno</a>
           
             </h1>
          
        
        
      </div>
      
    </div>
    <nav className="wsmenu" role="navigation">
      <ul className="mobile-sub mega_menu wsmenu-list">
        

        

      </ul>
    </nav>
    <ul className="hidden-xs nav navbar-nav navbar-right">
      <li className="dropdown-grid no-open-arrow ">
        <a data-toggle="dropdown" data-href="/cart" href="javascript:void(0);" className="dropdown-toggle cart-popup" aria-expanded="true"><div className="cart-icon"><span className="count hidden">0</span><i className="fa fa-shopping-cart"></i></div></a>
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
<script>
  
</script>

          </div>
        </div>
      </li>
      
      <li className="dropdown-grid no-open-arrow">
        
        <a data-toggle="dropdown" href="javascript:;" className="dropdown-toggle" aria-expanded="false"><span className="icons"><i className="fa fa-search"></i></span></a>
        <div className="dropdown-grid-wrapper" role="menu">
          <div className="dropdown-menu fixed_menu col-sm-4 col-lg-3 pl-pr-15">
            


<form action="/search" method="get" role="search" >
  <div className="menu_c search_menu">
    <div className="search_box">
      
      <input type="search" name="q" value="" className="txtbox" placeholder="Search" aria-label="Search" autocomplete="off"/>
      <button className="btn btn-link" type="submit" value="Search"><span className="fa fa-search"></span></button>
    </div>
  </div>
<ul className="search-results search_autocomplete_wrapper" ></ul></form>
          </div>
        </div>
        
      </li>
    </ul>
  </nav>
</div>

              

			  
            </div>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Header2;