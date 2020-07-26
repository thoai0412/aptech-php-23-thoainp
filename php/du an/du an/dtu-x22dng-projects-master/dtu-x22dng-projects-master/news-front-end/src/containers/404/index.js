import React, { Component } from 'react';
import logo from '../../assets/images/crashzone-logo.svg';
import './styles.css';

class index extends Component {
  render() {
    return (
      <div className="Not-Found-Page">
        <header className="Not-Found-Page-header">
          <img src={logo} className="Not-Found-Page-logo" alt="logo" />
          <h1 className="Not-Found-Page-title">Welcome to Crashzone</h1>
        </header>
        <p className="Not-Found-Page-intro">
          <code>404 page</code>
        </p>
      </div>
    );
  }
}

export default index;
