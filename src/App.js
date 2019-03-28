import React, { Component } from 'react';
import JumbotronContainer from './Components/JumbotronContainer'
import InfoContainer from './Components/InfoContainer'
import PortfolioContainer from './Components/PortfolioContainer'
import PortfolioItems from './Components/PortfolioItems'
import Contact from './Components/Contact'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  render() {
    return (
      <div className="App">
        <JumbotronContainer/>
        <InfoContainer/>
        <PortfolioContainer/>
        <PortfolioItems/>
        <Contact/>
      </div>
    );
  }
}

export default App;