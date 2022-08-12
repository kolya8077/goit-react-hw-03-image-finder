import React, { Component } from 'react';
// import { Api } from './servises/api';
import Searchbars from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    name: '',
    galary: [],
  }

    formSubmitHandler = data => {
    const form = {
      name: data.name,
    };


    this.setState(({ name }) => ({
      name: form,
    }));
  };

  render() {
    console.log(this.state.name);
    return (
      <Searchbars onSubmit={ this.formSubmitHandler } />
    );
  }
}
