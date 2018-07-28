import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../components/App';
import { StoreState } from '../types';

// This takes in the redux store and returns the data the component needs
export function mapStateToProps(store: StoreState) {
    return {
       isLoggedIn: store.isLoggedIn
    }
}

// Maps the actions to property names
export function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);