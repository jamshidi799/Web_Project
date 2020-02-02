import axios from 'axios'
import {
    GET_NOTIFICATION,
    DELETE_NOTIFICATION
} from './types'
import { tokenConfig } from './auth'

// GET NOTIFICATION
export const getNotification = () => (dispatch, getState) => {
    axios.get(`http://localhost:8000/api/notification/`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_NOTIFICATION,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// GET NOTIFICATION
export const deleteNotification = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/notification/${id}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: DELETE_NOTIFICATION,
                payload: id
            })
        }).catch(err => console.log(err))
}