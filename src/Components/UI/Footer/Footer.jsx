import React, { Component } from 'react';
import Styles from './Footer.scss';

export default class Footer extends Component {
  constructor(props){
    super(props);      
  }

  render(){
    return(
      <footer role="contentinfo">
         <p>All rights reserved ©  <span id="now">2019</span> Rafal Drozdowski</p>
      </footer>
    )
  }
}