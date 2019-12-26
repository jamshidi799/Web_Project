import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/types"

const initialState = {
    posts: []
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_POSTS:
            console.log("reducer")
            return {
                ...state,
                posts: actions.payload
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== actions.payload)
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, actions.payload]
            }
        default:
            return state
    }
}