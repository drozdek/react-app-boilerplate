import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';
import JsonMenu from './Menu.json';


export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      this.JsonMenu = JsonMenu
    }

    return (
      <ul className={'navbar'}>
        {
          this.JsonMenu.map( (item, index) => {
            return (
              <MenuItem key={index} menu={item.menuTitle} />
            )
          })
        }
      </ul>
    )
  }
}