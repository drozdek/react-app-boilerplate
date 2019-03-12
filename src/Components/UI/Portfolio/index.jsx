import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';

export default class Portfolio extends Component {
  render() {
    return (
      <section dangerouslySetInnerHTML={{__html: JsonMenu[2].menuText}}></section>
    )
  }
}