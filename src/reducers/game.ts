import {IActionGame, IGame} from '../utils/interfaces'
import {playerColors,IPlayers} from '../utils/enums'
import { AnyAction } from 'redux'
import { actionTypes } from '../actions/gameAction'


const initial:IGame ={
    moveNumber:0,
    currentPlayer:IPlayers.PLAYER_ONE,
    playerOne:{
        name:"",
        color: -1,
        step:0
    },
    playerTwo:{
        name:"",
        color: -1,
        step:0
    }

} 



const gameReducer = (state = initial, action:IActionGame)=>{

    switch(action.type){
        case actionTypes.ADD_PLAYERS:
            return {
                ...state,
                playerOne:action.playerOne,
                playerTwo:action.playerTwo,
            }
        case actionTypes.USER_TURN:
            return{
                ...state,
                currentPlayer:action.currentPlayer
            }
            default:
                return {
                    ...state
                }
    }

}

export default gameReducer