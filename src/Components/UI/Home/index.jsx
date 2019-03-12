import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';

export default class Home extends Component {
  render() {
    return(
      <section dangerouslySetInnerHTML={{__html: JsonMenu[0].menuText}}></section>
    )
  }
}