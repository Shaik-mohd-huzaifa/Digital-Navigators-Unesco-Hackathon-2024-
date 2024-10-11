import { forumActionTypes } from "./forum.actionTypes";
import data from "./../../../data/forum.json"

const Inital_State = {
    categories: data,
    feed: {}
}

export const ForumReducer = (state=Inital_State, action) => {
    const {type, payload} = action
    if(type === forumActionTypes.UPDATE_FEED){
        return {
            ...state,
            feed: payload
        }
    }
    
    return state
}