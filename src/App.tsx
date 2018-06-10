import { createStyles, Grid, Paper, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';

const styles = (theme: Theme) => createStyles({
  paper: {
    width: 1280
  },
});

interface Props extends WithStyles<typeof styles> {}

class App extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <CSSBaseline />
        <Grid container={true} alignItems='center' direction='row' justify='center'>
          <Paper elevation={4} className={classes.paper}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

