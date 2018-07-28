import { combineReducers } from 'redux';
import { LoginWithGoogle } from '../actions';
import { LOGIN_WITH_GOOGLE } from '../constants';
import { StoreState } from '../types';

// export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
//     switch (action.type) {
//         case INCREMENT_ENTHUSIASM:
//             // returns a shallow copy of state with the enthusiam level incremented by 1
//             return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//         case DECREMENT_ENTHUSIASM:
//             // returns a shallow copy of state with the enthusiam level decremented by 1
//             return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//     }
//     return state;
// }

// https://github.com/sotojuan/saga-login-flow

// https://github.com/erikras/ducks-modular-redux
// https://github.com/supnate/rekit
// https://github.com/evgenyrodionov/redux-logger

export function loginWithGoogle(/*? state.loginWithGoogle */state: StoreState = { isLoggedIn: false }, action: LoginWithGoogle): StoreState {
    switch (action.type) {
        case LOGIN_WITH_GOOGLE:
            return { ...state, isLoggedIn: true }
    }
    return state;
}

const rootReducer = combineReducers({ FEATURE, loginWithGoogle })
export default rootReducer;