import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Page from './Page.jsx';
import Home from './Components/UI/Home/index.jsx';
import About from './Components/UI/About/index.jsx';
import Portfolio from './Components/UI/Portfolio/index.jsx';
import Contact from './Components/UI/Contact/index.jsx';
import Footer from './Components/UI/Footer/index';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (                 
      <Router>
        <div>
          <Page />
          <Redirect from="/" to="/Home" />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}