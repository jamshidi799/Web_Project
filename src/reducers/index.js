import { combineReducers } from "redux";
import post from "./postsReducer";
import auth from './authReducer'
import comment from './commentReducer'


const rootReducer = combineReducers({
    post,
    comment,
    auth,
});

export default rootReducer