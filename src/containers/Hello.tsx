import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/';
import Hello from '../components/Hello';
import { StoreState } from '../types/index';

// This takes in the redux store and returns the data the component needs
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

// Maps the actions to property names
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);