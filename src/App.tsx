import { Button, createStyles, Grid, Paper, TextField, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';

const styles = (theme: Theme) => createStyles({
  buttonContainer: {
    flexGrow: 1,
    'margin-top': '48px'
  },
  paper: {
    [theme.breakpoints.up("sm")]: {
      'margin': '0 auto',
      'max-width': '640px',
      'padding': '48px 48px 32px',
      'position': 'relative',
      'top': '100px',
    },
    [theme.breakpoints.down("xs")]: {
      "border-radius": 0,
      "margin": 0,
      "min-height": "100%",
      "padding": " 48px 16px 16px",
      'top': 0,
    }
  },
  textField: {
    'width': '100%'
  },
});

interface Props extends WithStyles<typeof styles> { }

class App extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <CSSBaseline />
        <Paper elevation={14} className={classes.paper}>
          <Typography variant="display1" gutterBottom={true} align="center">
            Fencing Ireland Membership
          </Typography>
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            margin="normal"
            type="password"
          />
          <Grid container={true} justify="space-between" className={classes.buttonContainer} >
            <Grid item={true}><Button variant="flat">Forgot Password</Button></Grid>
            <Grid item={true}><Button variant="contained" color="primary">Login</Button></Grid>
          </Grid>

        </Paper>




      </div>
    );
  }
}

export default withStyles(styles)(App);

