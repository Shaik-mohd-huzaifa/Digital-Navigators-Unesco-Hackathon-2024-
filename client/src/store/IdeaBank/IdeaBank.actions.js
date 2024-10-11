import { IdeaBankActionTypes } from "./IdeaBank.actionTypes"

export const UpdateIdea = (topics) => {
    return {
        type: IdeaBankActionTypes.UPDATE_IDEAS,
        payload: topics
    }
}