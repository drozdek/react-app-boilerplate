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
  handleClick(e) {  
    this.menuItem = e.target;
    this.parent = this.menuItem.parentNode.parentNode.children;

    for (var i=0; i<this.parent.length; i++){
      var child = this.parent[i].children[0];
      child.setAttribute('class', '');
    }
    
    if (this.menuItem.hasAttribute('href')){
      this.menuItem.setAttribute('class', 'active');
    }
  }


  render() {
    return (    
        <li onClick={this.handleClick.bind(this)}><Link to={this.props.menu} className={Styles.linkClass}>{this.props.menu}</Link></li>
    )
  }
}