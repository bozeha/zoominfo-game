import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from './actions/gameAction';
import { IBoard, ISquer, IUser } from './utils/interfaces'
import { Dispatch } from 'redux'
import { numberOfSquers } from './utils/consts'
import { updateBoard } from './actions/boardAction';
import Board from './components/Board';
import { PlayerColors } from './utils/enums'
import Popup from './components/popup'
import InfoBoard from './components/InfoBoard';

function App() {


  const arrOfUsers: IUser[] = []
  const board: IBoard = {
    squers: [],
    status: true,
    currentColor: PlayerColors.BLACK
  }

  const [popupStatus, setPopupStatus] = useState(true)
  const [playerOneName, setPlayerOneName] = useState("Dan")
  const [playerTwoName, setPlayerTwoName] = useState("Bob")
  const { users } = useSelector((state: any) => state.users)
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(updateUsers(arrOfUsers))
    createBoard()
    addUsers()
  }, [])
  useEffect(() => {
    console.log(`App runderd `);
  })


  const addUsers = () => {
    const tempNewUser1: IUser = {
      id: 1,
      name: playerOneName,
      age: 22
    }
    const tempNewUser2: IUser = {
      id: 2,
      name: playerTwoName,
      age: 23
    }
    dispatch(updateUsers([tempNewUser1, tempNewUser2]))
    setPopupStatus(false)
  }
  const playersButtons = [
    { text: "Add users", action: addUsers }
  ]
  const playersInput = [
    { title: "Enter player number one:", set: setPlayerOneName, val: playerOneName },
    { title: "Enter player number two:", set: setPlayerTwoName, val: playerTwoName }
  ]



  const createBoard = () => {
    for (let loop = 0; loop < numberOfSquers; loop++) {
      const newSquer: ISquer = {
        index: loop,
        status: false,
        color: -1
      }
      board.squers.push(newSquer)
    }

    dispatch(updateBoard(board))


  }

  return (
    <div className="App">
      {/* {popupStatus &&
        <Popup title="Wellcome" key={"popup"} buttons={playersButtons} inputs={playersInput} status={setPopupStatus} />
      } */}
      <header className="App-header">
      </header>

      <InfoBoard firstUserName={playerOneName} secondUserName={playerTwoName} />
      <Board />
    </div>
  );
}

export default App;


