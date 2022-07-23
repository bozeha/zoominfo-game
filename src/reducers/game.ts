import { IActionGame, IGame } from '../utils/interfaces'
import { PlayerColors, Players, GameStatus, WonDirection } from '../utils/enums'
import { AnyAction } from 'redux'
import { actionTypes } from '../actions/gameAction'


const initial: IGame = {
    gameStatus: {
        status: GameStatus.NOT_STARTED,
        wonObj: {
            direction: WonDirection.NONE,
            steps: []

        }
    },
    moveNumber: 0,
    currentPlayer: Players.PLAYER_ONE,
    playerOne: {
        name: "",
        color: -1,
        step: 0
    },
    playerTwo: {
        name: "",
        color: -1,
        step: 0
    }

}



const gameReducer = (state = initial, action: IActionGame) => {

    switch (action.type) {
        case actionTypes.ADD_PLAYERS:
            return {
                ...state,
                playerOne: action.playerOne,
                playerTwo: action.playerTwo,
            }
        case actionTypes.USER_TURN:
            return {
                ...state,
                currentPlayer: action.currentPlayer
            }
        case actionTypes.UPDATE_GAME_STATUS:
            return {
                ...state,
                gameStatus: action.gameStatus
            }
        default:
            return {
                ...state
            }
    }

}

export default gameReducer