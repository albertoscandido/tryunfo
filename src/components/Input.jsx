import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      type,
      testid,
      value,
      onChange,
      name,
      label,
      disabled,
      checked,
      ...props
    } = this.props;

    return type === 'checkbox' ? (
      <label htmlFor={ name } { ...props }>
        <input
          name={ name }
          type={ type }
          data-testid={ testid }
          onChange={ onChange }
          disabled={ disabled }
          checked={ checked }
        />
        { label }
      </label>
    ) : (
      <label htmlFor={ name } { ...props }>
        { label }
        <input
          value={ value }
          name={ name }
          type={ type }
          data-testid={ testid }
          onChange={ onChange }
          disabled={ disabled }
        />
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
  value: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  disabled: false,
  checked: false,
  value: '',
};
