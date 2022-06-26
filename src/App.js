import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateRules = this.validateRules.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked }, () => this.validateRules());
    } else {
      this.setState({ [name]: value }, () => this.validateRules());
    }
  }

  onSaveButtonClick() {
    const {
      cards,
      isSaveButtonDisabled,
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
      cardRare: '',
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
      this.setState({ isSaveButtonDisabled: true });
    } else if (
      Number(cardAttr1) < minAttr
      || Number(cardAttr1) > maxAttr
      || Number(cardAttr2) < minAttr
      || Number(cardAttr2) > maxAttr
      || Number(cardAttr3) < minAttr
      || Number(cardAttr3) > maxAttr
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > maxPower) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      console.log('3');
      this.setState({ isSaveButtonDisabled: false });
    }
  }

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
    } = this.state;

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
        />
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
    );
  }
}

export default App;
