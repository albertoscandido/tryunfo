import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Card from '../components/Card';
import Input from '../components/Input';
import Select from '../components/Select';

export default class Home extends Component {
  render() {
    const {
      cards,
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
      onInputFilterChange,
      filters,
      filterCards,
    } = this.props;

    const {
      name,
      rare,
      trunfo,
    } = filters;

    return (
      <div className="flex-column gap-3">
        <h1>Tryunfo</h1>
        <section className="flex-row-around width-min-80">
          <div>
            <h2 className="margin-b-20">Adicionar Carta</h2>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ onInputChange }
              onSaveButtonClick={ onSaveButtonClick }
              className="create-card-form"
            />
          </div>
          <div className="flex-column gap-3">
            <h2 className="margin-b-20">Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <section className="flex-column width-min-80 gap-2">
          <h2>Todas as cartas</h2>
          <div>
            <h4>Filtros de busca</h4>
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
          </div>
          {
            cards.length === 0 ? null : filterCards()
          }
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  onInputFilterChange: PropTypes.func.isRequired,
  filterCards: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
};
