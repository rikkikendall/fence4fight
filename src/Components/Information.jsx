import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Paper, Card, LinearProgress, Grid } from '@material-ui/core/';
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
          Join Duke Fencing
          </Typography>
          <Typography variant="h2" component="h3">
          As we Fence for the Fight
          </Typography>
          <AppLogo />
          <Typography variant="h2" component="h3">
          Against Breast Cancer!
          </Typography>
          <br />
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
          <Typography variant="h3" component="h5">
            Breast Cancer Affects Everyone
          </Typography>
            <br />
            <Typography variant="h5" component="h3">
              Almost all of us have a
              <br />
              family member, a friend, or a colleague
              <br />
              who has or is fighting this awful disease.
              <br />
              And while progress has been made, we still have a
              <br />
              long way to go in curing and caring for those who are stricken
              <br />
              For the Duke Fencing Family, this disease has struck very close to home.
              <br />
              Our own Elizabeth Beguinet is carrying on her own fight right now.  Elizabeth, the wife of our head coach Alex,
              <br />
              is not just our recruiting coordinator, or travel coordinator, or seamstress for our uniforms.
              <br />
              She’s been our confidant, our coach, our on-campus mom, and our family for 34 years.
              <br />
              And when a member of our family fights, we all fight.
              <br />
              <br />
            </Typography>
            <Donors />
            <br />
            <Card style={{ background: '#C84E00' }}>
              <br />
              <Typography variant="h5" component="h3"> Total raised in the 2019-2020 season to date:
              </Typography>
              <br />
              <Typography variant="h2"> $0.00 </Typography>
              <br/>
              <LinearProgress color="secondary" />
              <br />
            </Card>
            <br />
            <img src= { fencinglogo }
              width="300"
              height="300"/>
            <br />
            </Paper>
            <Card style={{ background: '' }}>
              <br />
              <div>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h4">
                      We want your help in Elizabeth Beguinet's fight against breast cancer.
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="subtitle1" color="textSecondary">
                Please support both Elizabeth and Duke Fencing by partnering with us
                and the Duke Cancer Institute by making a pledge to fight Breast Cancer.
                <br />
                </Typography>
                <br />
              </div>
              <br />
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
