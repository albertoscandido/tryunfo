import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './components/Card';
import './styles.css';
import Home from './pages/Home';
import defalt from './default.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class App extends React.Component {
  constructor() {
    super();

    const filteredDefault = defalt.slice(1);

    this.state = {
      cards: [...filteredDefault],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'raro',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: true,
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

  filterCards() {
    const {
      cards,
      filters: {
        trunfo,
        rare,
        name,
      },
    } = this.state;

    let cardsArr = cards;

    if (trunfo) {
      cardsArr = [cards.find(({ cardTrunfo }) => cardTrunfo)];
    } else {
      cardsArr = cards.filter(({ cardRare }) => (rare === 'todas' ? true : (rare === cardRare)));
      cardsArr = cardsArr.filter(({ cardName }) => cardName.toLowerCase().includes(name.toLowerCase()));
    }

    return (
      <Swiper
        spaceBetween={ 50 }
        slidesPerView={ cardsArr.length > 1 ? 2 : 1 }
        pagination={ { clickable: true } }
      >
        {
          cardsArr.map((card, i) => (
            <SwiperSlide key={ card.cardName }>
              <div className="flex-column gap-05 card-back">
                <Card { ...card } key={ i } />
                <button
                  type="button"
                  data-testid="delete-button"
                  className="btn w-80"
                  onClick={ () => this.deleteCard(i) }
                >
                  Excluir
                </button>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    );
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

    return (
      <Home
        cards={ cards }
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
        filters={ filters }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
        onInputFilterChange={ this.onInputFilterChange }
        filterCards={ this.filterCards }
      />
    );
  }
}
