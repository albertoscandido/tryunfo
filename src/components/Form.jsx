import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  // constructor(props) {
  //   super();

  //   this.state = {};

  // }

  render() {
    return (
      <>
        <Input type="text" testid="name-input" />
        <Input type="textarea" testid="description-input" />
        <Input type="number" testid="attr1-input" />
        <Input type="number" testid="attr2-input" />
        <Input type="number" testid="attr3-input" />
        <Input type="text " testid="image-input" />
        <Select options={ ['normal', 'raro', 'muito raro'] } testid="rare-input" />
        <Checkbox options={ ['Sim'] } testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </>
    );
  }
}
