import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../components/App';

// This takes in the redux store and returns the data the component needs
export function mapStateToProps(store: any) {
    return {
       isLoggedIn: store.authentication.isLoggedIn
    }
}

// Maps the actions to property names
export function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);