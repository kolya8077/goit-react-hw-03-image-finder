import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/searchbar.style.jsx';

class Searchbars extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <MdSearch size={30} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="search"
            autocomplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default Searchbars;
