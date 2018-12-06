import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeForm from './HomeForm';
import HomeResults from '../HomeResults';
import Pagination from './Pagination';
import { searchPokemon, updateInput, searchAllPokemon, changePage } from './HomeActions';
import Pikachu from '../../../../public/images/Pikachu.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAll = this.searchAll.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  handleInput(e) {    
    const value = e.target.value;
    const { dispatch } = this.props;
    dispatch(updateInput(value));
  }

  handleSubmit(e) {
    e.preventDefault();
    // const { dispatch, input } = this.props;
    // dispatch(searchPokemon(input));
  }
  searchAll(e) {
    e.preventDefault();
    const { dispatch} = this.props;
    dispatch(searchAllPokemon());
  }

  updatePage(number) {
    
    const { dispatch, currentPage, searchLength } = this.props;    
    if (number == '>') {
      dispatch(changePage(currentPage + 1))
    } else if (number == '<') {
      dispatch(changePage(currentPage - 1))
    } else if (number == searchLength.length) {
      dispatch(changePage(number));
    } else {
      dispatch(changePage(number - 1));
    }
  }
  render() {
    const { currentPage } = this.props;
    console.log(currentPage);
    return (
      <div className="container home-container">
        <div className="home">
          <div className="home-header">
            Welcome to the Online Pokemon Database
          </div>          
          <div className="home-form">
            <div className="home-form-image">
              <img src = { Pikachu }/>
            </div>
            <HomeForm
              input = {this.handleInput}
              submit = {this.handleSubmit}
              all = {this.searchAll }
            />            
          </div>
          <Pagination
            updatePage = { this.updatePage }
          />
          <HomeResults/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {  
  return {
    input: store.homeForm.input, 
    currentPage: store.homeForm.currentPage,
    searchLength: store.homeForm.searchLength,    
  }
}

export default connect(mapStateToProps)(Home);