import { combineReducers } from "redux";
import post from "./postsReducer";
import auth from './authReducer'
import comment from './commentReducer'
import channel from './channelReducer'


const rootReducer = combineReducers({
    post,
    comment,
    auth,
    channel,
});

export default rootReducer