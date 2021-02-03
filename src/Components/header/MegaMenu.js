import React, { Component } from 'react';
import './MegaMenu.css';

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
          <div className="dropdown">
            <div className="row">
              <div className="column">
                <h3>Category 1</h3>
                <ul>
                  <li><a href="/">Link 1</a></li>
                  <li><a href="/">Link 2</a></li>
                  <li><a href="/">Link 3</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <ul>
                  <li><a href="/">Link 1</a></li>
                  <li><a href="/">Link 2</a></li>
                  <li><a href="/">Link 3</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Category 3</h3>
                <ul>
                  <li><a href="/">Link 1</a></li>
                  <li><a href="/">Link 2</a></li>
                  <li><a href="/">Link 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default MegaMenu;  