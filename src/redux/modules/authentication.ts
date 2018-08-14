export const AUTH__LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE';
export type AUTH__LOGIN_WITH_GOOGLE = typeof AUTH__LOGIN_WITH_GOOGLE;

export const AUTH__LOGIN_SUCCESS = 'LOGIN_SAUTH__LOGIN_SUCCESS';
export type AUTH__LOGIN_SUCCESS = typeof AUTH__LOGIN_SUCCESS;

export const AUTH__LOGIN_FAILURE = 'LOGIN_FAUTH__LOGIN_FAILURE';
export type AUTH__LOGIN_FAILURE = typeof AUTH__LOGIN_FAILURE;

export type AuthenticationAction = LoginWithGoogle | LoginSuccess | LoginFailure

const initialAuthenticationState = { isLoggedIn: false };

export default function authentication(state = initialAuthenticationState, action: AuthenticationAction) {
    switch (action.type) {
        case AUTH__LOGIN_WITH_GOOGLE:
            return {
                ...state,
                isLoggedIn: true
            };
        case AUTH__LOGIN_SUCCESS:
            return { ...state };
        case AUTH__LOGIN_FAILURE:
            return { ...state };
        // case LOGOUT:
        //     return {};
        default:
            return state
    }
}

export interface LoginWithGoogle { type: AUTH__LOGIN_WITH_GOOGLE; }
export function LoginWithGoogle(): LoginWithGoogle {
    return {
        type: AUTH__LOGIN_WITH_GOOGLE
    }
}

export interface LoginSuccess { type: AUTH__LOGIN_SUCCESS; }
export function LoginSuccess(): LoginSuccess {
    return {
        type: AUTH__LOGIN_SUCCESS
    }
}

export interface LoginFailure { type: AUTH__LOGIN_FAILURE; }
export function LoginFailure(): LoginFailure {
    return {
        type: AUTH__LOGIN_FAILURE
    }
}