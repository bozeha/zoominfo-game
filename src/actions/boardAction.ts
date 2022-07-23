import { IBoard, ISquer } from "../utils/interfaces"


export const actionType = {
    UPDATE_BOARD: "UPDATE_BOARD",
    UPDATE_SQUERS: "UPDATE_SQUERS"
}

export const updateBoard = (board: IBoard) => (dispatch: any) => {
    dispatch({
        type: actionType.UPDATE_BOARD,
        status: board.status,
        squers: board.squers,
        currentColor: board.currentColor
    })
}

export const updateSquers = (squers: Array<ISquer>) => (dispatch: any) => {
    dispatch({
        type: actionType.UPDATE_SQUERS,
        squers: squers
    })
}