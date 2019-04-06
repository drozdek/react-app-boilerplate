import React, { Component } from 'react';
import Styles from './Styles.scss';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      consent: false
    }
  }

  /*
  * onClick action
  */
  consentClick() {

    /**
     * set state key
     */
    this.setState({
      consent: true
    })

    /**
     * set localStorage key 
     */
    window.localStorage.setItem(
      'visited', true
    )

  }

  render() {
    {
      console.log(`Consent button ${this.state.consent}`);
    }

    return (
      <div>
        { this.state.consent === false ? (
        <div className={Styles.popup}>        
          <h4>Compliance Check</h4>
          <p>This site tracks visits anonymously using localStorage. Close this dialog to confirm you are happy with that, or find out more in the best practice privacy statement.</p>
          <button className={Styles.button} onClick={this.consentClick.bind(this)}>Agree and close</button>
        </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default Popup