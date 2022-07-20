import { IBoard } from "../utils/interfaces"
export const actionType = {
    UPDATE_BOARD: "UPDATE_BOARD"
}

export const updateBoard = (board:IBoard)=> (dispatch:any)=>{
    dispatch( {
        type:actionType.UPDATE_BOARD,
        board:board
    })

}