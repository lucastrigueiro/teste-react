import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUserRole } from '../../utils/users';

class Home extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    // Redirect each role user to defined pages
    if (location.pathname === '' || location.pathname === '/') {
      switch (getUserRole()) {
        case 'admin':
          history.push('/example/1');
          break;
        default:
          history.push('/example/default');
          break;
      }
    }
  }

  render() {
    return (<div>Home</div>);
  }
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;

