import { combineReducers } from "redux";
import post from "./postsReducer";
import auth from './authReducer'
import channel from './channelReducer'


const rootReducer = combineReducers({
    post,
    auth,
    channel,
});

export default rootReducer