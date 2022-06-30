import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      options,
      testid,
      onChange,
      value,
      name,
      label,
      disabled,
      ...props
    } = this.props;

    return (
      <label htmlFor={ name } { ...props }>
        { label }
        <select
          data-testid={ testid }
          onChange={ onChange }
          value={ value }
          name={ name }
          disabled={ disabled }
        >
          {
            options.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                { option }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  label: '',
  disabled: false,
};
