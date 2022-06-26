import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const maxAttrPower = 90;
    const minAttrPower = 0;

    return (
      <>
        <Input
          type="text"
          testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          type="textarea"
          testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
        />
        <Input
          type="number"
          testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
        />
        <Input
          type="number"
          testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
        />
        <Input
          type="text"
          testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          options={ ['normal', 'raro', 'muito raro'] }
          testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        />
        {
          hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <Input
              type="checkbox"
              testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
