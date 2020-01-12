import { ADD_CHANNEL, GET_CHANNEL, DELETE_CHANNEL } from "../actions/types"

const initialState = {
    currentchannel: { id: '1', userid: '1', authors: [], name: 'channel_1', title: 'help me find peach', content: 'channels: state.channels.filter(channel => channel.id !== actions.payload)' },
    channels: [
        { id: '1', userid: '1', authors: [], name: 'channel_1', title: 'help me find peach', content: 'channels: state.channels.filter(channel => channel.id !== actions.payload)' },
        { id: '2', userid: '2', authors: [], name: 'channel_2', title: 'collect all the stars', content: 'switch (actions.type) {' },
        { id: '3', userid: '3', authors: [], name: 'channel_3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_CHANNEL:
            return {
                ...state,
                currentchannel: state.channels.find(channel => channel.id === actions.payload)
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
        default:
            return state
    }
}