import styled from 'styled-components'
import { updateBoard, updateSquers } from '../actions/boardAction'
import { useSelector, useDispatch } from 'react-redux'
import Squer from './Squer'
import { IGameStatus, ISquer } from '../utils/interfaces'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { Dispatch } from 'redux'
import { Players, PlayerColors, GameStatus } from '../utils/enums'
import { updateGameStatus, updateUserTurn } from '../actions/gameAction'
import { IBoard } from "../utils/interfaces"
import { gameStatus } from '../utils/gameStatus'
import Popup from './popup'
import { congrat } from '../utils/consts'


const Board = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { squers, currentColor } = useSelector((state: any) => state.board)
    const { currentPlayer, gaemStatus, playerOne, playerTwo } = useSelector((state: any) => state.game)
    const gameCurrentStatus = gameStatus()
    const boardRef = useRef<HTMLDivElement>(document.createElement("div"))
    const [showPopup, setShowPopup] = useState(false)
    const newGameButton = [
        { text: "New Game", action: () => { window.location.reload() } }
    ]

    useEffect(() => {
        const gameResults = gameCurrentStatus.testAllSteps(squers);
        const newGameStatus: IGameStatus = {
            status: gameResults.gameStatus.status,
            wonObj: {
                direction: gameResults.gameStatus.wonObj.direction,
                steps: gameResults.gameStatus.wonObj.steps
            }
        }
        dispatch(updateGameStatus(newGameStatus))
        if (newGameStatus.status === GameStatus.PLAYER_WON) {
            won(newGameStatus)
        }

    }, [currentColor])

    const won = (newGameStatus: IGameStatus) => {

        const newSquersArray: Array<ISquer> = [...squers]
        for (let loop = 0; loop < 4; loop++) {
            newSquersArray[newGameStatus.wonObj.steps[loop]].color = PlayerColors.GRAY
        }
        dispatch(updateSquers(newSquersArray))

        setShowPopup(true)
    }

    const moveMade = (index: number) => {
        let updatedCurrentColor;

        if (!squers[index].status) {
            updatedCurrentColor = currentColor === PlayerColors.BLACK ? PlayerColors.RED : PlayerColors.BLACK;
        } else {
            return
        }
        const newSquer: ISquer = {
            color: currentColor,
            status: !squers[index].status,
            index: index
        }

        squers[index] = newSquer
        const newBoard: IBoard = {
            squers: squers,
            currentColor: updatedCurrentColor,
            status: true
        }
        dispatch(updateBoard(newBoard))
        updateGameForMovement()
    }
    const updateGameForMovement = () => {
        const playerTurn = currentPlayer === Players.PLAYER_ONE ? Players.PLAYER_TWO : Players.PLAYER_ONE;
        dispatch(updateUserTurn(playerTurn))
    }
    return (
        <StyledBoard ref={boardRef} >
            {showPopup &&
                <Popup text={`${congrat}`} title={`${currentPlayer === Players.PLAYER_TWO ? playerOne.name : playerTwo.name} Won !!!!!!!!!`} buttons={newGameButton} status={setShowPopup} />
            }
            {squers?.map((current: ISquer) => (
                <Squer updateSquer={moveMade} key={uuid()} index={current.index} status={current.status} color={current.color} />
            ))}
        </StyledBoard>
    )
}

export default Board

const StyledBoard = styled.div`
    color:red;
    display:flex;
    flex-wrap:wrap;
    width:650px;
    height:600px;
    border:1px solid black;
    justify-content:space-around;
    margin:0 auto;
    background-size:150px;
    background-repeat:no-repeat;
    background-position:top right;
    background-color:rgba(99, 49, 219, 0.38);
    

`
