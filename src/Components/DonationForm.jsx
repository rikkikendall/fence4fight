import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Card, Button } from '@material-ui/core/';
// Responsive
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class DonationForm extends Component {
  render() {
    return (
      <div className="form">
        <Desktop>
        <Card color="#001A57">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScOalp1mde3xF_ktek4bWIT1_A21zK6eGjz9AB_2ttan5KX_A/viewform?embedded=true"
            width="640" height="2286" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <br />
          <br />
        </Card>
        </Desktop>
        <Mobile>
          <Card>
          <br />
          <Button
              variant="contained"
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScOalp1mde3xF_ktek4bWIT1_A21zK6eGjz9AB_2ttan5KX_A/viewform?embedded=true"> Click Here to Donate! </Button>
          <br />
          <br />
          </Card>
        </Mobile>
      </div>
    );
  }
}

export default DonationForm;

export {
  DonationForm,
};
