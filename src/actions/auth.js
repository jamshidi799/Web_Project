import { returnErrors } from "./messages";

import {
    REGISTER,
    LOGIN,
    LOGOUT,
    EDIT,
    LOGIN_FAIL,
    REGISTER_FAIL,
    GET_USERS,
    GET_USER,
    FOLLOW,
    UNFOLLOW,
} from "./types";
import Axios from "axios";

// LOGIN USER
export const login = ({ username, password }) => (dispatch, getState) => {
    const users = getState().auth.users
    const user = users.find(user => user.username === username && user.password === password)
    if (user !== undefined)
        dispatch({
            type: LOGIN,
            payload: user
        })
    else {
        dispatch(returnErrors(LOGIN_FAIL))
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

// REGISTER USER
export const register = (newUser) => (dispatch, getState) => {
    const { users } = getState().auth
    const isUsernameNew = users.every(user => user.username !== newUser.username)

    if (isUsernameNew)
        return dispatch({
            type: REGISTER,
            payload: { id: String(users.length + 1), ...newUser }
        })
    else {
        dispatch(returnErrors(REGISTER_FAIL))
        dispatch({
            type: REGISTER_FAIL
        })
    }
};

// EDIT PROFILE
export const edit = (editedUser) => (dispatch, getState) => {
    return dispatch({
        type: EDIT,
        payload: { ...editedUser }
    })
};

// LOGOUT USER
export const logout = () => (dispatch) => {
    return dispatch({
        type: LOGOUT,
    })
};

// GET USERS
export const getUsers = () => (dispatch) => {
    Axios.get('http://localhost:8000/api/user/')
        .then(res => {
            return dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })

};

// GET USER
export const getUser = (username) => (dispatch) => {
    Axios.get(`http://localhost:8000/api/user/${username}`)
        .then(res => {
            return dispatch({
                type: GET_USER,
                payload: res.data
            })
        })

};

// FOLLOW
export const follow = (id) => (dispatch, getState) => {
    const currentUser = getState().auth.user
    const isUserNew = currentUser.followings.find(followingId => followingId === id)
    if (isUserNew === undefined)
        return dispatch({
            type: FOLLOW,
            payload: id
        })
};

// UN FOLLOW
export const unfollow = (id) => (dispatch, getState) => {
    const currentUser = getState().auth.user
    const isUserNew = currentUser.followings.find(followingId => followingId === id)
    if (isUserNew !== undefined)
        return dispatch({
            type: UNFOLLOW,
            payload: id
        })
};
