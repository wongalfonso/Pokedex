import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeResults extends Component {
  HomeResults() {
    return (
      <div>      
      <table>
        <tbody>
          <tr>
            <td> Name </td>
            <td> Link </td>
          </tr>
          {search.map((poke, i) => {
            return (
              <tr key = {i}>
                <td>{poke.name}</td>
                <td>{poke.url}</td>
              </tr>
          )
          })}
        </tbody>
      </table>
    </div>
    )
  }

  renderEmpty() {
    return (
      <div>
      </div> 
    )
  }

  render() {
    const { search } = this.props;    
    return (
      (search.length < 0) ? this.renderTable() : this.renderEmpty()
    )
  }
}


function mapStateToProps(store) {
  return {
    search: store.homeForm.search
  }
}

export default connect(mapStateToProps)(HomeResults)