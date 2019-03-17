import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/websites.jpg';


export default class Home extends Component {
  render() {
    return(
      <div>
      <img src={Img}  className={'img-responsive'}/>
      <section dangerouslySetInnerHTML={{__html: JsonMenu[0].sectionImg, __html: JsonMenu[0].menuText}}></section>
      </div>
    )
  }
}