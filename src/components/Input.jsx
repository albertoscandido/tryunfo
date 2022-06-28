import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, testid, onChange, name, label, ...props } = this.props;

    return (
      <label htmlFor={ name } { ...props }>
        { type !== 'checkbox' ? label : null }
        <input
          name={ name }
          type={ type }
          data-testid={ testid }
          onChange={ onChange }
        />
        { type === 'checkbox' ? label : null }
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  testid: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  type: 'text',
};
