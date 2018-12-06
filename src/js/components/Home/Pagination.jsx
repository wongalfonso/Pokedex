import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pagination extends Component {

  renderEmpty() {
    return (
      <div className = 'pagination pagination-empty'>        
      </div>
    )
  }
  renderPag() {
    const { searchLength, currentPage } = this.props;
    console.log(currentPage);
    return (
      <div className = 'pagination pagination-active'>
        <ul className = 'pagination-ul'>         
          {currentPage == '1' ? 
            <li className = 'pagination-ul-li '>
              <a className = 'first'>{ '<' }</a>
            </li> : 
            <li className = 'pagination-ul-li pagination-ul-li-active'>
              <a className = 'first'
                  onClick = {}>
                { '<' }
              </a></li>
          }       
          {currentPage == '1' ? 
            <li className = 'pagination-ul-li '>
              <a>{ currentPage }</a>
            </li> : 
            <li className = 'pagination-ul-li pagination-ul-li-active'>
              <a>{ currentPage }</a>
            </li>
          }             
          <li className = 'pagination-ul-li pagination-ul-li-active'>
            <a>{currentPage + 1}</a>
          </li>
          <li className = 'pagination-ul-li pagination-ul-li-active'>
            <a>{currentPage + 2}</a>
          </li>
          <li className = 'pagination-ul-li '>
            <a disabled>...</a>
          </li>
          <li className = 'pagination-ul-li pagination-ul-li-active'>
            <a>{searchLength.length}</a>
          </li>
          {(currentPage == searchLength.length) ? 
            <li className = 'pagination-ul-li'>
              <a className = 'last'> { '>' } </a>
            </li> :
            <li className = 'pagination-ul-li   pagination-ul-li-active'>
            <a className = 'last'> { '>' } </a>
          </li>
          
        }
        </ul>
      </div>
    )
  }
  render() {
    return (
      (this.props.searchLength.length > 0) ? this.renderPag() : this.renderEmpty()
    )
  }
}

function mapStateToProps(store) {
  return {    
    searchLength: store.homeForm.searchLength,
    currentPage: store.homeForm.currentPage
  }
}

export default connect(mapStateToProps)(Pagination)