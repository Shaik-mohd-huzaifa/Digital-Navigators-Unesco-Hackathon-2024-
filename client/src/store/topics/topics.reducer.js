import { topicsActionTypes } from "./topics.actionTypes"

const Inital_State = {
    topics: []
}


export const topicsReducer = (state = Inital_State, action) => {
    const {type, payload} = action
    if (type == topicsActionTypes.UPDATE_TOPICS){
        return {
            ...state,
            topics: payload
        } 
    }
    return state
}