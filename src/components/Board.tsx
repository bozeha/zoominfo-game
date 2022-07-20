import styled from 'styled-components'
import { numberOfSquers } from '../utils/consts'
import { updateBoard } from '../actions/boardAction'
import {useSelector, useDispatch} from 'react-redux'
import Squer from './Squer'
import { ISquer } from '../utils/interfaces'
import { useEffect } from 'react'
import img from '../assets/dragon.png'
import { v4 as uuid } from 'uuid';
import {Dispatch} from 'redux'
import {colors} from '../utils/enums'


const Board = ()=>{
const dispatch:Dispatch<any> = useDispatch()
const {board} = useSelector((state:any)=>state.board)
useEffect(()=>{
    console.log(`board is on `);
},[])

const moveMade = (index:number) =>{
    let currentColor;
    if(!board.squers[index].status){
         currentColor = board.currentColor === colors.BLACK ?colors.RED:colors.BLACK;
    } else {
        //currentColor =board.currentColor
        return
    }
    const newSquer : ISquer = {
        color:currentColor,
        status:!board.squers[index].status,
        index:index
    }
    board.currentColor = currentColor
    board.squers[index] = newSquer
    dispatch(updateBoard(board))
}
return (         
    <StyledBoard >   
                {board?.squers?.map((current:ISquer)=>(
                <Squer updateSquer={moveMade}  key={uuid()} index={current.index} status={current.status} color={current.color} />
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
    background-image:url(${img});
    background-size:150px;
    background-repeat:no-repeat;
    background-position:top right;
    

`
