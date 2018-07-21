import React, { Component } from 'react';
// import './app.css';
import Card from './components/Card'

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }

  render() {
    return (
      <div>
          <h1>Keepers Market</h1>
          <Card/>
      </div>
    );
  }
}
