import axios from 'axios'
import {
    GET_POSTS, GET_POST, DELETE_POST, ADD_POST, LIKE_POST, DISLIKE_POST
    , GET_TRENDS, GET_SUBS, GET_FOLLOWED, GET_LATEST
} from './types'

// GET POSTS
export const getPosts = () => (dispatch) => {
    axios.get('http://localhost:8000/api/posts/')
        .then(res => {
            return dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


// GET ONE POST
export const getPost = (id) => (dispatch) => {
    axios.get(`http://localhost:8000/api/posts/${id}`)
        .then(res => {
            return dispatch({
                type: GET_POST,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// DELETE POST
export const deletePost = (id) => (dispatch) => {
    axios.delete(`http://localhost:8000/api/posts/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
}

// ADD POST
export const addPost = post => (dispatch) => {
    axios.post('http://localhost:8000/api/posts/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(error => console.log(error))
}

// LIKE COMMENT
export const likePost = ({ post, userid }) => (dispatch) => {
    const isUserInlikes = post.like.find(id => id === userid)
    if (isUserInlikes === undefined) {
        axios.post(`http://localhost:8000/api/posts/${post.id}/like/${userid}`)
        dispatch({
            type: LIKE_POST,
            payload: userid
        })
    }
    else {
        axios.delete(`http://localhost:8000/api/posts/${post.id}/like/${userid}`)
        dispatch({
            type: DISLIKE_POST,
            payload: userid
        })
    }
}

// get trend posts
export const getTrends = () => (dispatch) => {
    axios.get('http://localhost:8000/api/home/trending/')
        .then(res => {
            return dispatch({
                type: GET_TRENDS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// get subscription posts
export const getSubs = () => (dispatch) => {
    axios.get('http://localhost:8000/api/home/subscriptions/')
        .then(res => {
            return dispatch({
                type: GET_SUBS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// get followed posts
export const getFollowed = () => (dispatch) => {
    axios.get('http://localhost:8000/api/home/followed/')
        .then(res => {
            return dispatch({
                type: GET_FOLLOWED,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// get latest posts
export const getLatest = () => (dispatch) => {
    axios.get('http://localhost:8000/api/home/latest/')
        .then(res => {
            return dispatch({
                type: GET_LATEST,
                payload: res.data
            })
        }).catch(err => console.log(err))
}