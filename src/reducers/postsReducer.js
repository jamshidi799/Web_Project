import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/types"

const initialState = {
    posts: [
        { id: '1', title: 'help me find peach', content: 'posts: state.posts.filter(post => post.id !== actions.payload)' },
        { id: '2', title: 'collect all the stars', content: 'switch (actions.type) {' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_POSTS:
            console.log("reducer")
            return {
                ...state,
                // posts: actions.payload      for server response only
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