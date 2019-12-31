import { GET_COMMENTS, DELETE_COMMENT, GET_COMMENT, EDIT_COMMENT, ADD_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from './types'

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
export const addComment = Comment => (dispatch, getState) => {
    const id = getState().comment.comments.length + 1
    dispatch({
        type: ADD_COMMENT,
        payload: { ...Comment, id }
    })
}

// LIKE COMMENT
export const likeComment = comment => (dispatch, getState) => {
    const userid = getState().auth.user.id
    const isUserInlikes = comment.like.find(id => id === userid)
    if (isUserInlikes === undefined)
        dispatch({
            type: LIKE_COMMENT,
            payload: { ...comment, like: [...comment.like, userid] }
        })
    // else raise error or do nothing
}

// DISLIKE COMMENT
export const dislikeComment = comment => (dispatch, getState) => {
    const userid = getState().auth.user.id
    const isUserInDislikes = comment.dislike.find(id => id === userid)
    if (isUserInDislikes === undefined)
        dispatch({
            type: DISLIKE_COMMENT,
            payload: { ...comment, dislike: [...comment.dislike, userid] }
        })
    // else raise error or do nothings
}