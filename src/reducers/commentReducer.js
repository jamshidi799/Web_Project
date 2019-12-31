import { GET_COMMENTS, ADD_COMMENT, GET_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from "../actions/types"

const initialState = {
    currentComment: null,
    comments: [
        { id: '1', userid: '1', postid: '1', parentid: '2', content: 'comment 1', like: [], dislike: [] },
        { id: '2', userid: '2', postid: '2', parentid: '', content: 'comment 2', like: [], dislike: [] },
        { id: '3', userid: '3', postid: '3', parentid: '', content: 'comment 3', like: [], dislike: [] }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_COMMENTS:
            console.log("reducer")
            return {
                ...state,
                // comments: actions.payload      for server response only
            }
        case GET_COMMENT:
            return {
                ...state,
                currentComment: state.comments.find(comment => comment.id === actions.payload)
            }
        case DELETE_COMMENT:
            return {
                ...state,
                COMMENTs: state.comments.filter(comment => comment.id !== actions.payload)
            }
        case ADD_COMMENT:
            const newComment = { id: String(state.comments.length), ...actions.payload }   // only for without server mode
            return {
                ...state,
                comments: [...state.comments, newComment]
            }
        case LIKE_COMMENT:
        case DISLIKE_COMMENT:
            const comment = actions.payload
            const newArray = state.comments.map(c => {
                if (c.id === comment.id)
                    return comment
                else return c
            })
            return {
                ...state,
                comments: [...newArray]
            }
        default:
            return state
    }
}