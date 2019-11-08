import React, { Component } from 'react';
import logo from './FFlogo.png';
// Material UI Components
import { Card } from '@material-ui/core/';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class AppLogo extends Component {
  render() {
    return (
      <div>
        <Card className="Logo">
        <Desktop>
          <img src= {logo}
          width="350"
          height="400" />
          </Desktop>
          <Mobile>
          <img src= {logo}
          width="110"
          height="120" />
          </Mobile>
        </Card>
      </div>
    );
  }
}

export default AppLogo;

export {
  AppLogo,
};
