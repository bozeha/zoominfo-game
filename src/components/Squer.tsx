
import styled from 'styled-components'
import redCoin from '../assets/red.png'
import blackCoin from '../assets/black.png'
import coin from '../assets/coin.gif'
import { PlayerColors } from '../utils/enums'

type props = {
    index: number,
    color: number,
    status: boolean,
    updateSquer: any
}

const Squer = ({ index, color, status, updateSquer }: props) => {

    return <StyledSquer className={`${!status ? "" : color === PlayerColors.BLACK ? "black" : color === PlayerColors.RED ? "red" : "gray"}`} id={`squer-class${index}`} onClick={() => updateSquer(index)} >{index}</StyledSquer>
}

export default Squer

const StyledSquer = styled.div`

width:55px;
height:55px;
margin:15px;
border-radius:2px;
border:1px solid lightblue;
cursor:pointer;
background-color:rgba(0,0,0,0.2);
&:hover{
    box-shadow:2px 2px 5px 1px lightblue;
}
&.red{
    background-image:url(${redCoin});
    background-repeat:no-repeat;
    background-size:100%;
}
&.black{
    background-image:url(${blackCoin});
    background-repeat:no-repeat;
    background-size:100%;
}
&.gray{
    background-image:url(${coin});
    background-repeat:no-repeat;
    background-size:100%;
    border-color:#E59C1D;
}

`