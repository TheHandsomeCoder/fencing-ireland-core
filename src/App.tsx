import { createStyles, CssBaseline, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import firebase from './helpers/firebase';

const styles = (theme: Theme) => createStyles({
  wrapper: {
    height: '100%'
  },
});

interface Props extends WithStyles<typeof styles> { }

class App extends React.Component<Props, { isLoggedIn: boolean }> {

  constructor(props: Props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  public componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const isLoggedIn = user ? true : false;
      this.setState({ isLoggedIn })

    })
  }

  public login = (props: any) => <Login {...props} />

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/login" render={this.login(props)} isAuthenticated={this.state.isLoggedIn} />
            <Route path="/signup" component={ SignUp }/>
            <PrivateRoute path="/checkout" component={Checkout} isAuthenticated={this.state.isLoggedIn} />
            <Redirect exact={true} to='/login' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

