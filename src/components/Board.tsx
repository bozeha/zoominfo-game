import styled from 'styled-components'
import { numberOfSquers } from '../utils/consts'
import { updateBoard } from '../actions/boardAction'
import { useSelector, useDispatch } from 'react-redux'
import Squer from './Squer'
import { IGameStatus, ISquer } from '../utils/interfaces'
import { useEffect, useRef } from 'react'
import img from '../assets/dragon.png'
import { v4 as uuid } from 'uuid';
import { Dispatch } from 'redux'
import { Players, PlayerColors, GameStatus } from '../utils/enums'
import { updateGameStatus, updateUserTurn } from '../actions/gameAction'
import { IBoard } from "../utils/interfaces"
import { gameStatus } from '../utils/gameStatus'


const Board = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { squers, currentColor } = useSelector((state: any) => state.board)
    const { currentPlayer, gaemStatus } = useSelector((state: any) => state.game)
    const gameCurrentStatus = gameStatus()
    const boardRef = useRef<HTMLDivElement>(document.createElement("div"))

    useEffect(() => {
        console.log(`board is on `);

    }, [])

    useEffect(() => {
        const gameResults = gameCurrentStatus.testAllSteps(squers);
        console.log(`gameResults:::::::${JSON.stringify(gameResults)}#####`);
        const newGameStatus: IGameStatus = {
            status: gameResults.gameStatus.status,
            wonObj: {
                direction: gameResults.gameStatus.wonObj.direction,
                steps: gameResults.gameStatus.wonObj.steps
            }
        }
        dispatch(updateGameStatus(newGameStatus))
        if (newGameStatus.status === GameStatus.PLAYER_WON) {
            //console.log(`boardRef.current.children[0]:::::::${JSON.stringify(boardRef.current.children[0])}#####`);
            boardRef.current.style.backgroundColor = "red"

            //boardRef.current.children[0].style.backgroundColor = "blue"
        }

    }, [currentColor])

    // const wonEffect = (arr: Array<number>) => {


    // }

    const moveMade = (index: number) => {
        let updatedCurrentColor;

        if (!squers[index].status) {
            updatedCurrentColor = currentColor === PlayerColors.BLACK ? PlayerColors.RED : PlayerColors.BLACK;
        } else {
            //currentColor =board.currentColor
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
