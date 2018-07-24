import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import CSSBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
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
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/checkout" component={Checkout} />
            <Redirect exact={true} to='/login' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
