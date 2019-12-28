import {
    REGISTER,
    LOGIN,
    LOGOUT,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    users: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            console.log('reducer: register', action)
            return state
        case LOGIN:
            console.log('reducer: login', action)
            return state
        default:
            return state;
    }
}
