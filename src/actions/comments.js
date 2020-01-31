import axios from 'axios'

import { GET_COMMENTS, GET_COMMENT, ADD_COMMENT, DELETE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from './types'


// ADD COMMENT
export const addComment = comment => (dispatch) => {
    axios.post(`http://localhost:8000/api/posts/${comment.post}/comments`, comment)
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            })
        })
}

// DELETE COMMENT
export const deleteComment = ({ postid, commentid }) => (dispatch) => {
    axios.delete(`http://localhost:8000/api/posts/${postid}/comments/${commentid}`)
        .then(res => {
            dispatch({
                type: DELETE_COMMENT,
                payload: commentid
            })
        })
}

// LIKE COMMENT
export const likeComment = ({ comment, userid }) => (dispatch) => {
    const isUserInlikes = comment.like.find(id => id === userid)
    if (isUserInlikes === undefined) {
        axios.post(`http://localhost:8000/api/posts/comments/${comment.id}/like/${userid}`)
        dispatch({
            type: LIKE_COMMENT,
            payload: { ...comment, like: [...comment.like, userid] }
        })
    }
}

// DISLIKE COMMENT
export const dislikeComment = ({ comment, userid }) => (dispatch, getState) => {
    const isUserIndislikes = comment.dislike.find(id => id === userid)
    if (isUserIndislikes === undefined) {
        axios.post(`http://localhost:8000/api/posts/comments/${comment.id}/dislike/${userid}`)
        dispatch({
            type: DISLIKE_COMMENT,
            payload: { ...comment, dislike: [...comment.dislike, userid] }
        })
    }
}