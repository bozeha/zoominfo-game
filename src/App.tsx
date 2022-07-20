import React from 'react';
import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { updateUsers } from './actions/dataAction';
import {IBoard, ISquer, IUser} from './utils/interfaces'
import {Dispatch} from 'redux'
import {numberOfSquers} from './utils/consts'
import { updateBoard } from './actions/boardAction';
import Board from './components/Board';
import {colors} from './utils/enums'

function App() {

  //let arrOfUsers : IUser[] = []
  const arrOfUsers : IUser[] = [{id:123,name:"aaa"}]
  const board : IBoard ={
    squers:[],
    status:true,
    currentColor:colors.BLACK
  }
  
   
  const { users } = useSelector((state:any) => state.users)
  const dispatch:Dispatch<any> = useDispatch()
  useEffect(()=>{
    dispatch(updateUsers(arrOfUsers))
    createBoard()
  },[])
  const createBoard = ()=>{
    for (let loop = 0 ; loop< numberOfSquers; loop ++){
      const newSquer : ISquer ={
        index:loop,
        status:false,
        color:""
      }
      board.squers.push(newSquer)
    }
    dispatch(updateBoard(board))
  }
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      
      <Board/>
    </div>
  );
}

export default App;


