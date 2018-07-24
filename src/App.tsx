import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
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
        <Router>
          <div>
            <Redirect from="/" to="/login"/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

