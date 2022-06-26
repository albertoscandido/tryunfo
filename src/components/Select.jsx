import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, testid } = this.props;
    return (
      <select data-testid={ testid }>
        {
          options.map((option) => <option key={ option }>{ option }</option>)
        }
      </select>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
};
