import store from '../store'

import {
    REGISTER,
    LOGIN,
    LOGOUT,
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {

};

// LOGIN USER
export const login = ({ username, password }) => (dispatch, getState) => {
    console.log("store.getstate", getState())
    return dispatch({
        type: LOGIN,
        payload: { username, password }
    })
};

// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
    return dispatch({
        type: REGISTER,
        payload: { username, password, email }
    })
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    return dispatch({
        type: LOGOUT,
    })
};
