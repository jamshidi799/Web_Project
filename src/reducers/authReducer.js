import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
    EDIT,
    FOLLOW,
    UNFOLLOW,
    USER_LOADED,
    USER_LOADING,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: { id: 1, username: 'ali', email: 'ali@gmail.com', password: '1234', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image_url: '', followings: [], followers: [] },
    users: [
        { id: 1, username: 'ali', email: 'ali@gmail.com', password: '1234', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image_url: '', followings: [], followers: [] },
        { id: 2, username: 'ahmad', email: 'ahmad@gmail.com', password: '1234', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 3, username: 'sadegh', email: 'sadegh@gmail.com', password: '1234', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 4, username: 'reza', email: 'reza@gmail.com', password: '1234', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 5, username: 'mohammad', email: 'mohammad@gmail.com', password: '1234', bio: 'mmmmm', image_url: '', followings: [], followers: [] },
    ]
};

// function flatUser(item) {
//     return {
//         ...item.user,
//         bio: item.bio,
//         followings: [],
//         followers: [],
//     }
// }

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        case EDIT:
            const newList = state.users.map(user => {
                if (user.id === action.payload.id)
                    return action.payload
                return user
            })
            return {
                ...state,
                user: action.payload,
                users: newList
            }
        case FOLLOW:
            const addToFollowing = { ...state.user, followings: [...state.user.followings, action.payload] }
            const newUsersList = state.users.map(user => {
                if (user.id === addToFollowing.id)
                    return addToFollowing
                else if (user.id === action.payload)
                    return { ...user, followers: [...user.followers, state.user.id] }
                return user
            })
            return {
                ...state,
                user: addToFollowing,
                users: newUsersList
            }
        case UNFOLLOW:
            const newUser = { ...state.user, followings: state.user.followings.filter(followingId => followingId !== action.payload) }
            const newUserList = state.users.map(user => {
                if (user.id === newUser.id)
                    return newUser
                if (user.id === action.payload)
                    return { ...user, followers: user.followers.filter(followerId => followerId !== state.user) }
                return user
            })
            return {
                ...state,
                user: newUser,
                users: newUserList
            }
        default:
            return state;
    }
}
