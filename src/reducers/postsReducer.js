import { GET_POSTS, ADD_POST, GET_POST, EDIT_POST, DELETE_POST } from "../actions/types"

const initialState = {
    currentPost: { id: '1', userid: '1', channelid: '0', title: 'help me find peach', content: 'posts: state.posts.filter(post => post.id !== actions.payload)' },
    posts: [
        { id: '1', userid: '1', channelid: '0', title: 'help me find peach', content: 'posts: state.posts.filter(post => post.id !== actions.payload)' },
        { id: '2', userid: '2', channelid: '1', title: 'collect all the stars', content: 'switch (actions.type) {' },
        { id: '3', userid: '3', channelid: '1', title: 'egg hunt with yoshi', content: 'blah blah blah' },
        { id: '4', userid: '4', channelid: '1', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_POSTS:
            return {
                ...state,
                // posts: actions.payload      for server response only
            }
        case GET_POST:
            return {
                ...state,
                currentPost: state.posts.find(post => post.id === actions.payload)
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