import styled from 'styled-components'
import { numberOfSquers } from '../utils/consts'
import { updateBoard } from '../actions/boardAction'
import { useSelector, useDispatch } from 'react-redux'
import Squer from './Squer'
import { ISquer } from '../utils/interfaces'
import { useEffect } from 'react'
import img from '../assets/dragon.png'
import { v4 as uuid } from 'uuid';
import { Dispatch } from 'redux'
import { IPlayers, playerColors } from '../utils/enums'
import { updateUserTurn } from '../actions/gameAction'
import { IBoard } from "../utils/interfaces"
import { gameStatus } from '../utils/gameStatus'


const Board = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { squers, currentColor } = useSelector((state: any) => state.board)
    const { currentPlayer } = useSelector((state: any) => state.game)
    const gameCurrentStatus = gameStatus()

    useEffect(() => {
        console.log(`board is on `);

    }, [])

    useEffect(() => {
        console.log(gameCurrentStatus.testAllSteps(squers))
        console.log(`aaaaaaaaaaaaaaaaaaaaaaaaa`);
    }, [currentColor])


    const moveMade = (index: number) => {
        let updatedCurrentColor;

        if (!squers[index].status) {
            updatedCurrentColor = currentColor === playerColors.BLACK ? playerColors.RED : playerColors.BLACK;
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
        const playerTurn = currentPlayer === IPlayers.PLAYER_ONE ? IPlayers.PLAYER_TWO : IPlayers.PLAYER_ONE;
        dispatch(updateUserTurn(playerTurn))
    }
    return (
        <StyledBoard >
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
