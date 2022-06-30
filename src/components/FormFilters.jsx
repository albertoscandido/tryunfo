import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

export default class FormFilters extends Component {
  render() {
    const {
      trunfo,
      name,
      rare,
      onInputFilterChange,
      ...props
    } = this.props;

    return (
      <form { ...props }>
        <Input
          testid="name-filter"
          name="name"
          disabled={ trunfo }
          placeholder="Nome da carta"
          value={ name }
          onChange={ onInputFilterChange }
          className="label-text"
          label="Nome"
        />
        <Select
          testid="rare-filter"
          name="rare"
          value={ rare }
          disabled={ trunfo }
          placeholder="Raridade"
          options={ ['todas', 'normal', 'raro', 'muito raro'] }
          onChange={ onInputFilterChange }
          label="Raridade"
          className="label-select"
        />
        <Input
          type="checkbox"
          testid="trunfo-filter"
          checked={ trunfo }
          onChange={ onInputFilterChange }
          name="trunfo"
          label="Super Trunfo"
          className="label-check"
        />
      </form>
    );
  }
}

FormFilters.propTypes = {
  rare: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onInputFilterChange: PropTypes.func.isRequired,
};
