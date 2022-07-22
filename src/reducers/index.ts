
/////////////// import  reducer
import dataReducer from "./data";
import boardReducer from "./board";
////////////// import tool from redux to comabine all reducers
import { combineReducers } from "redux";
import gameReducer from "./game";


export const allReducers = combineReducers({
    users: dataReducer,
    board:boardReducer,
    game:gameReducer
});