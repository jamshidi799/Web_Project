import {
    GET_POSTS,
    ADD_POST,
    GET_POST,
    DELETE_POST,
    LIKE_POST,
    DISLIKE_POST,
    GET_FEED,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    LIKE_COMMENT,
    DISLIKE_COMMENT,
} from "../actions/types"

const initialState = {
    currentPost: {
        "id": 2,
        "owner": 2,
        "channel": null,
        "title": "post2",
        "content": "django second post :)",
        "image": null,
        "comments": [
            {
                "id": 3,
                "owner": 1,
                "content": "added successfully. You may add another comment below",
                "date": "2020-01-11T21:25:21.749648Z",
                "like": [],
                "dislike": [],
                "reply_to": null
            }
        ],
        "date": "2020-01-11T21:17:59.950942Z",
        "like": [
            3,
            21,
            24
        ]
    },
    posts: [
        {
            id: 1, owner: 1, channelid: 0, title: 'help me find peach', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text'
        },
        { id: 2, owner: 2, channelid: 1, title: 'collect all the stars', like: [], date: "2020-01-11T21:17:59.950942Z", content: ' All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },
        { id: 3, owner: 3, channelid: 1, title: 'egg hunt with yoshi', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it' },
        { id: 4, owner: 4, channelid: 1, title: 'Sed ut perspiciatis unde ', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
        { id: 5, owner: 4, channelid: 2, title: 'accusantium doloremque laudantium', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
        { id: 6, owner: 4, channelid: 2, title: 'eos qui ratione voluptatem sequi', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
        { id: 7, owner: 4, channelid: 2, title: 'denouncing pleasure and praising', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
        { id: 8, owner: 4, channelid: 3, title: 'egg hunt with yoshi', like: [], date: "2020-01-11T21:17:59.950942Z", content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: actions.payload
            }
        case GET_POST:
            return {
                ...state,
                currentPost: actions.payload
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
        case LIKE_POST:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    like: [...state.currentPost.like, actions.payload]
                }
            }
        case DISLIKE_POST:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    like: state.currentPost.like.filter(like => like !== actions.payload)
                }
            }
        case ADD_COMMENT:
            return {
                ...state,
                currentPost: { ...state.currentPost, comments: [...state.currentPost.comments, actions.payload] }
            }
        case DELETE_COMMENT:
            return {
                ...state,
                currentPost: { ...state.currentPost, comments: state.currentPost.comments.filter(comment => comment.id !== actions.payload) }
            }
        case GET_FEED:
            return {
                ...state,
                posts: actions.payload
            }
        case LIKE_COMMENT:
        case DISLIKE_COMMENT:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost, comments: state.currentPost.comments.map(comment => {
                        if (comment.id === actions.payload.id)
                            return actions.payload
                        return comment
                    })
                }
            }
        default:
            return state
    }
}