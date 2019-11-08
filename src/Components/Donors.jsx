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
        Pledgers will receive updates on the team's progress each week
        <br /> and an invoice for your pledge payment
        at the conclusion of the <br />  season issued by Duke Children’s Hospital.
        </Typography>
        <br />
      </div>
      <div>
        <Typography gutterBottom variant="h5">
          You can make a pledge of:
        </Typography>
        <div>
          <Chip label="$0.25" />
          <Chip label="$0.50" />
          <Chip label="$1.00" />
          <Chip label="$1.50" />
          <Chip label="$2.00" />
          <Chip label="$2.50" />
        </div>
        <br />
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          Or make a custom pledge or a one time donation.
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
