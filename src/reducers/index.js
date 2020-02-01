import { combineReducers } from "redux";
import post from "./postsReducer";
import auth from './authReducer'
import channel from './channelReducer'
import search from './searchReducer'


const rootReducer = combineReducers({
    post,
    auth,
    channel,
    search,
});

export default rootReducer