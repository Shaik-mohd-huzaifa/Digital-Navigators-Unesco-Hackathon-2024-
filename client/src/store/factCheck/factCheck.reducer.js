import { FactCheckActions } from "./factCheck.actionTypes";

const Inital_State = {
    meta_data: null
}

export const factCheckReduer = (state = Inital_State, action) => {
    const {type, payload} = action

    if(type == FactCheckActions.UPDATE_FACT){
        return {
            ...state,
            ...payload
        }
    }
    return state
}