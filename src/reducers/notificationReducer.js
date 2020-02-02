import { DELETE_NOTIFICATION, GET_NOTIFICATION } from '../actions/types'

const initialState = {
    notifications: [
        {
            id: 1,
            kind: 'follow you',
            creator: 'ali',
            target_post: '',
        }
    ]
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_NOTIFICATION:
            return {
                notifications: actions.payload
            }
        case DELETE_NOTIFICATION:
            return {
                notifications: state.notifications.filter(notification => notification.id !== actions.payload)
            }
        default:
            return state
    }
}