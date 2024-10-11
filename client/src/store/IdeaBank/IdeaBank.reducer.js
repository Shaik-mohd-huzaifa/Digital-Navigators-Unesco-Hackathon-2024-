import { IdeaBankActionTypes } from "./IdeaBank.actionTypes";

const Initial_state = {
    "suggested_topic": null
}

export const IdeaReducer = (state = Initial_state, action) => {
    const {type, payload} = action
    if(type === IdeaBankActionTypes.UPDATE_IDEAS){
        return {
            ...state,
            ...payload
        }
    }

    return state
}