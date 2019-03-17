import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Styles from './MenuItem.scss';
export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * retrieve clicked elem
   */
  // handleClick(e) {  
  //   this.menuItem = e.target.childNodes[0].nodeValue;
  //   alert(this.menuItem.toLowerCase());
  // }

  render() {
    return (    
        <li><Link to={this.props.menu} className={Styles.linkClass}>{this.props.menu}</Link></li>
    )
  }
}