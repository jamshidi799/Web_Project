import axios from 'axios'
import {
    GET_SEARCH
} from './types'
import { tokenConfig } from './auth'

// GET POSTS
export const search = (key) => (dispatch, getState) => {
    axios.get(`http://localhost:8000/api/feed/search/${key}`, tokenConfig(getState))
        .then(res => {
            return dispatch({
                type: GET_SEARCH,
                payload: res.data
            })
        }).catch(err => console.log(err))
}