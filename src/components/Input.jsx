import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, testid, onChange, ...props } = this.props;

    const name = testid.split('-')[0];

    return (
      <input
        type={ type }
        data-testid={ testid }
        name={ `card${name.charAt(0).toUpperCase() + name.slice(1)}` }
        onChange={ onChange }
        { ...props }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
