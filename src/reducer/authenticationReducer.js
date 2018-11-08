import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                loggedIn: false,
                user: action.user
            };
        // return Object.assign({}, state, {
        //     loggingIn: true,
        //     loggedIn: false,
        //     user: action.user
        // });

        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                user: action.user
            };
        // return Object.assign({}, state, {
        //     loggingIn: false,
        //     loggedIn: true,
        //     user: action.user
        // });
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
};



export default authenticationReducer;