import styled from "styled-components"
import black from '../assets/black.png'
import red from '../assets/red.png'
import arrow from '../assets/arrow.gif'
import { useSelector } from 'react-redux'
import { IGame } from "../utils/interfaces"
import { Players } from "../utils/enums"
import gameReducer from "../reducers/game"

type users = {
    firstUserName: string;
    secondUserName: string;

}


const InfoBoard = ({ firstUserName, secondUserName }: users) => {
    const { currentPlayer } = useSelector((state: any) => state.game)
    return (
        <StyledInfoBoard>
            <img className={currentPlayer === Players.PLAYER_ONE ? "first" : currentPlayer === Players.PLAYER_TWO ? "second" : "none"} src={arrow} />
            <div>
                <div className={currentPlayer === Players.PLAYER_ONE ? "selected" : ""}> First user :<img src={black} /></div>{firstUserName}
            </div>
            <div>
                <div className={currentPlayer === Players.PLAYER_TWO ? "selected" : ""}>Second user :<img src={red} /></div>{secondUserName}
            </div>
        </StyledInfoBoard>
    )


}

export default InfoBoard

const StyledInfoBoard = styled.div`
width:180px;
height:300px;
background-color:#340E52;
border-radius:20px;
position:absolute;
padding:20px;
img{
    width: 40px;
    position: absolute;
    right: -20px;
    &.first{
        top: 32px;
    }
    &.second{
        top: 105px;
    }
    &.none{
        display:none;
    }
}
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
    
    border:2px solid #E59C1D;
}

`