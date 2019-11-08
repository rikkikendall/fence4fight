import React, { Component } from 'react';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Toolbar, Button } from '@material-ui/core/';
import Responsive from 'react-responsive';
import logo from './FFlogo.png';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: '#262626' }}>
          <Toolbar>
          <Grid container spacing={10}>
            <Grid item xs>
              <Desktop>
              <img src= {logo}
              width="90"
              height="100" />
              </Desktop>
              <Mobile>
                <img src="http://d9hhrg4mnvzow.cloudfront.net/www.bluedevilsbirdiesforbabies.org/99ba4b3c-white-duke-cmn-double-logo_0go03y0go03y000000.png"
                width="350"
                height="90" />
              </Mobile>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Desktop>
            <Grid item xs>
                <br />
                <br />
                <a  href="mailto:george.grody@duke.edu">
                  <Button
                    variant="outlined"
                    color="secondary"
                  >
                    Contact Us
                  </Button>
                  </a>
            </Grid>
            </Desktop>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

export {
  NavBar,
};
