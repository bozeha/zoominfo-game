import { IGameStatus, IUser } from "../utils/interfaces";
export const actionTypes = {
    ADD_PLAYERS: "ADD_PLAYERS",
    USER_TURN: "USER_TURN",
    UPDATE_GAME_STATUS: "UPDATE_GAME_STATUS"
}


export const updateUsers = (users: Array<IUser>) => (dispatch: any) => {
    dispatch({
        type: actionTypes.ADD_PLAYERS,
        playerOne: users[0],
        playerTwo: users[1],
    })
}

export const updateUserTurn = (turn: number) => (dispatch: any) => {

    dispatch({
        type: actionTypes.USER_TURN,
        currentPlayer: turn
    })


}

export const updateGameStatus = (status: IGameStatus) => (dispatch: any) => {
    dispatch({
        type: actionTypes.UPDATE_GAME_STATUS,
        gameStatus: status
    })

}