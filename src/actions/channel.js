import axios from 'axios'

import {
    GET_CHANNELS, GET_CHANNEL, ADD_CHANNEL, DELETE_CHANNEL,
    DELETE_POST_FROM_CHANNEL, ADD_AUTHOR, REMOVE_AUTHOR,
} from './types'
import { tokenConfig } from './auth'

// GET channelS
export const getChannels = () => (dispatch, getState) => {
    axios.get('http://localhost:8000/api/channels', tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_CHANNELS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const getChannel = (id) => (dispatch, getState) => {
    axios.get(`http://localhost:8000/api/channels/${id}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_CHANNEL,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// ADD channel
export const addChannel = channel => (dispatch, getState) => {
    axios.post('http://localhost:8000/api/channels/', channel, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: ADD_CHANNEL,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// DELETE channel
export const deleteChannel = id => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/channels/${id}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: DELETE_CHANNEL,
                payload: id
            })
        }).catch(err => console.log(err))
}

// DELETE POST
export const deletePost = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/posts/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_POST_FROM_CHANNEL,
                payload: id
            })
        })
}

// DELETE POST
export const addAuthor = ({ channelid, authorid }) => (dispatch, getState) => {
    axios.post(`http://localhost:8000/api/channels/${channelid}/authors/${authorid}`, null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_AUTHOR,
                payload: authorid
            })
        })
}

export const removeAuthor = ({ channelid, authorid }) => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/channels/${channelid}/authors/${authorid}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: REMOVE_AUTHOR,
                payload: authorid
            })
        })
}