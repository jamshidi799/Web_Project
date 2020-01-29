import axios from 'axios'
import {GET_POSTS, GET_POST, DELETE_POST, ADD_POST, GET_TRENDS, GET_SUBS, GET_FOLLOWED, GET_LATEST} from './types'

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
            console.log("get_query", res.data)
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
            console.log(post)
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(error => console.log(error))
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