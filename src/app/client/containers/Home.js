import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Content from '../components/content';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navName = 'dashboard';
    const contentHeader = {
      title: 'Dashboard',
      breadcrumb: ['Home']
    }
    return (
      <div>
        <Header />
        <Navbar navName={navName} />
        <Content contentHeader={contentHeader} />
      </div>
    )
  }
}

export default Home;