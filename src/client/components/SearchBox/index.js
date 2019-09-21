import React from 'react';
// import { browserRouter } from 'react-router';
import logoML from '../../../assets/Logo_ML.png';
import searchIcon from '../../../assets/ic_Search.png';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.searchItems = this.searchItems.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    this.searchItems();
  }

  onKeyDown(e) {
    if (e.keyCode == 13) {
      this.searchItems();
    }
  }

  searchItems() {
    const query = document.querySelector('.search__input').value;
    window.location = `/items?q=${query}`;
    //  history.push(`/items?q=${query}`);
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <img
            src={logoML}
            className="header__logo"
            alt="logo Mercado Libre"
          />
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Nunca dejes de buscar"
              onKeyDown={this.onKeyDown}
            />
            <button type="submit" className="search__button" onClick={this.onClickHandler}>
              <img src={searchIcon} alt="Boton buscar" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
