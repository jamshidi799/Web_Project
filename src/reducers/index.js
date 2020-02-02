import { combineReducers } from "redux";
import post from "./postsReducer";
import auth from './authReducer'
import channel from './channelReducer'
import search from './searchReducer'
import notification from './notificationReducer'


const rootReducer = combineReducers({
    post,
    auth,
    channel,
    search,
    notification,
});

export default rootReducer