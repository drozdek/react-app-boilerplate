import React, { Component } from 'react';
import Styles from './Header.scss';
import Logo from '../../../../img/name.png';
import Stripes from '../../../../img/3stripes.png';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header src={Styles.Stripes}>
        <a href="#">
          <img src={Logo} alt="logo" className={Styles.Img} className={Styles.Name} />
          <img src={Stripes} id={Styles.stripes} /></a>
      </header>
    )
  }
}