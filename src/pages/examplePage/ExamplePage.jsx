import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExamplePage.scss';

class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { exParam } = this.props.match.params;
    return (
      <div className="ExamplePage">
        Página de exemplo {exParam}
      </div>
    );
  }
}

ExamplePage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

ExamplePage.defaultProps = {

};

export default ExamplePage;
