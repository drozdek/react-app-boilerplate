import React, { Component } from 'react';
import Header from './Components/UI/Header/index';
import Footer from './Components/UI/Footer/index';
import Menu from './Components/UI/Menu/index';

export default class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />,
        <Footer />
      </div>
    )
  }

}