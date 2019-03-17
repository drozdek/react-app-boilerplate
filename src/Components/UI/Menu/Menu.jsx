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

<nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
  <a className={"navbar-brand"} href="#">Navbar</a>
  <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className={"navbar-toggler-icon"}></span>
  </button>
  <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
    <ul className={"navbar-nav mr-auto"}>
    {
      this.JsonMenu.map((item, index) => {
              return (
                  <MenuItem key={index} menu={item.menuTitle} className={"nav-link"} />
              )
            })
          }
    </ul>
  </div>
</nav>

      //       this.JsonMenu.map((item, index) => {
      //         return (
      //           <MenuItem key={index} menu={item.menuTitle} />
      //         )
      //       })
      //     }
      //   </ul>
      // </nav>
    )
  }
}