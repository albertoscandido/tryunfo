import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, testid, onChange, value } = this.props;
    const name = testid.split('-')[0];
    return (
      <select
        data-testid={ testid }
        onChange={ onChange }
        name={ `card${name.charAt(0).toUpperCase() + name.slice(1)}` }
        value={ value }
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
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
