import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeResults extends Component {  
  renderTable(page){    
    return (
      <div className = 'results'>      
      <table className = 'results-table results-table--active'>
        <thead>
        <tr>
            <th> Pokemons </th>            
        </tr>
        </thead>
        <tbody>          
          {page.map((poke, i) => {
            let link = `/pokemon/${poke.name}`
            return (
              <tr key = {i}>
                <td onClick = {() => this.props.searchPoke(poke.name)}> 
                  <Link to = { link }>{poke.name}</Link>
                </td>
              </tr>
          )
          })
          }
        </tbody>
      </table>
    </div>
    )
  }

  renderEmpty(){
    return (
      <div className = 'results'>
        <table className = 'results-table'></table>
      </div> 
    )
  }

    render() {
      const { search, currentPage } = this.props;  
      return (
        (search.length > 0) ? this.renderTable(search[currentPage]) : this.renderEmpty()
      )
    }
}


function mapStateToProps(store) {
  return {
    search: store.homeForm.search,
    currentPage: store.homeForm.currentPage
  }
}

export default connect(mapStateToProps)(HomeResults)