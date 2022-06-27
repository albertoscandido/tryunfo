import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, testid, onChange, value, name, ...props } = this.props;

    return (
      <label htmlFor={ name }>
        <select
          data-testid={ testid }
          onChange={ onChange }
          value={ value }
          name={ name }
          { ...props }
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
};
