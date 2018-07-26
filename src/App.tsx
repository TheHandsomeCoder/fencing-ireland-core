import { createStyles, CssBaseline, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Hello from './containers/Hello'

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
        <CssBaseline />
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signip' component={SignUp} />
            <Route path='/hello' component={Hello} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

