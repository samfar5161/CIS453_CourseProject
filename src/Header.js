import React, {Component} from 'react';
import './Header.css';
import Logo from './pagedraw/logo';
import HeaderBanner from './pagedraw/header_banner1';

class Header extends Component {
    constructor(props){
      super()
    
    }
  
    render() {
      return (
        <div>
          <div className="HeaderTop">
            <ul>
              <li>Sign In</li>
              <li>Gift Certificate</li>
              <li>Order Tracking</li>
              <li>Wish List</li>
              <li>Help</li>
            </ul>

          </div>
          <div className="HeaderMiddle">
            <a href="./"><Logo/></a>
          
          </div>
          <div className="HeaderBottom">
            <ul>
              <li>Featured Categoies</li>
              <li>Shop By Brand</li>
              <li><input type="text" size="40"/><input id="BtnSearch" type="Submit" value="SEARCH"/></li>
              <li><b>Cart</b></li>
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Header;