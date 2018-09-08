export const AUTH__LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE';
export type AUTH__LOGIN_WITH_GOOGLE = typeof AUTH__LOGIN_WITH_GOOGLE;

export const AUTH__LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type AUTH__LOGIN_SUCCESS = typeof AUTH__LOGIN_SUCCESS;

export const AUTH__LOGIN_FAILURE = 'LOGIN_FAILURE';
export type AUTH__LOGIN_FAILURE = typeof AUTH__LOGIN_FAILURE;

export const AUTH__LOGOUT = 'LOGOUT';
export type AUTH__LOGOUT = typeof AUTH__LOGOUT;

export const AUTH__LOGOUT_SUCCESS = 'AUTH__LOGOUT_SUCCESS';
export type AUTH__LOGOUT_SUCCESS = typeof AUTH__LOGOUT_SUCCESS;

export const AUTH__LOGOUT_FAILURE = 'AUTH__LOGOUT_FAILURE';
export type AUTH__LOGOUT_FAILURE = typeof AUTH__LOGOUT_FAILURE;

export type AuthenticationAction = LoginWithGoogle | LoginSuccess | LoginFailure | Logout | LogoutSuccess | LogoutFailure 

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
        case AUTH__LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case AUTH__LOGOUT_SUCCESS:
            return { ...state };
        case AUTH__LOGOUT_FAILURE:
            return { ...state };
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

export interface Logout { type: AUTH__LOGOUT; }
export function Logout(): Logout {
    return {
        type: AUTH__LOGOUT
    }
}

export interface LogoutSuccess { type: AUTH__LOGOUT_SUCCESS; }
export function LogoutSuccess(): LogoutSuccess {
    return {
        type: AUTH__LOGOUT_SUCCESS
    }
}

export interface LogoutFailure { type: AUTH__LOGOUT_FAILURE; }
export function LogoutFailure(): LogoutFailure {
    return {
        type: AUTH__LOGOUT_FAILURE
    }
}