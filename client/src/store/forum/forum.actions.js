import { forumActionTypes } from "./forum.actionTypes"

export const UpdateFeed = (feed) => {
    return {
        type: forumActionTypes.UPDATE_FEED,
        payload: feed
    }
}