import { createStyles, CssBaseline, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Redirect, Route, Router, Switch} from "react-router-dom";
import Checkout from '../containers/Checkout';
import Login from '../containers/Login';
import {history} from '../redux/store';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';

const styles = () => createStyles({
  wrapper: {
    height: '100%'
  },
});

interface Props extends WithStyles<typeof styles> {
  isLoggedIn: boolean;
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path='/checkout' component={Checkout} isLoggedIn={this.props.isLoggedIn} />
          <Redirect to='/login' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

