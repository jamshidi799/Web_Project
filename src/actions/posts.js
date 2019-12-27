import axios from 'axios'
import { GET_POSTS, DELETE_POST, ADD_POST } from './types'

// GET POSTS
export const getPosts = () => (dispatch) => {
    // console.log('action before')
    axios.get('http://localhost:8000/api/posts/')
        .then(res => {
            console.log("get_query", res.data)
            return dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// DELETE POST
export const deletePost = (id) => (dispatch) => {
    axios.delete(`./api/posts/${id}`)
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