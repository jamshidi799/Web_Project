import { returnErrors } from "./messages";

import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    EDIT,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    GET_USERS_LIST,
    GET_PROFILE,
    FOLLOW,
    UNFOLLOW,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    AUTHENTICATED,
} from "./types";
import axios from "axios";


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    axios
        .get("http://localhost:8000/api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};


// LOGIN USER
export const login = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body
    const body = JSON.stringify({ username, password });

    axios
        .post("http://localhost:8000/api/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// REGISTER USER
export const register = ({ username, email, password, profile }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({ username, email, password, profile });

    axios
        .post("http://localhost:8000/api/auth/register", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
        .post("http://localhost:8000/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};

export const authenticate = () => dispatch => dispatch({ type: AUTHENTICATED })

// EDIT PROFILE
export const edit = (editedUser) => (dispatch, getState) => {
    axios.put(`http://localhost:8000/api/user/${getState().auth.user.username}`, editedUser)
        .then(res => {
            return dispatch({
                type: EDIT,
                payload: res.data
            })
        })

};

// GET USER NAMES LIST
export const getUsersList = () => (dispatch) => {
    axios.get('http://localhost:8000/api/auth/profile')
        .then(res => {
            return dispatch({
                type: GET_USERS_LIST,
                payload: res.data
            })
        })
};

// GET PROFILE
export const getProfile = (username) => (dispatch) => {
    axios.get(`http://localhost:8000/api/auth/profile/${username}`)
        .then(res => {
            return dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })

};

// FOLLOW
export const follow = ({ creator, following }) => (dispatch) => {
    axios.post(`http://localhost:8000/api/auth/connection`, { creator, following })
        .then(res => {
            return dispatch({
                type: FOLLOW,
                payload: res.data
            })
        })
};

// UN FOLLOW
export const unfollow = ({ creator, following }) => (dispatch) => {
    axios.delete(`http://localhost:8000/api/auth/connection/${creator}/${following}`)
        .then(res => {
            return dispatch({
                type: UNFOLLOW,
                payload: creator
            })
        })
};
