
import styled from 'styled-components'
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';

const Popup = ({ title, inputs, status, buttons }: any) => {
    useEffect(() => {
        console.log(`rerender popup`);
    }, [])
    return (
        <StyledPopup>
            <button className="close" onClick={() => status(false)}>x</button>
            <h3>{title}</h3>
            <StyledBottons>

            </StyledBottons>
            <StyleInputs>
                {inputs && inputs.map((current: any) => (
                    <div key={uuid()}>
                        <span>{current.title}</span>
                        <input value={current.val} onChange={(e) => current.set(e.target.value)} />
                    </div>
                ))

                }
            </StyleInputs>
            {buttons.map((current: any) => (
                <button key={uuid()} onClick={() => current.action()}>{current.text}</button>

            ))}
        </StyledPopup>
    )

}

export default Popup

const StyledPopup = styled.div`

background-color:lightgray;
width:500px;
height:200px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
border-radius: 20px;
display:flex;
flex-direction:column;
background-image: linear-gradient(to top, white 75%, #340E52 25%);
h3{
    text-align:center;
    color:white;
    font-weight:bold;
}
}
.close{
    width:20px;
    height:20px;
    position:absolute;
    right:5px;
    cursor:pointer;
    background-color:transparent;
    color:white;
    border:none;
    font-size:20px;
    
}
`

const StyledBottons = styled.div`

`
const StyleInputs = styled.div``