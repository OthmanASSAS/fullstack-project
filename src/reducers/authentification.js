import { SET_AUTHENTIFICATION } from "../actions/action-types";

const initialState = {
    isLoggedIn: false
};

const AuthentificationReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case SET_AUTHENTIFICATION:
            return {
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default AuthentificationReducer;
