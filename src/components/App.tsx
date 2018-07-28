import { createStyles, CssBaseline, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
}

class App extends React.Component<Props> {
  constructor(props: Props){
    super(props)
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signip' component={SignUp} />
            <PrivateRoute path='/checkout' component={Checkout} isLoggedIn={this.props.isLoggedIn}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

