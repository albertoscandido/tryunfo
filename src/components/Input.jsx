import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, testid } = this.props;
    return <input type={ type } data-testid={ testid } />;
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
