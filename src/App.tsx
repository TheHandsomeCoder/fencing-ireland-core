import { createStyles, Paper, TextField, Theme, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';

const styles = (theme: Theme) => createStyles({
  paper: {
    'margin': '0 auto',
    'max-width': '640px',
    'padding': '48px 48px 32px',
    'position': 'relative',
    'top': '100px',
  },
  textField:{
   'width': '100%'
  }
});

interface Props extends WithStyles<typeof styles> { }

class App extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <CSSBaseline />

        <Paper elevation={14} className={classes.paper}>
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
        </Paper>

      </div>
    );
  }
}

export default withStyles(styles)(App);

