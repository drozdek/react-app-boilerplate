import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <img src={Img} className={'img-responsive'}/>
        <section dangerouslySetInnerHTML={{ __html: JsonMenu[2].menuText }}></section>
      </div>
    )
  }
}