import { combineReducers } from "redux";
import { topicsReducer } from "./topics/topics.reducer";
import { factCheckReduer } from "./factCheck/factCheck.reducer";
import { IdeaReducer } from "./IdeaBank/IdeaBank.reducer";
import { ForumReducer } from "./forum/forum.reducer";
  

export const rootReducer = combineReducers({
    topics: topicsReducer,
    factCheck:factCheckReduer,
    ideas: IdeaReducer,
    forum: ForumReducer
})