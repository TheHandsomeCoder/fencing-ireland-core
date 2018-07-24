import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import SignUp from './components/SignUp';

const styles = (theme: Theme) => createStyles({
  wrapper: {
    height: '100%'
  },
});

interface Props extends WithStyles<typeof styles> { }

class App extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <CSSBaseline />
        <SignUp/>
      </div>
    );
  }
}

export default withStyles(styles)(App);

