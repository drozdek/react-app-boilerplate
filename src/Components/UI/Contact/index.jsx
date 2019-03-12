import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';

export default class Contact extends Component {
  render() {
    return (
      <section dangerouslySetInnerHTML={{__html: JsonMenu[3].menuText}}></section>
    )
  }
}