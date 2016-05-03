import React, { Component, PropTypes } from 'react'
// import style from './App.scss'
// import {Header, Slider} from '../components'

export default class Containers extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    // const styles = require('./App.scss');
    return (
      <div className='home'>
        <div className='wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}