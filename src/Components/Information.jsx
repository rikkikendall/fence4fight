import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Paper, Card, LinearProgress } from '@material-ui/core/';
// Video React Components
import ReactPlayer from 'react-player'
// Logos
import fencinglogo from './fencinglogo.jpg';
import softballlogo from './DukeSoftballLogo.jpg';
// import Components
import { DonorStepper } from './DonorStepper';
import { Donors } from './Donors';
import { DonationForm } from './DonationForm';
import { AppLogo } from './AppLogo';
// Responsive
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class Information extends Component {
  render() {
    return (
      <div className="App">
        <Paper elevation={3} rounded="true">
          <br />
          <Typography variant="h2" component="h3">
          Join Duke Fencing as we Fence for the Fight against Breast Cancer
          </Typography>
          <AppLogo />
          <Typography variant="h6" component="h3">
            Breast Cancer Affects Everyone
          </Typography>
          <Typography variant="h5" component="h2">
            Show your support by pledging funds for the fencing team!
          </Typography>
          <br />
          <Desktop>
            <div align="center">
              <Card>
              <ReactPlayer url='https://www.facebook.com/BlueDevilNetwork/videos/1543084839105715/' playing />
              <br />
              </Card>
            </div>
          </Desktop>
          <Paper>
            <Card>
            <br />
            <Typography variant="display1" component="h3">
              Help the Duke Baseball and Softball teams <br /> strikeout pediatric cancer by joining our team.
            </Typography>
            <br />
            <img src= { fencinglogo }
              width="400"
              height="400"/>
            <Card style={{ background: '#C84E00' }}>
              <br />
              <Typography variant="h5" component="h3"> Total raised in the 2018-2019 season to date:
              </Typography>
              <br />
              <Typography variant="h2"> $17,821.75  </Typography>
              <br/>
              <LinearProgress color="secondary" />
              <br />
            </Card>
            <br />
            </Card>
            </Paper>
            <Card style={{ background: '' }}>
              <br />
              <Typography variant="h5" component="h3">
                Make a pledge for every strikeout Duke pitchers rack up this season.
                <br />
                All funds go directly
                to support cancer research and patient care at Duke Children’s.
                <br />
                By filling out the form below, you can choose the level of your pledge or you can make a one-time donation.
                <br />
                Last season we threw 575 strikeouts in baseball and 262 in softball (95 in March).
                <br />
                We’re planning to make more this year to help the kids!
                <br />
                <br />
              </Typography>
              <DonationForm />
              <br />
            </Card>
        </Paper>
      </div>
    );
  }
}

export default Information;

export {
  Information,
};
