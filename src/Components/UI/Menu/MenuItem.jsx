import React, { Component } from 'react';
import JsonMenu from './Menu.json';
import './MenuItem.scss';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.json = JsonMenu;
  }
  render() {

    {
      this.json.map( (i,k) => {
        console.log(i);
      })
    }

    return (

    )
  }
}