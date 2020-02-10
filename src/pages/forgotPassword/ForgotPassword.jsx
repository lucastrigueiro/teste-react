import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ForgotPassword.scss';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="ForgotPassword" >
        Forgot Password
      </div>
    );
  }
}

ForgotPassword.propTypes = {

};

ForgotPassword.defaultProps = {

};

export default withRouter(ForgotPassword);
