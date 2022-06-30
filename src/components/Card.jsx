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
        <h4 data-testid="name-card" className="card-title">{ cardName }</h4>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        { cardDescription ? (
          <div className="card-description">
            <h5
              data-testid="description-card"
            >
              { cardDescription }
            </h5>
          </div>
        ) : null }
        <div className="flex-row-around gap-05">
          { cardAttr1 ? (
            <span>
              Attr01:
              {' '}
              <h5 data-testid="attr1-card">{cardAttr1}</h5>
            </span>) : null }
          { cardAttr2 ? (
            <span>
              Attr02:
              {' '}
              <h5 data-testid="attr2-card">{cardAttr2}</h5>
            </span>) : null }
          { cardAttr3 ? (
            <span>
              Attr03:
              {' '}
              <h5 data-testid="attr3-card">{cardAttr3}</h5>
            </span>) : null }
        </div>
        <div className="flex-row-around gap-3">
          <h4 data-testid="rare-card" className={ cardRare }>{ cardRare }</h4>
          { cardTrunfo ? (
            <h3 data-testid="trunfo-card" className="trunfo">Super Trunfo</h3>) : null }
        </div>
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
