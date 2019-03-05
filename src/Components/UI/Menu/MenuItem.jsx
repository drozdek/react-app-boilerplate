import React, { Component } from 'react';
import './MenuItem.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Link to={this.props.menu}>{this.props.menu}</Link>
    )
  }
}