import { GET_COMMENTS, ADD_COMMENT, GET_COMMENT, DELETE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from "../actions/types"

const initialState = {
    currentComment: { id: '1', userid: '1', postid: '1', parentid: '2', content: 'making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', like: [], dislike: [] },
    comments: [
        { id: '1', userid: '1', postid: '1', parentid: '2', content: 'making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', like: [], dislike: [] },
        // { id: '2', userid: '2', postid: '2', parentid: '', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', like: [], dislike: [] },
        // { id: '3', userid: '3', postid: '3', parentid: '', content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 ', like: [], dislike: [] }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_COMMENTS:
            // console.log('comment reducer', actions.payload)
            return {
                ...state,
                comments: actions.payload
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