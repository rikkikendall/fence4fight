import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core/';
import logo from './FFlogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="App-header">
        <img src= {logo}
        width="100"
        height="120"/>
        <Typography variant="h5"> Created by Rikki Kendall & <br /> Thea Dowrich </Typography>
        <br />
      </footer>
    );
  }
}

export default Footer;

export {
  Footer,
};
