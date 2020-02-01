import axios from 'axios'
import {
    GET_POSTS, GET_POST, DELETE_POST, ADD_POST, LIKE_POST, DISLIKE_POST
    , GET_FEED
} from './types'
import { tokenConfig } from './auth'

// GET POSTS
export const getPosts = () => (dispatch, getState) => {
    axios.get('http://localhost:8000/api/posts/', tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


// GET ONE POST
export const getPost = (id) => (dispatch, getState) => {
    axios.get(`http://localhost:8000/api/posts/${id}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_POST,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// DELETE POST
export const deletePost = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/posts/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
}

// ADD POST
export const addPost = post => (dispatch, getState) => {
    axios.post('http://localhost:8000/api/posts/', post, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(error => console.log(error))
}

// LIKE COMMENT
export const likePost = ({ post, userid }) => (dispatch, getState) => {
    const isUserInlikes = post.like.find(id => id === userid)
    if (isUserInlikes === undefined) {
        axios.post(`http://localhost:8000/api/posts/${post.id}/like/${userid}`, null, tokenConfig(getState))
        dispatch({
            type: LIKE_POST,
            payload: userid
        })
    }
    else {
        axios.delete(`http://localhost:8000/api/posts/${post.id}/like/${userid}`, tokenConfig(getState))
        dispatch({
            type: DISLIKE_POST,
            payload: userid
        })
    }
}

// get trend posts
export const getFeed = (mode) => (dispatch, getState) => {
    axios.get(`http://localhost:8000/api/feed/${mode}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_FEED,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

