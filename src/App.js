import React from 'react';
import Card from './components/Card';
import './styles.css';
import Form from './components/Form';
import Input from './components/Input';
import Select from './components/Select';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'raro',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      filters: {
        name: '',
        rare: 'todas',
        trunfo: false,
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateRules = this.validateRules.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.onInputFilterChange = this.onInputFilterChange.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.filterTrunfo = this.filterTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, type, checked: ckd } = target;
    if (type === 'checkbox') this.setState({ [name]: ckd }, () => this.validateRules());
    else this.setState({ [name]: value }, () => this.validateRules());
  }

  onInputFilterChange({ target }) {
    const { filters } = this.state;
    const { name, value, type, checked } = target;
    if (type === 'checkbox') {
      this.setState({ filters: { ...filters, [name]: checked } },
        () => this.validateRules());
    } else {
      this.setState({ filters: { ...filters, [name]: value } },
        () => this.validateRules());
    }
  }

  onSaveButtonClick() {
    const {
      cards,
      isSaveButtonDisabled,
      filters,
      hasTrunfo,
      ...attributes
    } = this.state;
    if (attributes.cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      cards: [...cards, { ...attributes }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  validateRules() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxPower = 210;
    const maxAttr = 90;
    const minAttr = 0;
    if (!cardName.trim()
        || !cardDescription.trim()
        || !cardImage.trim()
        || !cardRare.trim()
    ) {
      console.log('1');
      this.setState({ isSaveButtonDisabled: true });
    } else if (
      Number(cardAttr1) < minAttr
      || Number(cardAttr1) > maxAttr
      || Number(cardAttr2) < minAttr
      || Number(cardAttr2) > maxAttr
      || Number(cardAttr3) < minAttr
      || Number(cardAttr3) > maxAttr
    ) {
      console.log('2');
      this.setState({ isSaveButtonDisabled: true });
    } else if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > maxPower) {
      console.log('3');
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  deleteCard(index) {
    const { cards } = this.state;
    const { cardTrunfo } = cards[index];
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
        cards: cards.filter((_, i) => i !== index),
      });
    } else {
      this.setState({
        cards: cards.filter((_, i) => i !== index),
      });
    }
  }

  filterTrunfo(cards) {
    const { hasTrunfo } = this.state;
    if (!hasTrunfo) return null;
    return cards.map((card, i) => {
      if (card.cardTrunfo) {
        return (
          <>
            <Card { ...card } key={ i } />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.deleteCard(i) }
            >
              Excluir
            </button>
          </>
        );
      }
      return null;
    });
  }

  filterCards() {
    const {
      cards,
      filters: {
        trunfo,
        rare,
        name,
      },
    } = this.state;

    if (trunfo) {
      return this.filterTrunfo(cards);
    }

    return cards.map((card, i) => {
      if (rare !== 'todas') {
        return (card.cardName.includes(name) && card.cardRare === rare) ? (
          <>
            <Card { ...card } key={ i } />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.deleteCard(i) }
            >
              Excluir
            </button>
          </>
        ) : null;
      }
      return card.cardName.includes(name) ? (
        <>
          <Card { ...card } key={ i } />
          <button
            type="button"
            data-testid="delete-button"
            onClick={ () => this.deleteCard(i) }
          >
            Excluir
          </button>
        </>
      ) : null;
    });
  }

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
      filters,
    } = this.state;

    const {
      name,
      rare,
      trunfo,
    } = filters;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          className="create-card-form"
        />
        <h2>Pré-visualização</h2>
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
        <h2>Todas as cartas</h2>
        Filtros de busca
        <Input
          testid="name-filter"
          name="name"
          disabled={ trunfo }
          placeholder="Nome da carta"
          value={ name }
          onChange={ this.onInputFilterChange }
        />
        <Select
          testid="rare-filter"
          name="rare"
          value={ rare }
          disabled={ trunfo }
          placeholder="Raridade"
          options={ ['todas', 'normal', 'raro', 'muito raro'] }
          onChange={ this.onInputFilterChange }
        />
        <Input
          type="checkbox"
          testid="trunfo-filter"
          checked={ trunfo }
          onChange={ this.onInputFilterChange }
          name="trunfo"
          label="Super Trunfo"
        />
        {
          cards.length === 0 ? null : this.filterCards()
        }
      </div>
    );
  }
}
