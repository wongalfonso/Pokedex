import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchPokemon } from './HomeFormActions';

class HomeForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit = { handleSubmit }>
        <Field name = 'pokemon.name' component = 'input'/>
        <input type = 'submit' value = 'Search'/>
      </form>
    )
  }
}

const homeReduxForm = reduxForm({
  form: 'homeForm',
})(HomeForm);

export default connect(
  dispatch => ({
    onSubmit: data => dispatch(searchPokemon(data))
  })
)(homeReduxForm);
