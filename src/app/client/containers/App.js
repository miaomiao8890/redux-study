import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="admin-wrap">
          {this.props.children}
        </div>
      </div>
    )
  }
}