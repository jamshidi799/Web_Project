import { GET_CHANNELS, GET_CHANNEL, DELETE_CHANNEL, EDIT_CHANNEL, ADD_CHANNEL } from './types'

// GET channelS
export const getChannels = () => (dispatch) => {
    // console.log('action before')
    return dispatch({
        type: GET_CHANNELS,
    })
}

export const getChannel = (id) => (dispatch) => {
    // console.log('action before')
    return dispatch({
        type: GET_CHANNEL,
        payload: id
    })
}

// ADD channel
export const addChannel = channel => (dispatch, getState) => {
    const userid = getState().auth.user.id
    const channelid = String(getState().channel.channels.length + 1)
    dispatch({
        type: ADD_CHANNEL,
        payload: { id: channelid, userid, ...channel }
    })
}