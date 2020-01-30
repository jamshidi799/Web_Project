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
        "id": 21,
        "username": "lucky",
        "email": "",
        "profile": {
            "bio": "hello",
            "image": null
        },
        "creator": [
            {
                "following": 2,
                "creator": 21
            },
            {
                "following": 20,
                "creator": 21
            },
            {
                "following": 25,
                "creator": 21
            }
        ],
        "following": []
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
            return {
                ...state,
                profile: {
                    ...state.profile,
                    following: [...state.profile.following, action.payload]
                }
            }
        case UNFOLLOW:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    following: state.profile.following.filter(connection => connection.creator !== action.payload.creator)
                }
            }
        default:
            return state;
    }
}
