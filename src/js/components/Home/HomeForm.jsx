import React, { Component } from 'react';

export default class HomeForm extends Component {

  renderButton() {
    const { input } = this.props;    
    if (input.length < 0) {
      return (
        <button className = 'input-group-button input-group-button-active' 
                type = 'submit'>
          Search
        </button>
      )
    } else {
      return (
        <button   className = 'input-group-button input-group-button-disabled'
          disabled>
          Search
        </button>
      )
    }
  }


  render() {
    const { submit, input, all } = this.props;
    return (
    <form onSubmit={ submit } className = 'home-form-group'>
      <label> Search a Pokemon</label>
      <div className = 'input-group'>
        <input  className = 'input-group-input'             
                onChange = { input }
                placeholder = 'Enter Pokemon Here'
                type = 'text'
        />
        {this.renderButton()}
      </div>
        <button onClick = {all}
                className = 'input-group-button-all'                >
          Search All
        </button>
    </form>
    )
  }
}



