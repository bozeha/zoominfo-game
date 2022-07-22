import styled from "styled-components"
import black from '../assets/black.png'
import red from '../assets/red.png'
import {useSelector} from 'react-redux'
import { IGame } from "../utils/interfaces"
import { IPlayers } from "../utils/enums"
import gameReducer from "../reducers/game"

type users = {
    firstUserName:string;
    secondUserName:string;

}


const InfoBoard = ({firstUserName, secondUserName}:users) =>{
const {currentPlayer} = useSelector((state:any)=>state.game)
    return (
        <StyledInfoBoard>
            <div>
               <div className={currentPlayer === IPlayers.PLAYER_ONE ? "selected":""}> First user :<img src={black}/></div>{firstUserName}
            </div>
            <div>
                <div className={currentPlayer === IPlayers.PLAYER_TWO ? "selected":""}>Second user :<img src={red}/></div>{secondUserName}
            </div>
        </StyledInfoBoard>
    )


}

export default InfoBoard

const StyledInfoBoard = styled.div`
width:150px;
height:300px;
background-color:#340E52;
border-radius:20px;
position:absolute;
padding:20px;
>div{
    color:white;
    font-size:20px;
    padding-top:20px;
    height:50px;
    position:relative;
    img{
        width:20px;
        position:absolute;
        right:10px;
        top:23px;
    }
    >div{
        width:170px;

    }

}
.selected{
    background-color:red;
}

`