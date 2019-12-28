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
    users: [
        { id: '1', username: 'ali', email: 'ali@gmail.com', password: '1234', bio: '', image_url: '', },
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        default:
            return state;
    }
}
