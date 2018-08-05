export const AUTH__LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE';
export type AUTH__LOGIN_WITH_GOOGLE = typeof AUTH__LOGIN_WITH_GOOGLE;

export type AuthenticationAction = LoginWithGoogle

const initialAuthenticationState = { isLoggedIn: false };

export default function authentication(state = initialAuthenticationState, action: AuthenticationAction) {
    switch (action.type) {
        case AUTH__LOGIN_WITH_GOOGLE:
            return {
                ...state,
                isLoggedIn: true
            };
        // case LOGIN_SUCCESS:
        //     return {
        //         loggedIn: true,
        //         user: action.user
        //     };
        // case LOGIN_FAILURE:
        //     return {};
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