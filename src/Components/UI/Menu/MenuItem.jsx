import React, { Component } from 'react';
import './MenuItem.scss';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * retrieve clicked elem
   */
  handleClick(e) {  
    this.menuItem = e.target.childNodes[0].nodeValue;
  }

  render() {
    return (
        <li onClick={this.handleClick.bind(this)}>{this.props.menu}</li>
    )
  }
}