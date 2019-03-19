import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <img src={Img} className={'img-responsive'} />
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[2].menuText }}></p>
      </section>
    )
  }
}