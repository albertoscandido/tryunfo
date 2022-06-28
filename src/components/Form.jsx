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
      ...props
    } = this.props;

    const maxAttrPower = 90;
    const minAttrPower = 0;

    return (
      <form { ...props }>
        <Input
          testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          name="cardName"
          label="Nome"
          className="label-text"
        />
        <Input
          type="textarea"
          testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
          label="Descrição"
          className="label-text"
        />
        <Input
          type="number"
          testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
          name="cardAttr1"
          label="Attr01"
          className="label-text"
        />
        <Input
          type="number"
          testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
          name="cardAttr2"
          label="Attr02"
          className="label-text"
        />
        <Input
          type="number"
          testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          min={ minAttrPower }
          max={ maxAttrPower }
          name="cardAttr3"
          label="Attr03"
          className="label-text"
        />
        <Input
          testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          name="cardImage"
          label="Imagem"
          className="label-text"
        />
        <Select
          label="Raridade"
          options={ ['normal', 'raro', 'muito raro'] }
          testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
          className="label-select"
        />
        {
          hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <Input
              label="Super Trybe Triunfo"
              type="checkbox"
              testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
              className="label-check"
            />
          )
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="btn"
        >
          Salvar
        </button>
      </form>
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
