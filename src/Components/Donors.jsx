import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class Donors extends Component {
  render () {
  return (
    <Card>
    <br />
    <div>
      <div>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Make your pledge in our form below:
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" color="textSecondary">
        Your pledges will be totaled at the end of the season and
        <br /> you will be notified then of your pledge total by
        <br /> Duke Cancer Development to make payment.
        </Typography>
        <br />
      </div>
      <div>
        <Typography gutterBottom variant="h5">
          You can make a pledge of:
        </Typography>
        <div>
          <Chip label="$0.10" />
          <Chip label="$0.25" />
          <Chip label="$0.50" />
          <Chip label="$1.00" />
          <Chip label="$1.75" />
          <Chip label="$2.50" />
        </div>
        <br />
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          Or make a custom pledge or a one time donation.
          <br />
          All money raised goes directly to the Duke Cancer Institute (DCI) and is fully tax deductible; you will receive a receipt from the DCI.
          <br />
        </Typography>
        <br />
        <Typography gutterBottom variant="h6">
          For Duke Fencing Alums, we will track pledges by your graduation class.
          <br /> The graduation class with the highest donation total will be honored with a plaque prominently placed in the fencing gym.
        </Typography>
      </div>
    </div>
    <br />
    </Card>
  );
}
}

export default Donors;

export {
  Donors
};
