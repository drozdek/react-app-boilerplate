import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section dangerouslySetInnerHTML={{__html: JsonMenu[1].menuText}}></section>
    )
  }
}