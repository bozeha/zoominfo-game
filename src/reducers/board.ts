import { actionTypes } from "../actions/dataAction";
import { IActionBoard, IBoard } from "../utils/interfaces";
import { actionType } from "../actions/boardAction";
const initial = {board:{}}

const boardReducer = (state = initial,action:IActionBoard) =>{
    switch(action.type){
        case actionType.UPDATE_BOARD:
            return{
                state,
                board:action.board
            }
        default:
            return {
                ...state
            }
    }

}

export default boardReducer