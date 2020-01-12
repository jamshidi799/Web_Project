import axios from 'axios'

import { GET_COMMENTS, GET_COMMENT, ADD_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from './types'

// GET COMMENTS
export const getComments = (postid) => (dispatch) => {
    axios.get(`http://localhost:8000/api/posts/${postid}/comments`)
        .then(res => {
            return dispatch({
                type: GET_COMMENTS,
                payload: res.data
            })
        })
}

export const getComment = (commentId) => (dispatch) => {
    // console.log('action before')
    return dispatch({
        type: GET_COMMENT,
        payload: commentId
    })
}

// ADD COMMENT
export const addComment = Comment => (dispatch, getState) => {
    console.log(getState())
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