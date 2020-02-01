import { GET_SEARCH } from '../actions/types'

const initialState = {
    posts: [
        {
            id: 2,
            owner: 3,
            channel: null,
            title: 'post2',
            image: null,
            like: [
                3,
                21,
                24
            ],
            date: '2020-01-30T21:09:11.832761Z'
        }
    ],
    channels: [
        {
            id: 1, name: "channel1"
        },
    ],
    users: [
        {
            id: 3,
            username: 'sadegh',
            email: 'sadegh@gmail.com',
            bio: 'aaaa',
            image_url: '',
            followings: [],
            followers: []
        }
    ],
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_SEARCH:
            return {
                posts: actions.payload.posts,
                channels: actions.payload.channels,
                users: actions.payload.users
            }
        default:
            return state
    }
}