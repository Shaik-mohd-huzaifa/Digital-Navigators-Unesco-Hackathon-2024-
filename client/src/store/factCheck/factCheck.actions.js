import { FactCheckActions } from "./factCheck.actionTypes";


export const UpdateFactActions = (payload) => {
    return {
        "type": FactCheckActions.UPDATE_FACT,
        "payload": payload
    }
}