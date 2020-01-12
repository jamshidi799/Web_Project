import axios from 'axios'
import { GET_POSTS, GET_POST, DELETE_POST, ADD_POST } from './types'

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
    axios.post('http://localhost:8000/api/post/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(error => console.log(error))
}