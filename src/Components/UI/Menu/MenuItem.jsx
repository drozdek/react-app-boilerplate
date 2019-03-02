import React, { Component } from 'react';
import './MenuItem.scss';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li>{this.props.menu}</li>
    )
  }
}