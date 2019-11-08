import React, { Component } from 'react';
import './App.css';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';
// import Components
import { Information } from './Components/Information';
import { AnimatedNumber } from './Components/AnimatedNumber';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import { AppLogo } from './Components/AppLogo';
// Responsive
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Information />
        <Footer />
      </div>
    );
  }
}

export default App;
