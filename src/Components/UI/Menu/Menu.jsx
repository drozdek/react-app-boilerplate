import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';
import JsonMenu from './Menu.json';


export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      this.JsonMenu = JsonMenu;
    }
    return (
      <ul>
        {
          this.JsonMenu.map( item => {
            return (
            <MenuItem menu={item.menuTitle} />
            )
          })
        }
        </ul>
    )
  }
}