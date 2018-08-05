import { createStyles, CssBaseline, Theme, WithStyles, withStyles } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history'
import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../containers/Login';
import Checkout from './Checkout';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';

const styles = (theme: Theme) => createStyles({
  wrapper: {
    height: '100%'
  },
});

interface Props extends WithStyles<typeof styles> {
  isLoggedIn: boolean;
  history: History;
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
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signip' component={SignUp} />
            <PrivateRoute path='/checkout' component={Checkout} isLoggedIn={this.props.isLoggedIn} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);

