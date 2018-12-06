import React, { Component } from 'react';

export default class HomeForm extends Component {

  render() {
    const { submit, input, all } = this.props;
    return (
    <form onSubmit={ submit } className = 'home-form-group'>
      <label> Search all Pokemon</label>    
        <button onClick = {all}
                className = 'input-group-button-all'                >
          Catch Em All
        </button>
    </form>
    )
  }
}



