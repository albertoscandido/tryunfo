import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  render() {
    const { options, testid } = this.props;
    return (
      <>
        {options.map((option) => (
          <label key={ option } htmlFor={ option }>
            <input
              name={ option }
              type="checkbox"
              // value={ option }
              data-testid={ testid }
              // checked={ value.includes(option) }
            />
            {option}
          </label>
        ))}
      </>
    );
  }
}

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  // value: PropTypes.bool.isRequired,
};
