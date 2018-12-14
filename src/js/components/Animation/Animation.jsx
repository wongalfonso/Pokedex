import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokeBall from '../../../../public/images/pokeBall.png';
import backgroundVid from './../../../../public/video/pokemonAnimation.mp4';


class Animation extends Component {

  componentDidMount() {

  }

  ComponentDidUnmount() {

  }
  render() {
    return (
      <div className = 'animation'>
        <video id='homeVid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>  
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