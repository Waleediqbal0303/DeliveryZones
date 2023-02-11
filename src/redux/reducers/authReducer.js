import {  SET_SIGNIN, SET_SIGNOUT } from '../declarationTypes/authDecleration';
const initialState = {
    auth: {
        isSignedIn: false,
    }
}

const AuthReducer = (state = initialState, action) => {

    let data = { ...state };
    const { payload } = action;
    switch (action.type) {
        case SET_SIGNIN:
            data['auth'] = {
                ...data.auth,
                isSignedIn: true,
            };
            break;
        case SET_SIGNOUT:
            data['auth'] = {
                ...data.auth,
                isSignedIn: false,
            };
            break;
        default:
            return state;
    }

    return data;
};


export default AuthReducer;