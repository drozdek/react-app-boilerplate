import React, { Component } from 'react';
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