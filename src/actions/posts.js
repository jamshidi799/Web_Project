import axios from 'axios'
import { GET_POSTS, DELETE_POST, ADD_POST } from './types'

// GET POSTS
export const getPosts = () => {
    axios.get('./api/posts/')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
}

// DELETE POST
export const deletePost = (id) => {
    axios.delete(`./api/posts/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
}

// ADD POST
export const addPost = post => {
    axios.post('./api/posts/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        })
}