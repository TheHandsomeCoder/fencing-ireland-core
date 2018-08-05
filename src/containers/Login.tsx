import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Login from '../components/Login';
import { LoginWithGoogle } from '../redux/modules/authentication';

// This takes in the redux store and returns the data the component needs
export function mapStateToProps(store: any) {
    return {
        isLoggedIn: store.authentication.isLoggedIn
    }
}

// Maps the actions to property names
export function mapDispatchToProps(dispatch: Dispatch<LoginWithGoogle>) {
    return {
        login: () => dispatch(LoginWithGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);