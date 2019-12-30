import { GET_COMMENTS, DELETE_COMMENT, GET_COMMENT, EDIT_COMMENT, ADD_COMMENT } from './types'

// GET COMMENTS
export const getComments = () => (dispatch) => {
    // console.log('action before')
    return dispatch({
        type: GET_COMMENTS,
    })
}

export const getComment = (id) => (dispatch) => {
    // console.log('action before')
    return dispatch({
        type: GET_COMMENT,
        payload: id
    })
}

// ADD COMMENT
export const addComment = Comment => (dispatch) => {
    dispatch({
        type: ADD_COMMENT,
        payload: Comment
    })
}