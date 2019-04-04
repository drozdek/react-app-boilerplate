import React, { Component } from 'react';
import Styles from './Styles.scss';


class Popup extends Component {
  render() {
    return (
      <div>
        <div className={Styles.popup}>
          <h4>Consent</h4>
            <p></p>
        </div>
      </div>
    )
  }
}

export default Popup