import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokeBall from '../../../../public/images/pokeBall.png';


class Animation extends Component {

  componentDidMount() {

  }

  ComponentDidUnmount() {

  }
  render() {
    return (
      <div className = 'animation'>
        <div className="pokeBall-container container">
          <img src = { pokeBall } className = 'pokemon-ball' />
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps)(Animation);