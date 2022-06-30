import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Card from '../components/Card';
import FormFilters from '../components/FormFilters';

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
        <h1 className="margin-b-20">Tryunfo</h1>
        <section className="flex-row-around width-100">
          <div className="flex-row-around gap-3 add-card-pre-vis">
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
          </div>
          <div className="flex-column gap-1">
            <h2>Todas as cartas</h2>
            <div className="all-cards-div">
              <h4>Filtros de busca</h4>
              <FormFilters
                rare={ rare }
                name={ name }
                trunfo={ trunfo }
                onInputFilterChange={ onInputFilterChange }
                className="filters"
              />
            </div>
            <div className="all-cards">
              {
                cards.length === 0 ? null : filterCards()
              }
            </div>
          </div>
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
