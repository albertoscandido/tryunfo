import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, testid, onChange, value, name, label, ...props } = this.props;

    return (
      <label htmlFor={ name } { ...props }>
        { label }
        <select
          data-testid={ testid }
          onChange={ onChange }
          value={ value }
          name={ name }
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
};

Select.defaultProps = {
  label: '',
};
