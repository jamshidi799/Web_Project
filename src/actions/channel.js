import axios from 'axios'

import { GET_CHANNELS, GET_CHANNEL, ADD_CHANNEL, DELETE_CHANNEL } from './types'

// GET channelS
export const getChannels = () => (dispatch) => {
    axios.get('http://localhost:8000/api/channels/')
        .then(res => {
            return dispatch({
                type: GET_CHANNELS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const getChannel = (id) => (dispatch) => {
    axios.get(`http://localhost:8000/api/channels/${id}`)
        .then(res => {
            return dispatch({
                type: GET_CHANNEL,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// ADD channel
export const addChannel = channel => (dispatch) => {
    axios.post('http://localhost:8000/api/channels/', channel)
        .then(res => {
            return dispatch({
                type: ADD_CHANNEL,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// DELETE channel
export const deleteChannel = id => (dispatch) => {
    axios.delete(`http://localhost:8000/api/channels/${id}`)
        .then(res => {
            return dispatch({
                type: DELETE_CHANNEL,
                payload: id
            })
        }).catch(err => console.log(err))
}