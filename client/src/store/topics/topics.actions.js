import { topicsActionTypes } from "./topics.actionTypes";
import topics from "./../../../data/topics.json"


export const updateTopicsAction = () => {
    return {
        type: topicsActionTypes.UPDATE_TOPICS,
        payload: topics
    }
}