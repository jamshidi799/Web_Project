import { GET_CHANNELS, ADD_CHANNEL, GET_CHANNEL, DELETE_CHANNEL, DELETE_POST_FROM_CHANNEL, ADD_AUTHOR, REMOVE_AUTHOR } from "../actions/types"

const initialState = {
    currentchannel: {
        "id": 1,
        "name": "channel1",
        "owner": 2,
        "authors": [],
        "about": "web",
        "image": null,
        "date": "2020-01-29T12:55:16.499243Z",
        "posts": [
            {
                "id": 4,
                "owner": 21,
                "channel": 1,
                "title": "lenovo",
                "image": null
            }
        ]
    },
    channels: [
        { id: '1', userid: '1', authors: [], name: 'channel_1', title: 'help me find peach', content: 'channels: state.channels.filter(channel => channel.id !== actions.payload)' },
        { id: '2', userid: '2', authors: [], name: 'channel_2', title: 'collect all the stars', content: 'switch (actions.type) {' },
        { id: '3', userid: '3', authors: [], name: 'channel_3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_CHANNELS:
            return {
                ...state,
                channels: actions.payload
            }
        case GET_CHANNEL:
            return {
                ...state,
                currentchannel: actions.payload
            }
        case DELETE_CHANNEL:
            return {
                ...state,
                channels: state.channels.filter(channel => channel.id !== actions.payload)
            }
        case ADD_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, actions.payload]
            }
        case DELETE_POST_FROM_CHANNEL:
            return {
                ...state,
                currentchannel: {
                    ...state.currentchannel,
                    posts: state.currentchannel.posts.filter(post => post.id !== actions.payload)
                }
            }
        case ADD_AUTHOR:
            return {
                ...state,
                currentchannel: {
                    ...state.currentchannel,
                    authors: [...state.currentchannel.authors, actions.payload]
                }
            }
        case REMOVE_AUTHOR:
            return {
                ...state,
                currentchannel: {
                    ...state.currentchannel,
                    authors: state.currentchannel.authors.filter(author => author !== actions.payload)
                }
            }
        default:
            return state
    }
}