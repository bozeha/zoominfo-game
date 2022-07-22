import { actionTypes } from "../actions/dataAction";
import { IActionBoard, IBoard } from "../utils/interfaces";
import { actionType } from "../actions/boardAction";
const initial:IBoard = {
    status:true,
    squers:[],
    currentColor:-1
}

const boardReducer = (state = initial,action:IActionBoard) =>{
    switch(action.type){
        case actionType.UPDATE_BOARD:
            return{
                ...state,
                status:action.status,
                squers:action.squers,
                currentColor:action.currentColor
            }
        default:
            return {
                ...state
            }
    }

}

export default boardReducer