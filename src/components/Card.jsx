import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;
    return (
      <div className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h4 data-testid="description-card">{ cardDescription }</h4>
        <h4 data-testid="attr1-card">{ `Attr01: ${cardAttr1}` }</h4>
        <h4 data-testid="attr2-card">{ `Attr02: ${cardAttr2}` }</h4>
        <h4 data-testid="attr3-card">{ `Attr03: ${cardAttr3}` }</h4>
        <h4 data-testid="rare-card">{ cardRare }</h4>
        { cardTrunfo ? (<h4 data-testid="trunfo-card">Super Trunfo</h4>) : null }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
