import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Checkout from '../components/Checkout';
import { Logout } from '../redux/modules/authentication'; 

// This takes in the redux store and returns the data the component needs
export function mapStateToProps(store: any) {
    return {}
}

// Maps the actions to property names
export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        logout: () => dispatch(Logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);