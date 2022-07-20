
/////////////// import  reducer
import dataReducer from "./data";
import boardReducer from "./board";
////////////// import tool from redux to comabine all reducers
import { combineReducers } from "redux";


export const allReducers = combineReducers({
    users: dataReducer,
    board:boardReducer
});