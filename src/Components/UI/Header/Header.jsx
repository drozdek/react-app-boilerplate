import React, { Component } from 'react';
import Styles from './Header.scss';
import Logo from '../../../../img/name.png';
import Stripes from '../../../../img/3stripes.png';
import Menu from '../Menu/Menu.jsx';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={'col-sm-1','col-lg-1'}></div>
        {/* <header src={Styles.Stripes}> */}
          {/* <a href='/'>
            <img src={Logo} alt="Rafal Drozdowski - logo" className={Styles.Img, Styles.Name} />
            <img src={Stripes} id={Styles.stripes} /></a> */}
        {/* </header> */}
        <Menu className={'col-sm-10','col-lg-10'} />
        <div className={'col-sm-1','col-lg-1'}></div>

      </div>
    )
  }
}