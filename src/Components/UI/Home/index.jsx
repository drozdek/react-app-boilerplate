import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/websites.jpg';


export default class Home extends Component {
  render() {
    return (
      <section>
        <img src={Img} className={'img-responsive'} />
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[0].menuText }}></p>
      </section>
    )
  }
}