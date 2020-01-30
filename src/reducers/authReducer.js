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
    GET_PROFILE,
    GET_USERS_LIST,
    AUTHENTICATED,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: {
        "id": 2,
        "username": "ali",
        "email": "",
        "profile": {
            "bio": "or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter",
            "image": null
        }
    },
    profile: {
        "id": 2,
        "username": "ali",
        "email": "",
        "profile": {
            "bio": "or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter",
            "image": null
        }
    },
    users: [
        { id: 1, username: 'ali', email: 'ali@gmail.com', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image_url: '', followings: [], followers: [] },
        { id: 2, username: 'ahmad', email: 'ahmad@gmail.com', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 3, username: 'sadegh', email: 'sadegh@gmail.com', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 4, username: 'reza', email: 'reza@gmail.com', bio: 'aaaa', image_url: '', followings: [], followers: [] },
        { id: 5, username: 'mohammad', email: 'mohammad@gmail.com', bio: 'mmmmm', image_url: '', followings: [], followers: [] },
    ]
};


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
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case GET_USERS_LIST:
            return {
                ...state,
                users: action.payload
            }
        case AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
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
